"use client";

import { PageBuilderType } from "@/types";

export type SAMActionBlockProps = PageBuilderType<"samActionBlock">;

export default function SAMActionBlock(props: SAMActionBlockProps) {
    const { tagline, heading, highlightedText, description, videoUrl } = props;

    return (
        <section className="pb-[60px] lg:pb-[100px] bg-[#f7f5f2]">
            <div className="max-w-4xl mx-auto flex flex-col items-center px-4 text-center">
                {tagline && (
                    <p className="font-medium text-[#7B7481] bg-white rounded-full inline px-6 py-1">
                        {tagline}
                    </p>
                )}

                {heading && (
                    <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight mt-4">
                        {heading.split(new RegExp(`(${highlightedText})`, "gi")).map((part, i) =>
                            part.toLowerCase() === highlightedText?.toLowerCase() ? (
                                <span key={i} className="text-[#618D57]">
                                    {part}
                                </span>
                            ) : (
                                part
                            )
                        )}
                    </h2>
                )}

                {description && (
                    <p className="text-[#363338] text-base leading-relaxed mt-4 mb-12">
                        {description}
                    </p>
                )}

                {videoUrl && (
                    <div
                        style={{
                            position: "relative",
                            paddingBottom: "calc(57.006802721088434% + 41px)",
                            height: 0,
                            width: "100%",
                        }}
                    >
                        <iframe
                            src={videoUrl}
                            title={heading || "SAM Action Video"}
                            frameBorder="0"
                            loading="lazy"
                            allow="clipboard-write"
                            allowFullScreen
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                colorScheme: "light",
                            }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}