"use client";

import { PageBuilderType } from "@/types";

export type AuditReadinessSolutionsListBlockProps =
    PageBuilderType<"auditReadinessSolutionsListBlock">;

export default function AuditReadinessSolutionsListBlock(
    props: AuditReadinessSolutionsListBlockProps
) {
    const { tagline, heading, highlightedText, teamCards = [] } = props;

    return (
        <section className="w-full bg-[#f7f5f2] pb-[100px]">
            <header className="max-w-[1256px] px-4 mx-auto">
                {heading && (
                    <h2 className="relative self-stretch text-5xl leading-[48px] pb-5 text-center lg:text-left max-w-md">
                        {heading.split(new RegExp(`(${highlightedText})`, "gi")).map(
                            (part, i) =>
                                highlightedText &&
                                    part.toLowerCase() === highlightedText.toLowerCase() ? (
                                    <span
                                        key={i}
                                        className="font-extrabold text-[#c04272] leading-[57.6px]"
                                    >
                                        {part}
                                    </span>
                                ) : (
                                    <span
                                        key={i}
                                        className="font-semibold text-[#363338] leading-[57.6px]"
                                    >
                                        {part}
                                    </span>
                                )
                        )}
                    </h2>
                )}
            </header>

            <div className="flex w-full flex-wrap max-w-[1256px] px-4 mx-auto">
                {teamCards?.map((card, index) => (
                    <div
                        key={index}
                        className={`w-full lg:w-[33.33%] py-8 lg:p-8 lg:first:pl-0 lg:last:pr-0 ${index < teamCards.length - 1
                            ? "border-r border-[#56403833]"
                            : ""
                            }`}
                    >
                        <div className="flex flex-col items-start gap-3">
                            <h3 className="w-[314px] mt-[-1px] font-bold text-[#363338] text-3xl leading-[36px]">
                                {card.title}
                            </h3>
                            <p className="w-full max-w-[403px] font-normal text-[#7b7481] text-xl leading-7">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}