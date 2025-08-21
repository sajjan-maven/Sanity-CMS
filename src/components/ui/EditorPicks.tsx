import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Article {
    _id: string;
    _type: "post";
    title: string | null;
    slug: string | null;
    excerpt: string | null;
    category: {
        _id: string;
        title: string | null;
        slug: string | null;
    } | null;
    image: {
        asset: {
            url: string | null;
        } | null;
        altText: string | null;
    } | null;
};

const EditorPicks = ({ editorsPicks }: { editorsPicks?: Article[] }) => {

    return (
        <section className="w-full px-4 bg-gradient-to-b from-[#f8f5f3] to-white bg-[#f8f5f3]">
            <div className="w-full max-w-[1256px] mx-auto">
                <div className="text-4xl font-semibold mb-8">
                    <h3>Editor&rsquo;s picks</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 lg:pb-8 gap-5 rounded-3xl border border-[#545058] bg-transparent">
                    {editorsPicks && editorsPicks?.length > 0 ? (
                        editorsPicks.map((article) => (
                            <Link
                                href={`/blog/${article.slug}`}
                                key={article._id}
                                style={{ textDecoration: "none" }}
                                rel="noopener noreferrer"
                                className="w-full max-w-[500px] md:max-w-full mx-auto"
                            >
                                <div key={article._id} >
                                    <div className="rounded-sm w-full overflow-hidden">
                                        <div className="w-full pt-[77.58%] relative">
                                            {article?.image?.asset?.url && <Image
                                                src={article?.image?.asset?.url}
                                                alt={article?.image?.altText || "Banner"}
                                                fill
                                                className="absolute top-0 left-0 w-full h-full object-cover"
                                                priority
                                            />}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="mt-2 md:mb-2.5 text-[#f25c30] font-semibold">
                                            {article?.category?.title}
                                        </div>
                                        <h4 className="text-lg font-medium">{article?.title}</h4>
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
