"use client";

import Image from "next/image";
import { PageBuilderType } from "@/types";

export type DisconnectedAppsEmpoweredTeamsBlockProps =
    PageBuilderType<"disconnectedAppsEmpoweredTeamsBlock">;

export default function DisconnectedAppsEmpoweredTeamsBlock(
    props: DisconnectedAppsEmpoweredTeamsBlockProps & {
        heading?: string;
        brands?: {
            image?: {
                alt?: string;
                asset?: {
                    url: string;
                    metadata?: { dimensions?: { width: number; height: number } };
                };
            };
            caseStudy?: boolean;
            caseStudyLink?: string;
        }[];
    }
) {
    const { heading, brands = [] } = props;

    return (
        <section className="w-full pb-16 bg-[#f9f6f2]">
            <div className="max-w-[1256px] px-4 mx-auto text-center">
                {heading && (
                    <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight mb-16 pt-8">
                        {heading}
                    </h2>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="bg-[#f3eee7] rounded-xl flex flex-col justify-between items-center pt-10 pb-4 px-6 min-h-[180px]"
                        >
                            {brand.image?.asset?.url && (
                                <Image
                                    src={brand.image.asset.url}
                                    alt={brand.image?.alt || "brand icon"}
                                    width={brand.image.asset.metadata?.dimensions?.width || 120}
                                    height={brand.image.asset.metadata?.dimensions?.height || 40}
                                    className="object-contain my-6"
                                />
                            )}

                            {brand.caseStudy ? (
                                <a
                                    href={brand.caseStudyLink || "#"}
                                    className="text-[#4b4b4b] underline hover:text-black transition font-medium"
                                >
                                    Read Case Study →
                                </a>
                            ) : (
                                <div className="h-[21px]"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}