"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { PageBuilderType } from "@/types";

export type OktaIdpFaqSectionProps = PageBuilderType<"oktaIdpFaqSection">;

type FaqItem = {
    question: string;
    answer: string;
};

export default function OktaIdpFaqSection(props: OktaIdpFaqSectionProps) {
    const { heading, faqs = [] } = props as OktaIdpFaqSectionProps & {
        faqs?: FaqItem[];
    };

    const [openAccordion, setOpenAccordion] = useState<number | null>(null);

    const toggleAccordion = (index: number | null) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <section className="pt-20 w-full bg-[#F7F5F2] px-6">
            <div className="text-2xl md:text-[40px] mb-8 md:mb-12 text-center max-w-[590px] mx-auto font-medium leading-tight md:leading-[48px]">
                {heading || "Frequently Asked Questions"}
            </div>
            <div className="w-full max-w-[710px] mx-auto">
                {faqs.map((faq, index) => (
                    <button
                        key={index}
                        type="button"
                        className="bg-[#F0EBE4] mb-2 rounded-lg p-4 lg:p-9 w-full md:text-xl md:font-medium cursor-pointer text-[#363338] text-left"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={openAccordion === index}
                    >
                        <div className="flex items-center justify-between">
                            <h3>{faq.question}</h3>
                            {openAccordion === index ? (
                                <Minus className="bg-[#E0D5C8] rounded-full p-1 text-white font-semibold" />
                            ) : (
                                <Plus className="bg-[#E0D5C8] rounded-full p-1 text-white font-semibold" />
                            )}
                        </div>
                        <div
                            className={`${openAccordion === index ? "block" : "hidden"
                                } text-start`}
                            aria-labelledby={`accordion-heading-${index}`}
                        >
                            <div className="text-[#7B7481] mt-4 text-base leading-6">
                                {faq.answer}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}