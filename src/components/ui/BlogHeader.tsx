import React from "react";
import BlogHeaderEmailCapture from "./BlogHeaderEmailCapture";

interface BlogHeaderProps {
    heroText: string;
}

const BlogHeader = ({ heroText }: BlogHeaderProps) => {

    return (
        <>
            <section className="w-full px-6 py-20 md:py-20 bg-[#e4dbd0]">
                <header>
                    <h1 className="text-center text-4xl font-semibold">{heroText}</h1>
                </header>
                <BlogHeaderEmailCapture />
            </section>
        </>
    );
};

export default BlogHeader;
