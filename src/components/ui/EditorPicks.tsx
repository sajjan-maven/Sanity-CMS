import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HeroSection {
    urlSlug?: string;
    category?: string;
    bannerImage: {
        url: string;
    };
}

interface Article {
    id: string;
    heroSection: HeroSection;
    blogTitle: string;
}

const EditorPicks = ({ popularData }: { popularData?: Article[] }) => {

    return (
        <section className="w-full px-4 bg-gradient-to-b from-[#f8f5f3] to-white bg-[#f8f5f3]">
            <div className="w-full max-w-[1256px] mx-auto">
                <div className="text-4xl font-semibold mb-8">
                    <h3>Editor&rsquo;s picks</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 lg:pb-8 gap-5 rounded-3xl border border-[#545058] bg-transparent">
                    {popularData && popularData?.length > 0 ? (
                        popularData.map((article) => (
                            <Link
                                href={`/blog/${article.heroSection?.urlSlug}`}
                                key={article.id}
                                style={{ textDecoration: "none" }}
                                rel="noopener noreferrer"
                                className="w-full max-w-[500px] md:max-w-full mx-auto"
                            >
                                <div key={article.id} >
                                    <div className="rounded-sm w-full overflow-hidden">
                                        <div className="w-full pt-[77.58%] relative">
                                            <Image
                                                src={article?.heroSection.bannerImage?.url}
                                                alt={article?.blogTitle || "Banner"}
                                                fill
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mt-2 md:mb-2.5 text-[#f25c30] font-semibold">
                                            {article?.heroSection?.category}
                                        </div>
                                        <h4 className="text-lg font-medium">{article?.blogTitle}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No Editor&rsquo;s picks in here.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default EditorPicks;
