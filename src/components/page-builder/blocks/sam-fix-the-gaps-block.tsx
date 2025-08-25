"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { PageBuilderType } from "@/types";

export type SAMFixTheGapsBlockProps = PageBuilderType<"samFixTheGapsBlock">;

export default function SAMFixTheGapsBlock(props: SAMFixTheGapsBlockProps) {
  const {
    tagline,
    heading,
    description,
    accordionItems = [],
  } = props;

  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (idx: number) => {
    if (openIndex === idx && accordionItems.length > 1) return;
    setOpenIndex(idx);
  };

  return (
    <section className="pb-[60px] lg:pb-[100px] bg-[#f7f5f2]">
      <div className="max-w-[1256px] mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {tagline && (
            <p className="font-medium text-[#7B7481] bg-white rounded-full inline px-6 py-1">
              {tagline}
            </p>
          )}
          {heading && (
            <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[42px] leading-tight mt-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-[#363338] mx-auto mt-4 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-20 items-start md:min-h-[500px] mt-16">
          {/* Left: Accordion */}
          <section className="w-full max-w-xl mx-auto flex-1 h-full flex flex-col">
            <div className="space-y-6 h-full flex flex-col justify-end">
              {accordionItems.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    role="region"
                    className="px-4 py-5 rounded-lg bg-white"
                  >
                    <h3>
                      <button
                        className="flex items-center justify-between w-full space-x-6 text-base font-bold text-left text-gray-900"
                        onClick={() => handleAccordionClick(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`accordion-content-${idx}`}
                        type="button"
                      >
                        <div className="w-8 h-8 flex items-center justify-center rounded-md border border-[#e0d6c7]">
                          {item.icon?.asset?.url && (
                            <Image
                              src={item.icon.asset.url}
                              alt={item.icon.alt || "Accordion icon"}
                              height={16}
                              width={16}
                              className="w-4 h-4 rounded-2xl"
                            />
                          )}
                        </div>
                        {!isOpen && (
                          <span className="flex-1 text-left">{item.heading}</span>
                        )}
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
                        <div className="flex flex-col gap-0.5">
                          <p className="pt-2.5 text-2xl font-bold text-[#363338]">
                            {item.heading}
                          </p>
                          <p className="text-[#7B7481]">{item.subheading}</p>
                        </div>
                        <div>
                          <div className="flex flex-col md:flex-row gap-8 mb-6 pt-10">
                            {item.subsections?.map((sub, subIdx) => (
                              <div key={subIdx} className="flex-1">
                                <h4 className="font-semibold text-base mb-2 text-left">
                                  {sub.title}
                                </h4>
                                <p className="text-gray-600 text-sm text-left">
                                  {sub.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
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

          {/* Right: Image Placeholder */}
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