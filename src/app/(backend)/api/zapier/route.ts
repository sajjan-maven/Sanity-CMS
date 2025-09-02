import { NextResponse } from 'next/server';

const ZAPIER_ENDPOINTS: Record<string, string> = {
  home: process.env.NEXT_PUBLIC_HOME_PAGE_EMAIL_CAPTURE || '',
  blog: process.env.NEXT_PUBLIC_BLOG_PAGE_EMAIL_CAPTURE || '',
  tools: process.env.NEXT_PUBLIC_TOOLS_PAGE_EMAIL_CAPTURE || '',
  demo: process.env.NEXT_PUBLIC_DEMO_PAGE_FORM || '',
  saas: process.env.NEXT_PUBLIC_SAAS_PAGE_FORM || '',
  okta: process.env.NEXT_PUBLIC_OKTA_PAGE_FORM || '',
};

export async function POST(request: Request) {
  try {
    const { event_type, data } = await request.json();

    // Validate required fields
    if (!event_type || !data) {
      return NextResponse.json(
        { error: "Missing event_type or data" },
        { status: 400 }
      );
    }

    const zapierEndpoint = ZAPIER_ENDPOINTS[event_type];

    if (!zapierEndpoint) {
      return NextResponse.json(
        { error: "Invalid event type" },
        { status: 400 }
      );
    }

    // Forward to Zapier
    const zapierResponse = await fetch(zapierEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (!zapierResponse.ok) {
      const errorText = await zapierResponse.text();
      throw new Error(`Zapier request failed: ${zapierResponse.status} - ${errorText}`);
    }

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error('Zapier API error:', error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error"
      },
      { status: 500 }
    );
  }
}