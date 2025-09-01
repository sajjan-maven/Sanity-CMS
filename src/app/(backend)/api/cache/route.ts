// import { NextResponse } from "next/server";

// export async function GET() {
//     const response = new NextResponse("Cached API Response");

//     response.headers.set("Cache-Control", "public, max-age=86400");
//     response.headers.set("ETag", "W/\"123456\"");
//     response.headers.set("Last-Modified", new Date().toUTCString());

//     return response;
// }

// import {NextResponse} from "next/server";

// export async function GET() {
//     const response = new NextResponse("Blocked", {
//         status: 403,
//         headers: {
//             "X-Robots-Tag": "noindex, nofollow",
//             "Content-Type": "text/plain",
//             "Cache-Control": "public, max-age=86400",
//             ETag: 'W/"123456"',
//             "Last-Modified": new Date().toUTCString(),
//         },
//     });

//     return response;
// }

import {NextResponse} from "next/server";

export async function GET() {
    return new NextResponse("OK", {
        status: 200,
        headers: {
            "Content-Type": "text/plain",
            "Cache-Control": "public, max-age=86400",
            ETag: 'W/"123456"',
            "Last-Modified": new Date().toUTCString(),
        },
    });
}
