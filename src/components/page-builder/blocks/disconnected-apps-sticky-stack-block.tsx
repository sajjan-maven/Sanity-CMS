"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { PageBuilderType } from "@/types";

export type DisconnectedAppsStickyStackBlockProps =
    PageBuilderType<"disconnectedAppsStickyStackBlock">;

type StickyFeature = {
    title: string;
    description: string;
    image?: {
        alt?: string;
        asset?: {
            url: string;
            metadata?: { dimensions?: { width: number; height: number } };
        };
    };
    mobileImage?: {
        alt?: string;
        asset?: {
            url: string;
            metadata?: { dimensions?: { width: number; height: number } };
        };
    };
};

export default function DisconnectedAppsStickyStackBlock(
    props: DisconnectedAppsStickyStackBlockProps & {
        features?: StickyFeature[];
        eyebrow?: string;
        heading?: string;
        highlightedText?: string;
        description?: string;
        ctaLabel?: string;
        ctaLink?: string;
    }
) {
    const router = useRouter();
    const {
        eyebrow,
        heading,
        highlightedText,
        description,
        ctaLabel,
        ctaLink,
        features = [],
    } = props;

    return (
        <section className="flex flex-col items-center justify-center bg-[#f7f5f2]">
            <div className="px-4 py-16">
                <div className="max-w-[1256px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                    {/* LEFT COLUMN */}
                    <div className="md:col-span-2 text-center md:text-left">
                        {eyebrow && (
                            <p className="font-medium text-[#7B7481] bg-white rounded-full inline px-6 py-1">
                                {eyebrow}
                            </p>
                        )}
                        {heading && (
                            <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight mt-4 max-w-[372px]">
                                {heading.split(
                                    new RegExp(`(${highlightedText})`, "gi")
                                ).map((part, i) =>
                                    highlightedText &&
                                        part.toLowerCase() === highlightedText.toLowerCase() ? (
                                        <span key={i} className="text-[#4E7445]">
                                            {part}
                                        </span>
                                    ) : (
                                        <span key={i}>{part}</span>
                                    )
                                )}
                            </h2>
                        )}
                        {description && (
                            <p className="text-[#363338] text-base leading-relaxed mt-4 max-w-[431px]">
                                {description}
                            </p>
                        )}
                        {ctaLabel && (
                            <button
                                className="text-sm py-4 px-8 font-medium mt-5 mx-auto border border-[#54505833] rounded-lg shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338]"
                                onClick={() => router.push(ctaLink || "/demo")}
                            >
                                {ctaLabel}
                            </button>
                        )}
                    </div>

                    {/* RIGHT COLUMN - Desktop */}
                    <div className="hidden md:flex md:col-span-3">
                        <div className="flex flex-col gap-10 overflow-y-auto pr-4 max-h-[500px] custom-scrollbar">
                            {features.map((item, idx) => (
                                <div key={idx} className="flex flex-col gap-4">
                                    <h3 className="text-lg md:text-xl font-medium max-w-xl">
                                        <span className="font-bold">{item.title}</span> <br />{" "}
                                        {item.description}
                                    </h3>
                                    {item.image?.asset?.url && (
                                        <Image
                                            alt={item.image?.alt || "feature image"}
                                            src={item.image.asset.url}
                                            width={600}
                                            height={100}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Mobile */}
                    <div className="md:hidden">
                        {features.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-4 bg-white px-4 py-8 rounded-3xl mt-5"
                            >
                                <h3 className="text-lg md:text-xl font-medium text-center">
                                    <span className="font-bold">{item.title}</span> <br />{" "}
                                    {item.description}
                                </h3>
                                {item.mobileImage?.asset?.url && (
                                    <Image
                                        alt={item.mobileImage?.alt || "feature mobile image"}
                                        src={item.mobileImage.asset.url}
                                        width={600}
                                        height={100}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}