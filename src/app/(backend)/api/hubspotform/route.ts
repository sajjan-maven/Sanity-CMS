import { NextResponse } from 'next/server';

type HubSpotSubmission = {
  formId: string;
  fields: Record<string, string>;
  pageContext?: {
    pageUri: string;
    pageName: string;
  };
};

const HUBSPOT_ENDPOINTS: Record<string, string> = {
    home: process.env.NEXT_PUBLIC_HERO_PAGE_HUBSPOT_FORMGUID || '',
    blog: process.env.NEXT_PUBLIC_BLOG_PAGE_HUBSPOT_FORMGUID || '',
    tools: process.env.NEXT_PUBLIC_TOOLS_PAGE_HUBSPOT_FORMGUID || '',
    saas: process.env.NEXT_PUBLIC_SAAS_PAGE_HUBSPOT_FORMGUID || '',
    okta: process.env.NEXT_PUBLIC_OKTA_PAGE_HUBSPOT_FORMGUID || '',
    integrations: process.env.NEXT_PUBLIC_INTEGRATIONS_PAGE_HUBSPOT_FORMGUID || '',
    pricing: process.env.NEXT_PUBLIC_PRICING_PAGE_HUBSPOT_FORMGUID || '',
    webinar: process.env.NEXT_PUBLIC_WEBINAR_PAGE_HUBSPOT_FORMGUID || '',
    software_asset_management: process.env.NEXT_PUBLIC_SOFTWARE_ASSET_MANAGEMENT_HUBSPOT_FORMGUID || '',
    auditReadiness: process.env.NEXT_PUBLIC_AUDIT_READINESS_PAGE_HUBSPOT_FORMGUID || '',
};

export async function POST(request: Request) {
  try {
    const { fields, pageContext }: HubSpotSubmission = await request.json();
    
    // Validate request body
    if (!fields || !pageContext?.pageName) {
      return NextResponse.json(
        { error: "Missing required fields or page context" },
        { status: 400 }
      );
    }

    const formGuid = HUBSPOT_ENDPOINTS[pageContext.pageName];
    const portalId = process.env.NEXT_PUBLIC_HERO_PAGE_HUBSPOT_PORTAL_ID;
    // Validate form GUID exists for this page
    if (!formGuid) {
      return NextResponse.json(
        { error: "Form configuration not found for this page" },
        { status: 400 }
      );
    }

    const hubspotResponse = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: Object.entries(fields).map(([name, value]) => ({ name, value })),
          context: {
            pageUri: pageContext.pageUri,
            pageName: pageContext.pageName
          }
        })
      }
    );

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.json();
      console.error('HubSpot API error details:', errorData);
      
      // Check for email validation error in HubSpot response
      if (hubspotResponse.status === 400 && errorData.errors) {
        interface HubSpotError {
          errorType?: string;
          message?: string;
        }
        const emailError = errorData.errors.find((error: HubSpotError) => 
          error.errorType === 'INVALID_EMAIL' || 
          error.message?.includes('email') ||
          error.message?.includes('domain')
        );
        
        if (emailError) {
          // Extract email domain from submitted fields
          const submittedEmail = fields.email || fields.Email || fields.EMAIL;
          const domain = submittedEmail?.split('@')[1]?.toLowerCase();
          
          if (domain) {
            return NextResponse.json(
              { 
                error: `Please enter a different email address. This form does not accept addresses from ${domain}.` 
              },
              { status: 400 }
            );
          }
        }
      }

      // Fallback error message
      return NextResponse.json(
        { 
          error: errorData.message || `HubSpot request failed with status ${hubspotResponse.status}` 
        },
        { status: hubspotResponse.status }
      );
    }

    const responseData = await hubspotResponse.json();
    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );

  } catch (error) {
    console.error('HubSpot API error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}