import React from "react";
import BlogHeaderEmailCapture from "./BlogHeaderEmailCapture";


interface HeroSection {
    urlSlug?: string;
    category?: string;
    postedSummary?: string;
    bannerImage?: {
        url: string;
    };
}

interface BlogData {
    id: string;
    blogTitle: string;
    heroSection?: HeroSection;
}

interface BlogHeroSectionProps {
    blogData?: BlogData;
}

const BlogHeader = async ({ blogData }: BlogHeroSectionProps) => {

    return (
        <>
            <section className="w-full px-6 py-20 md:py-20 bg-[#e4dbd0]">
                <header>
                    <h1 className="text-center text-4xl font-semibold">Get expert-led insights on Modern IT</h1>
                </header>
                <BlogHeaderEmailCapture />
            </section>
        </>
    );
};

export default BlogHeader;
