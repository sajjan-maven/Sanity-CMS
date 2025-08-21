import React from "react";
// import {Metadata} from "next";
import PrivacyPage from "./components/PrivacyPage";
import {PrivacyPolicy} from "../services/privacy-policy.service";

// export async function generateMetadata(): Promise<Metadata> {
//     const data = await PrivacyPolicy.getPolicyData();
//     const privacyData = data?.data?.metaData || {};

//     return {
//         title: privacyData.metaTitle || "Privacy | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
//         description:
//             privacyData.metaDescription ||
//             "Stitchflow automates SaaS management by mapping every single access policy and exception across all of the variables like role and location in your environment.",
//         openGraph: {
//             title: privacyData.metaTitle || "Privacy | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
//             description:
//                 privacyData.metaDescription ||
//                 "Stitchflow automates SaaS management by mapping every single access policy and exception across all of the variables like role and location in your environment.",
//             type: "website",
//             url: privacyData.url ? `${privacyData.url}/privacy` : "https://www.stitchflow.com/privacy",
//             images: privacyData?.shareImage?.url ? [{url: privacyData.shareImage.url}] : [],
//         },
//         twitter: {
//             title: privacyData.metaTitle || "Privacy | Stitchflow, SaaS Management as Customizable as Spreadsheets.",
//             description:
//                 privacyData.metaDescription ||
//                 "Stitchflow automates SaaS management by mapping every single access policy and exception across all of the variables like role and location in your environment.",
//             card: "summary_large_image",
//             images: privacyData?.shareImage?.url ? [privacyData.shareImage.url] : [],
//         },
//         verification: {
//             google: privacyData.googleVerification || "",
//         },
//         alternates: {
//             canonical: privacyData.url ? `${privacyData.url}/privacy` : "https://www.stitchflow.com/privacy",
//         },
//     };
// }

export default async function Privacy() {
    const [privacyPolicyData] = await Promise.all([PrivacyPolicy.getPolicyData()]);

    return <PrivacyPage privacyData={privacyPolicyData} />;
}

export const metadata = {
    title: "Privacy Policy | Stitchflow",
    description:
        "Stitchflow's data protection and privacy standards for SaaS management. Complete information on our security practices.",
    openGraph: {
        title: "Privacy Policy | Stitchflow",
        description:
            "Stitchflow's data protection and privacy standards for SaaS management. Complete information on our security practices.",
        url: "https://www.stitchflow.com/privacy",
        type: "website",
        images: [{url:'https://www.stitchflow.com/images/OG-privacy-link.png', alt: 'Stitchflow SaaS Management Platform'}],
    },
    twitter: {
        card: "summary_large_image",
        title: "Privacy Policy | Stitchflow",
        description:
            "Stitchflow's data protection and privacy standards for SaaS management. Complete information on our security practices.",
    },
    alternates: {
        canonical: "https://www.stitchflow.com/privacy",
    },
};
