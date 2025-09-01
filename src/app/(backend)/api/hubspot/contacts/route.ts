import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {
    const {email} = await req.json();

    try {
        const createResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_PRIVATE_KEY}`,
            },
            body: JSON.stringify({properties: {email}}),
        });

        const data = await createResponse.json();

        if (createResponse.status === 409 && data?.message?.includes("Contact already exists")) {
            return NextResponse.json(
                {
                    message: "Contact already exists",
                    existingContactId: data.message.match(/\d+/)?.[0] ?? null,
                },
                {status: 200}
            );
        }

        if (!createResponse.ok) {
            return NextResponse.json(data, {status: createResponse.status});
        }

        return NextResponse.json(data, {status: 200});
    } catch {
        return NextResponse.json({error: "HubSpot API error"}, {status: 500});
    }
}
