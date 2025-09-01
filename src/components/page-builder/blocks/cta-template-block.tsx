"use client";

import { useState } from "react";
import { PageBuilderType } from "@/types";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useDemoData } from "@/hooks/use-demo-data";

export type OktaIdpCtaSectionProps = PageBuilderType<"oktaIdpCtaSection">;

export default function OktaIdpCtaSection(props: OktaIdpCtaSectionProps) {
    const {
        heading,
        description,
        buttonText,
        avatarImage,
    } = props as OktaIdpCtaSectionProps & {
        heading?: string;
        description?: string;
        buttonText?: string;
        avatarImage?: {
            asset?: { url: string };
            alt?: string;
            width?: number;
            height?: number;
        };
    };

    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setDemoEmail, setIsEmailSubmitted, linkedinFatId, msclkid, gclid } =
        useDemoData();
    const router = useRouter();

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const handleEmailEntry = (value: string) => {
        setEmail(value);
        setError(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setIsEmailSubmitted(false);
            return;
        }
        if (!validateEmail(email)) {
            setIsEmailSubmitted(false);
            setError(true);
            return;
        }

        try {
            setLoading(true);
            setDemoEmail(email);
            setIsEmailSubmitted(true);

            const response = await fetch("/api/hubspotform", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fields: {
                        email,
                        ...(linkedinFatId && { linkedin_fat_id: linkedinFatId }),
                        ...(gclid && { gclid }),
                        ...(msclkid && { msclkid }),
                    },
                    pageContext: {
                        pageUri: window.location.href,
                        pageName: "okta",
                    },
                }),
            });

            if (!response.ok) {
                console.error("Form submission failed:", await response.text());
                throw new Error("Form submission failed");
            }

            setEmail("");
        } catch (err) {
            console.error("Failed to submit form", err);
            setError(true);
        } finally {
            setLoading(false);
            router.push("/demo");
        }
    };

    return (
        <div className="px-6 pb-20 bg-[#F7F5F2] pt-16">
            <div className="max-w-[1256px] mx-auto text-center bg-[#363338] text-white px-6 py-14 rounded-2xl">
                <h2 className="text-4xl font-bold md:text-[40px] mb-6 w-full max-w-2xl leading-10 md:leading-[48px] mx-auto">
                    {heading ||
                        "Want to see how Stitchflow covers apps that don’t integrate with Okta?"}
                </h2>
                <p className="text-lg mb-8 w-full max-w-[44rem] text-center mx-auto font-medium text-[#E8E7EA]">
                    {description ||
                        "Let us show you what complete SaaS management looks like with a no-commitment pilot."}
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 md:gap-4">
                    <div className="w-full max-w-[250px]">
                        <input
                            type="email"
                            className={`block w-full bg-white border rounded-xl shadow-none px-3 py-2 h-[48px] outline-none font-label-regular text-[#7b7481] 
                ${error
                                    ? "border-red-500"
                                    : "border-transparent hover:border hover:border-gray-500"
                                }`}
                            placeholder="Business email"
                            value={email}
                            onChange={(e) => handleEmailEntry(e.target.value)}
                            required
                            disabled={loading}
                        />
                    </div>
                    <div className="w-full max-w-[250px] sm:w-[210px]">
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="py-[7px] w-full max-w-[250px] sm:w-auto flex group items-center justify-center rounded-xl bg-white text-[#363338] font-medium text-base leading-4 whitespace-nowrap px-4 transition-all duration-200 hover:shadow-md disabled:opacity-70"
                        >
                            <div className="flex justify-center items-center">
                                <div className="relative flex items-center gap-2">
                                    {avatarImage?.asset?.url && (
                                        <div className="relative rounded-full border border-solid border-[#54505833]">
                                            <Image
                                                src={avatarImage.asset.url}
                                                alt={avatarImage.alt || "avatar"}
                                                width={avatarImage.width || 32}
                                                height={avatarImage.height || 32}
                                            />
                                        </div>
                                    )}
                                    <div className="absolute w-2.5 h-2.5 -top-px left-[23px] bg-[#30ba70] rounded-[5px] border border-solid border-white" />
                                </div>
                                <span className="pl-2">
                                    {loading ? "Processing..." : buttonText || "Book a demo"}
                                </span>
                            </div>
                            {!loading && (
                                <ArrowRightIcon className="ml-2 h-4 w-0 group-hover:w-4 transition-all ease-in duration-200" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}