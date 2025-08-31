"use client";

import Image from "next/image";
import { PageBuilderType } from "@/types";

export type DisconnectedAppsFeaturesBlockProps =
    PageBuilderType<"disconnectedAppsFeaturesBlock">;

export default function DisconnectedAppsFeaturesBlock(
    props: DisconnectedAppsFeaturesBlockProps & {
        heading?: string;
        highlightedText?: string;
        description?: string;
        features?: {
            title: string;
            description: string;
            image?: {
                alt?: string;
                asset?: {
                    url: string;
                    metadata?: { dimensions?: { width: number; height: number } };
                };
            };
        }[];
    }
) {
    const { heading, highlightedText, description, features = [] } = props;

    return (
        <section className="pt-4 pb-16 px-4 md:px-10 bg-[#f7f5f2]">
            <div className="max-w-[1256px] mx-auto text-center md:text-left">
                {/* Heading */}
                {heading && (
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e1e1e]">
                        {heading.split(new RegExp(`(${highlightedText})`, "gi")).map(
                            (part, i) =>
                                highlightedText &&
                                    part.toLowerCase() === highlightedText.toLowerCase() ? (
                                    <span key={i} className="text-[#c7432e]">
                                        {part}
                                    </span>
                                ) : (
                                    <span key={i}>{part}</span>
                                )
                        )}
                    </h2>
                )}

                {/* Block description */}
                {description && (
                    <p className="mt-16 text-base md:text-lg max-w-[1116px] mx-auto">
                        {description}
                    </p>
                )}

                {/* Features Grid */}
                <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1116px] mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            {/* Feature Image */}
                            {feature.image?.asset?.url && (
                                <div className="w-full flex justify-center lg:justify-start mb-6">
                                    <Image
                                        src={feature.image.asset.url}
                                        alt={feature.image?.alt ?? feature.title ?? ""}
                                        width={320}
                                        height={200}
                                        className="w-full max-w-[320px] h-auto object-contain"
                                    />
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="font-semibold text-lg md:text-xl text-[#1E1E1E] mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base text-[#363338] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}