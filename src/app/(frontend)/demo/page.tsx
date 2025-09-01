import React from "react";
import { Metadata } from 'next';
import DemoComponent from "./components/DemoComponent";
import LeftSection from "./components/LeftSection";
import Testimonials from "./components/Testimonials";
import { sanityFetch } from '@/sanity/lib/live';
import { demoSettingsQuery } from '@/sanity/lib/queries/singletons/demo';

export default async function DemoDesktop() {
    const { data: demoSettings } = await sanityFetch({
        query: demoSettingsQuery,
        params: {},
    });

    return (
        <div>
            <div className="flex flex-col items-center justify-items-stretch relative bg-[#faf9f8]">
                <div className="relative w-full max-w-[1360px] flex flex-col-reverse lg:flex-row h-full">
                    <LeftSection />
                    <DemoComponent />
                </div>
                <Testimonials testimonialsG2={demoSettings?.testimonialsG2} heading={demoSettings?.testimonialsHeading || ""} />
            </div>
        </div>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const { data: demoSettings } = await sanityFetch({
        query: demoSettingsQuery,
        params: {},
    });

    const seo = demoSettings?.seo;

    return {
        title: seo?.title || "Schedule a demo | Stitchflow",
        description: seo?.description || "See how Stitchflow helps IT teams discover shadow apps, fix access risks, and reclaim SaaS waste. Schedule a personalized demo today.",
        openGraph: {
            title: seo?.title || "Schedule a demo | Stitchflow",
            description: seo?.description || "See how Stitchflow helps IT teams discover shadow apps, fix access risks, and reclaim SaaS waste. Schedule a personalized demo today.",
            url: "https://www.stitchflow.com/demo",
            type: "website",
            images: seo?.image ? [{ url: seo.image.asset.url, alt: 'Stitchflow SaaS Management Platform' }] : [{ url: 'https://www.stitchflow.com/schedule-demo/OG-demo-link.png', alt: 'Stitchflow SaaS Management Platform' }],
        },
        twitter: {
            card: "summary_large_image",
            title: seo?.title || "Schedule a demo | Stitchflow",
            description: seo?.description || "See how Stitchflow helps IT teams discover shadow apps, fix access risks, and reclaim SaaS waste. Schedule a personalized demo today.",
        },
        alternates: {
            canonical: "https://www.stitchflow.com/demo",
        },
    };
}
