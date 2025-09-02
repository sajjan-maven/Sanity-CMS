"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { PageBuilderType } from "@/types";
import { useState } from "react";
import NewButton from "@/components/ui/newButton";
import { ArrowRightIcon } from "lucide-react";

export type AuditReadinessHeroBlockProps = PageBuilderType<"auditReadinessHeroBlock">;

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

export default function AuditReadinessHeroBlock(
    props: AuditReadinessHeroBlockProps & { marqueeImages?: MarqueeImage[] }
) {
    const { tagline, heading, highlightedText, description, marqueeImages = [], video } = props;

    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [showThankyou, setShowThankyou] = useState(false);

    console.log("showThankyou:", showThankyou);

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const handleEmailEntry = (value: string) => {
        setEmail(value);
        setError(false);
    };

    const sendToZapier = async (
        eventType: string,
        payload: { email: string; linkedin_fat_id?: string | null; gclid?: string | null; msclkid?: string | null }
    ) => {
        try {
            fetch("/api/zapier", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    event_type: eventType,
                    data: payload,
                }),
            }).catch((error) => {
                console.error("Zapier submission failed silently:", error);
            });
        } catch (error) {
            console.error("Error initializing Zapier submission:", error);
        }
    };

    const handleClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!email) {
            setIsSubmitting(false);
            return;
        }
        if (!validateEmail(email)) {
            setIsSubmitting(false);
            setError(true);
            return;
        }

        try {
            setIsSubmitting(true);

            // Primary submission to HubSpot
            const hubspotResponse = await fetch("/api/hubspotform", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fields: {
                        email,
                    },
                    pageContext: {
                        pageUri: window.location.href,
                        pageName: "blog",
                    },
                }),
            });

            if (!hubspotResponse.ok) {
                throw new Error("HubSpot submission failed");
            }

            // Fire-and-forget to Zapier (won't block execution)
            sendToZapier("blog", { email });

            setEmail("");
            // setShowThankyou(true);
        } catch (error) {
            console.error("Error submitting email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-10 lg:py-16 bg-[#f7f5f2]">
            <div className="px-4">
                {/* ✅ FLEX CONTAINER HOLDS LEFT + RIGHT */}
                <div className="max-w-[1256px] mx-auto flex flex-col lg:flex-row items-center gap-10 px-4">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                        {tagline && (
                            <span className="inline-block px-6 mt-2 py-1 mb-4 rounded-full bg-white text-[#7B7481] font-semibold shadow-sm">
                                {tagline}
                            </span>
                        )}
                        <div className="w-full">
                            {heading && (
                                <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] leading-tight max-w-[680px] mx-auto lg:mx-0 lg:max-w-[550px]">
                                    {heading.split(" ").map((word, i) => {
                                        if (highlightedText?.toLowerCase().includes(word.toLowerCase())) {
                                            return (
                                                <span key={i} className="text-[#d84b2d]">
                                                    {" "}{word}{" "}
                                                </span>
                                            );
                                        }
                                        return ` ${word} `;
                                    })}
                                </h1>
                            )}
                            {description && (
                                <p className="text-base sm:text-lg text-[#363338] mt-4 mb-6 lg:max-w-[560px]">
                                    {description}
                                </p>
                            )}

                            {/* Email Capture */}
                            <div className="flex items-center justify-center lg:justify-start">
                                <div className="w-full max-w-[600px] flex flex-wrap gap-3 md:gap-4">
                                    {/* Input */}
                                    <div className="flex-1 max-w-[250px]">
                                        <input
                                            type="email"
                                            className={`block w-full bg-white border rounded-xl px-3 py-2 h-[48px] outline-none font-label-regular text-[#7b7481] 
                        ${error ? "border-red-500" : "border-transparent hover:border-gray-500"}`}
                                            placeholder="Business email"
                                            value={email}
                                            onChange={(e) => handleEmailEntry(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    {/* Button */}
                                    <div className="flex-shrink-0">
                                        <NewButton
                                            variant="primary"
                                            className="h-[48px] px-5 flex items-center justify-center group active:[&_svg]:translate-x-1.5"
                                            type="button"
                                            onClick={handleClick}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Processing..." : "Subscribe"}
                                            {!isSubmitting && (
                                                <ArrowRightIcon className="ml-2 h-4 w-0 group-hover:w-4 transition-all ease-in duration-200" />
                                            )}
                                        </NewButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trusted by Section */}
                        {marqueeImages.length > 0 && (
                            <div className="flex flex-col items-center lg:items-start w-full ms-3 mt-10">
                                <p className="text-gray-600 text-sm mb-2 w-full text-center lg:text-left">Trusted by</p>
                                <div className="w-full flex justify-center">
                                    <div className="w-full min-h-[64px] overflow-hidden">
                                        <Marquee
                                            pauseOnHover={true}
                                            autoFill={true}
                                            speed={50}
                                            gradient={true}
                                            gradientColor="#F7F5F2"
                                            gradientWidth={86}
                                        >
                                            {marqueeImages.map((image, index) => (
                                                <div key={index} className="w-fit h-full flex items-center justify-center px-6">
                                                    {image.asset?.asset?.url && (
                                                        <Image
                                                            alt={image.asset?.alt || "company logo"}
                                                            src={image.asset.asset.url}
                                                            width={image.width || 100}
                                                            height={image.height || 35}
                                                            className="max-w-full h-full object-contain"
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </Marquee>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 flex items-center justify-center pb-4 lg:pb-0">
                        <div className="relative w-full">
                            {video?.asset?.url && (
                                <video autoPlay muted loop playsInline className="rounded-xl w-full h-auto">
                                    <source src={video.asset.url} type="video/mp4" />
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
}