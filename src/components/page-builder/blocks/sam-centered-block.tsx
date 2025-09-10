"use client";

import { PageBuilderType } from "@/types";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";

export type SAMCenteredBlockProps = PageBuilderType<"samCenteredBlock">;

export default function SAMCenteredBlock(props: SAMCenteredBlockProps) {
    const { badge, title, description, buttonText } =
        props as SAMCenteredBlockProps & {
            badge?: string;
            title?: string;
            description?: string;
            buttonText?: string;
        };

    const router = useRouter();

    return (
        <section className="py-16 lg:py-28 bg-[#f0ebe4] flex flex-col items-center justify-center">
            <div className="max-w-[1256px] mx-auto flex flex-col items-center px-4">
                {/* Badge */}
                {badge && (
                    <span className="inline-block px-6 py-1 mb-4 rounded-full bg-white text-[#7B7481] font-semibold shadow-sm">
                        {badge}
                    </span>
                )}

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e1e1e] text-center mt-4 max-w-xl leading-[34px] md:leading-[46px]">
                    {title ||
                        "You’re managing more apps than you can see 👀"}
                </h2>

                {/* Description */}
                {description && (
                    <p className="text-[#363338] text-center mb-2 mt-8 text-base md:text-lg max-w-[52rem]">
                        {description}
                    </p>
                )}

                {/* Button */}
                {buttonText && (
                    <div className="mt-6 text-center">
                        <button
                            type="button"
                            onClick={() => router.push("/demo")}
                            className="w-full sm:w-auto mx-auto font-medium text-sm py-4 px-10 rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-[#363338] bg-gradient-to-b from-[#545058] to-[#363338] hover:to-[#1c1c1c] active:to-[#1f1e1f] text-white flex items-center justify-center group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8 transition-all"
                        >
                            {buttonText}
                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}