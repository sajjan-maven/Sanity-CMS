"use client";

import Image from "next/image";
import { PageBuilderType } from "@/types";

export type DisconnectedAppsSectionWithCardsBlockProps =
    PageBuilderType<"disconnectedAppsSectionWithCardsBlock">;

export default function DisconnectedAppsSectionWithCardsBlock(
    props: DisconnectedAppsSectionWithCardsBlockProps & {
        tagline?: string;
        heading?: string;
        highlightedText?: string;
        description?: string;
        cards?: {
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
    const { tagline, heading, highlightedText, description, cards = [] } = props;

    return (
        <section className="pt-4 pb-16 px-4 md:px-10 bg-[#f7f5f2]">
            <div className="max-w-[1256px] mx-auto text-center">
                {/* Tagline */}
                {tagline && (
                    <p className="font-medium text-[#7B7481] bg-white rounded-full inline px-6 py-1">
                        {tagline}
                    </p>
                )}

                {/* Heading */}
                {heading && (
                    <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight mt-4">
                        {highlightedText
                            ? heading
                                .split(new RegExp(`(${highlightedText})`, "gi"))
                                .map((part, i) =>
                                    part.toLowerCase() === highlightedText.toLowerCase() ? (
                                        <span key={i} className="text-[#7A5EA4]">
                                            {part}
                                        </span>
                                    ) : (
                                        <span key={i}>{part}</span>
                                    )
                                )
                            : heading}
                    </h2>
                )}

                {/* Description */}
                {description && (
                    <p className="text-[#363338] max-w-[768px] mx-auto mt-6 text-base md:text-lg leading-relaxed">
                        {description}
                    </p>
                )}

                {/* Cards */}
                <div className="mt-16 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 text-left border border-gray-200"
                        >
                            {card.image?.asset?.url && (
                                <div className="w-full h-[160px] relative mb-4">
                                    <Image
                                        src={card.image.asset.url}
                                        alt={card.image?.alt ?? card.title ?? ""}
                                        fill
                                        className="object-contain rounded-lg"
                                    />
                                </div>
                            )}
                            <p className="font-bold text-lg mb-2">{card.title}</p>
                            <p className="text-[#7B7481] text-sm leading-relaxed max-w-[340px]">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}