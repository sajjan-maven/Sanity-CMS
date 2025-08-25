'use client';

import BlogHeaderEmailCapture from "@/components/ui/BlogHeaderEmailCapture";
import { PageBuilderType } from "@/types";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export type SAMHeroSectionProps = PageBuilderType<"samHeroSection">;

type MarqueeImage = {
    asset?: {
        asset?: {
            url: string;
            metadata?: {
                lqip?: string;
                dimensions?: { width: number; height: number };
            };
        };
        alt?: string;
    };
    width?: number;
    height?: number;
};

export default function SAMHeroSection(props: SAMHeroSectionProps) {
    const {
        title,
        description,
        heroImage,
        backedByImage,
        marqueeImages = [],
    } = props as SAMHeroSectionProps & {
        marqueeImages?: MarqueeImage[];
    };

    return (
        <section className="py-10 lg:py-16 bg-[#f7f5f2]">
            <div className="max-w-[1256px] mx-auto flex flex-col lg:flex-row items-center lg:gap-10 px-4">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="w-full">
                        <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] leading-tight lg:max-w-[500px]">
                            {title ? (
                                (() => {
                                    const words = title.trim().split(" ");
                                    const lastThree = words.slice(-3).join(" ");
                                    const rest = words.slice(0, -3).join(" ");
                                    return (
                                        <>
                                            {rest}{" "}
                                            <span className="text-[#EB6548]"> {lastThree}</span>
                                        </>
                                    );
                                })()
                            ) : (
                                <>
                                    Software Asset <br /> Management <br /> That Actually <br />
                                    <span className="text-[#EB6548]">Closes the Gaps</span>
                                </>
                            )}
                        </h1>
                        <p className="text-base sm:text-lg text-[#363338] mt-4 lg:max-w-[500px]">
                            {description ||
                                "Disconnected apps are your biggest blind spot. Stitchflow gives IT complete control, eliminating SCIM, tedious setup, and scripts."}
                        </p>

                        <div className="flex items-center justify-center lg:justify-self-start">
                            <div className="w-fit lg:w-full mx-auto lg:mx-0 lg:ml-0 lg:mr-auto">
                                <BlogHeaderEmailCapture />
                            </div>
                        </div>

                        <div className="w-full bg-[#F7F5F2] py-10">
                            <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between px-4">
                                {/* Backed by */}
                                {backedByImage?.asset?.url && (
                                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[100px] lg:border-r border-[#E0D5C8]">
                                        <p className="text-gray-600 text-sm mb-2 text-start w-full">
                                            Backed by
                                        </p>
                                        <Image
                                            alt={backedByImage.alt || "Backed By Logo"}
                                            src={backedByImage.asset.url}
                                            width={backedByImage.width || 90}
                                            height={backedByImage.height || 30}
                                            className="h-10 object-contain"
                                        />
                                    </div>
                                )}

                                {/* Trusted by */}
                                {(marqueeImages ?? []).length > 0 && (
                                    <div className="flex flex-col items-center lg:items-start w-full ms-3 mt-10 lg:mt-0">
                                        <p className="text-gray-600 text-sm mb-2 w-full text-center lg:text-left">
                                            Trusted by
                                        </p>
                                        <div className="w-full flex justify-center">
                                            <div className="w-full lg:max-w-[400px] xl:max-w-[480px] min-h-[64px] overflow-hidden">
                                                <Marquee
                                                    pauseOnHover={true}
                                                    autoFill={true}
                                                    speed={50}
                                                    gradient={true}
                                                    gradientColor="#F7F5F2"
                                                    gradientWidth={86}
                                                >
                                                    {marqueeImages.map((image, index) => (
                                                        <div
                                                            key={index}
                                                            className="w-fit h-full flex items-center justify-center px-6"
                                                        >
                                                            <Image
                                                                alt={image.asset?.alt || "company logo"}
                                                                src={image.asset?.asset?.url ?? ""}
                                                                width={image.width || 100}
                                                                height={image.height || 35}
                                                                className="max-w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </Marquee>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                {heroImage?.asset?.url && (
                    <div className="flex-1 w-full flex items-center justify-center">
                        <div className="relative w-full">
                            <Image
                                alt={heroImage.alt || "Hero Image"}
                                src={heroImage.asset.url}
                                width={heroImage.width || 560}
                                height={heroImage.height || 600}
                                className="object-contain mx-auto lg:mx-0"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}