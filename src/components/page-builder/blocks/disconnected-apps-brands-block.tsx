"use client";

import Image from "next/image";
import { PageBuilderType } from "@/types";

export type DisconnectedAppsBrandsBlockProps =
    PageBuilderType<"disconnectedAppsBrandsBlock">;

type BrandStat = {
    stat: string;
    description: string;
    logo?: {
        asset?: {
            url: string;
            metadata?: { dimensions?: { width: number; height: number } };
        };
        alt?: string;
    };
    width?: number;
    height?: number;
};

export default function DisconnectedAppsBrandsBlock(
    props: DisconnectedAppsBrandsBlockProps & { brandStats?: BrandStat[] }
) {
    const { brandStats = [] } = props;

    return (
        <section className="py-16 md:py-18 bg-[#F0EBE4]">
            <div className="flex flex-col items-center max-w-[1312px] px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-4">
                    {brandStats.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-9 rounded-lg flex flex-col"
                        >
                            <div className="border-b border-[#CCBAA5] pb-8 mb-4 flex-1 flex flex-col">
                                <h2 className="font-bold text-[32px] sm:text-[42px]">
                                    {item.stat}
                                </h2>
                                <p className="text-[#7B7481] font-bold text-xl sm:text-2xl mt-2">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex justify-start items-center h-10">
                                {item.logo?.asset?.url && (
                                    <Image
                                        alt={item.logo?.alt || "Brand Logo"}
                                        src={item.logo.asset.url}
                                        width={item.width || 120}
                                        height={item.height || 40}
                                        className="object-contain"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}