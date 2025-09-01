import React from "react";
import { Metadata } from 'next';
import DemoComponent from "./components/DemoComponent";
import LeftSection from "./components/LeftSection";
import Testimonials from "./components/Testimonials";
import { sanityFetch } from '@/sanity/lib/live';
import { demoSettingsQuery } from '@/sanity/lib/queries/singletons/demo';
import { processMetadata } from "@/lib/utils";

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
                <Testimonials
                    testimonialsG2={demoSettings?.testimonialsG2 || []}
                    heading={demoSettings?.testimonialsHeading || ""}
                />
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
    // const title = seo?.title || "Schedule a demo | Stitchflow";
    // const description = seo?.description || "See how Stitchflow helps IT teams discover shadow apps, fix access risks, and reclaim SaaS waste. Schedule a personalized demo today.";
    // const imageUrl = seo?.image?.asset?.url || 'https://www.stitchflow.com/schedule-demo/OG-demo-link.png';

    return processMetadata({ data: seo as any });
}