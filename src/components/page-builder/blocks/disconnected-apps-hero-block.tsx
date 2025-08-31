"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import { PageBuilderType } from "@/types";

export type DisconnectedAppsHeroBlockProps =
    PageBuilderType<"disconnectedAppsHeroBlock">;

type MarqueeImage = {
    asset?: {
        asset?: {
            url: string;
            metadata?: { dimensions?: { width: number; height: number } };
        };
        alt?: string;
    };
    width?: number;
    height?: number;
};
type HeroImage = {
    alt?: string;
    asset?: {
        url: string;
        metadata?: { dimensions?: { width: number; height: number } };
    };
};

export default function DisconnectedAppsHeroBlock(
    props: DisconnectedAppsHeroBlockProps & { marqueeImages?: MarqueeImage[], heroImage?: HeroImage }
) {
    const router = useRouter();
    const {
        heading,
        highlightedText,
        description,
        ctaLabel,
        ctaLink,
        marqueeImages = [],
        heroImage,
    } = props;
    return (
        <section className="bg-[#f7f5f2]">
            <div className="px-4 md:px-8 pt-8 max-w-[1256px] mx-auto">
                {/* Heading + description */}
                <div className="text-center">
                    {heading && (
                        <h1 className="font-bold text-[36px] md:text-[48px] lg:text-[56px] leading-tight max-w-5xl mx-auto">
                            {heading.split(new RegExp(`(${highlightedText})`, "gi")).map(
                                (part, i) =>
                                    highlightedText &&
                                        part.toLowerCase() === highlightedText.toLowerCase() ? (
                                        <span key={i} className="text-[#4873AD]">
                                            {part}
                                        </span>
                                    ) : (
                                        <span key={i}>{part}</span>
                                    )
                            )}
                        </h1>
                    )}
                    {description && (
                        <p className="md:font-medium text-[13px] md:text-base lg:text-xl mt-4 mx-auto max-w-4xl">
                            {description}
                        </p>
                    )}
                </div>

                {/* CTA button */}
                {ctaLabel && (
                    <div className="my-2 text-center">
                        <button
                            className="text-sm py-4 px-8 font-medium mt-5 mx-auto border border-[#54505833] rounded-lg shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338]"
                            onClick={() => router.push(ctaLink || "/demo")}
                        >
                            {ctaLabel}
                        </button>
                    </div>
                )}

                {/* Trusted By Section */}
                {marqueeImages.length > 0 && (
                    <div className="flex flex-col items-center gap-4 mb-10 mt-16">
                        <p className="text-[#7b7481] text-base">Trusted by</p>
                        <Marquee
                            pauseOnHover
                            speed={60}
                            gradient
                            gradientColor="#faf9f8"
                            gradientWidth={80}
                            className="w-full mx-auto"
                        >
                            {marqueeImages.map((image, index) => (
                                <div key={index} className="px-6 flex items-center">
                                    {image.asset?.asset?.url && (
                                        <Image
                                            alt={image.asset?.alt || "company logo"}
                                            src={image.asset.asset.url}
                                            width={image.width || 120}
                                            height={image.height || 40}
                                            className="object-contain"
                                        />
                                    )}
                                </div>
                            ))}
                        </Marquee>
                    </div>
                )}

                {/* Hero Image */}
                {heroImage?.asset?.url && (
                    <div className="relative w-full max-w-[960px] h-[160px] sm:h-[240px] md:h-[280px] lg:h-[350px] mx-auto border-t-2 border-x-2 border-[#E0D5C8] rounded-t-3xl overflow-hidden">
                        <div className="relative w-full h-full px-3 sm:px-6">
                            <Image
                                alt={heroImage.alt || "Hero Image"}
                                src={heroImage.asset.url}
                                fill
                                quality={100}
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 900px"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}