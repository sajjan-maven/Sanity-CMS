'use client';

// import BlogHeaderEmailCapture from "@/components/ui/BlogHeaderEmailCapture";
import { useDemoData } from "@/hooks/use-demo-data";
import { PageBuilderType } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export type SAMHeroSectionProps = PageBuilderType<"samHeroSection">;

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

export default function SAMHeroSection(props: SAMHeroSectionProps) {
    const {
        title,
        description,
        heroImage,
        backedByImage,
        marqueeImages = [],
        avatarImage,
        buttonText
    } = props as SAMHeroSectionProps & {
        marqueeImages?: MarqueeImage[];
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
        <section className="py-10 lg:py-16 bg-[#f7f5f2]">
            <div className="max-w-[1256px] mx-auto flex flex-col lg:flex-row items-center lg:gap-10 px-4">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <div className="w-full">
                        <h1 className="font-bold text-[28px] sm:text-[32px] md:text-[42px] lg:text-[56px] leading-tight lg:max-w-[500px]">
                            {title ? (
                                (() => {
                                    const words = title.trim().split(" ");
                                    const lastThree = words.slice(-3).join(" ");
                                    const rest = words.slice(0, -3).join(" ");
                                    return (
                                        <>
                                            {rest}{" "}
                                            <span className="text-[#EB6548]"> {lastThree}</span>
                                        </>
                                    );
                                })()
                            ) : (
                                <>
                                    Software Asset <br /> Management <br /> That Actually <br />
                                    <span className="text-[#EB6548]">Closes the Gaps</span>
                                </>
                            )}
                        </h1>
                        <p className="text-base sm:text-lg text-[#363338] mt-4 lg:max-w-[500px]">
                            {description ||
                                "Disconnected apps are your biggest blind spot. Stitchflow gives IT complete control, eliminating SCIM, tedious setup, and scripts."}
                        </p>

                        {/* <div className="flex items-center justify-center lg:justify-self-start"> */}
                        <div className="w-fit lg:w-full mx-auto lg:mx-0 lg:ml-0 lg:mr-auto mt-6">
                            {/* <BlogHeaderEmailCapture /> */}
                            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 md:gap-4">
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
                                        className="py-[7px] w-full max-w-[250px] sm:w-auto flex group items-center justify-center rounded-xl bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338] font-medium text-base leading-4 whitespace-nowrap px-4 transition-all duration-200 disabled:opacity-70 shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f]"
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
                        {/* </div> */}

                        <div className="w-full bg-[#F7F5F2] py-10">
                            <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
                                {/* Backed by */}
                                {backedByImage?.asset?.url && (
                                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[100px] lg:border-r border-[#E0D5C8]">
                                        <p className="text-gray-600 text-sm mb-2 text-start w-full">
                                            Backed by
                                        </p>
                                        <Image
                                            alt={backedByImage.alt || "Backed By Logo"}
                                            src={backedByImage.asset.url}
                                            width={backedByImage.width || 90}
                                            height={backedByImage.height || 30}
                                            className="h-10 object-contain"
                                        />
                                    </div>
                                )}

                                {/* Trusted by */}
                                {(marqueeImages ?? []).length > 0 && (
                                    <div className="flex flex-col items-center lg:items-start w-full ms-3 mt-10 lg:mt-0">
                                        <p className="text-gray-600 text-sm mb-2 w-full text-center lg:text-left">
                                            Trusted by
                                        </p>
                                        <div className="w-full flex justify-center">
                                            <div className="w-full lg:max-w-[400px] xl:max-w-[480px] min-h-[64px] overflow-hidden">
                                                <Marquee
                                                    pauseOnHover={true}
                                                    autoFill={true}
                                                    speed={50}
                                                    gradient={true}
                                                    gradientColor="#F7F5F2"
                                                    gradientWidth={86}
                                                >
                                                    {marqueeImages.map((image, index) => (
                                                        <div
                                                            key={index}
                                                            className="w-fit h-full flex items-center justify-center px-6"
                                                        >
                                                            <Image
                                                                alt={image.asset?.alt || "company logo"}
                                                                src={image.asset?.asset?.url ?? ""}
                                                                width={image.width || 100}
                                                                height={image.height || 35}
                                                                className="max-w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    ))}
                                                </Marquee>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                {heroImage?.asset?.url && (
                    <div className="flex-1 w-full flex items-center justify-center">
                        <div className="relative w-full">
                            <Image
                                alt={heroImage.alt || "Hero Image"}
                                src={heroImage.asset.url}
                                width={heroImage.width || 560}
                                height={heroImage.height || 600}
                                className="object-contain mx-auto lg:mx-0"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}