"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { PageBuilderType } from "@/types";

export type AuditReadinessLeftAccordionBlockProps =
    PageBuilderType<"auditReadinessLeftAccordionBlock"> & {
        highlightedText?: string | null;
    };

export default function AuditReadinessLeftAccordionBlock(
    props: AuditReadinessLeftAccordionBlockProps
) {
    const { tagline, heading, highlightedText, description } = props;
    const accordionItems = props.accordionItems ?? []; // ✅ normalize null → []

    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordionClick = (idx: number) => {
        if (openIndex === idx && accordionItems.length > 1) return;
        setOpenIndex(idx);
    };

    // ✅ early return if no items
    if (!accordionItems.length) return null;

    return (
        <section className="pb-[60px] lg:pb-[100px] bg-[#f7f5f2]">
            <div className="max-w-[1256px] mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center justify-center text-center">
                    {tagline && (
                        <p className="font-medium text-[#7B7481] bg-white rounded-full inline px-6 py-1">
                            {tagline}
                        </p>
                    )}
                    {heading && (
                        <h1 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight mt-4 max-w-[520px] text-center mx-auto">
                            {highlightedText
                                ? heading.split(new RegExp(`(${highlightedText})`, "gi")).map((part, i) =>
                                    part.toLowerCase() === highlightedText.toLowerCase() ? (
                                        <span key={i} className="text-[#4873AD]">{part}</span>
                                    ) : (
                                        part
                                    )
                                )
                                : heading}
                        </h1>
                    )}
                    {description && (
                        <p className="text-[#363338] mx-auto mt-4 text-base md:text-lg leading-relaxed max-w-[560px]">
                            {description}
                        </p>
                    )}
                </div>

                {/* Layout */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-20 items-center md:min-h-[500px] mt-8 lg:mt-16">
                    {/* Left: Accordion */}
                    <section className="w-full max-w-xl mx-auto flex-1 h-full flex flex-col">
                        <div className="space-y-6 h-full flex flex-col justify-end">
                            {accordionItems.map((item, idx) => {
                                const isOpen = openIndex === idx;
                                return (
                                    <div key={idx} role="region" className="rounded-lg bg-white">
                                        <h3>
                                            <button
                                                className="flex items-center justify-between px-4 pt-5 pb-4 w-full text-xl text-left text-gray-900"
                                                onClick={() => handleAccordionClick(idx)}
                                                aria-expanded={isOpen}
                                                aria-controls={`accordion-content-${idx}`}
                                                type="button"
                                            >
                                                <span
                                                    className={`flex-1 ${isOpen ? "font-semibold" : ""} text-left`}
                                                >
                                                    {item.heading}
                                                </span>
                                                {isOpen ? (
                                                    <Minus className="bg-[#E0D5C8] rounded-full p-1 text-white font-semibold border border-[#CCBAA5]" />
                                                ) : (
                                                    <Plus className="bg-[#E0D5C8] rounded-full p-1 text-white font-semibold border border-[#CCBAA5]" />
                                                )}
                                            </button>
                                        </h3>
                                        {isOpen && (
                                            <div
                                                id={`accordion-content-${idx}`}
                                                className="flex-1 flex flex-col justify-end px-4 pb-5 md:pr-14 gap-2 md:gap-0"
                                            >
                                                <p className="text-[#7B7481]">{item.subheading}</p>
                                                <div className="md:hidden">
                                                    {item.image?.asset?.url && (
                                                        <Image
                                                            src={item.image.asset.url}
                                                            alt={item.image.alt || "Accordion preview"}
                                                            height={600}
                                                            width={600}
                                                            className="w-full h-full rounded-2xl"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Right: Image */}
                    <div className="hidden md:flex flex-1 w-full max-w-2xl h-full">
                        <div className="h-[600px] md:h-full w-full rounded-2xl flex items-center justify-center overflow-hidden">
                            {accordionItems[openIndex]?.image?.asset?.url && (
                                <Image
                                    src={accordionItems[openIndex].image.asset.url}
                                    alt={accordionItems[openIndex].image.alt || "Accordion preview"}
                                    height={640}
                                    width={620}
                                    className="w-full h-full rounded-2xl"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}