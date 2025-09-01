// import BlogHeaderEmailCapture from "@/components/ui/BlogHeaderEmailCapture";
import { useDemoData } from "@/hooks/use-demo-data";
import { PageBuilderType } from "@/types";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export type OktaIdpHeroSectionProps = PageBuilderType<"oktaIdpHeroSection">;

type MarqueeImage = {
    asset?: {
        asset?: {
            url: string;
            metadata?: {
                lqip?: string;
                dimensions?: {
                    width: number;
                    height: number;
                };
            };
        };
        alt?: string;
    };
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
};

export default function OktaIdpHeroSection(props: OktaIdpHeroSectionProps) {
    const {
        title,
        subtitle,
        description,
        heroImage,
        marqueeImages = [],
        avatarImage,
        buttonText
    } = props as OktaIdpHeroSectionProps & { marqueeImages?: MarqueeImage[] };

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
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8 bg-[#F7F5F2]">
            <div className="mx-auto w-full max-w-[1256px] px-6">
                <div className="grid grid-cols-1 mx-auto lg:items-center lg:grid-cols-2 gap-y-6 md:gap-y-12 lg:gap-x-6 justify-between">
                    {/* Left Content */}
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-medium leading-tight text-gray-900 sm:leading-tight lg:leading-[70px] lg:text-[54px] mb-4">
                                <p>{title || "Get 100% visibility"}</p>
                                {subtitle && (
                                    <p>
                                        with{" "}
                                        <span className="border border-[#4873AD] px-2 py-1 text-[#4873AD] rounded-2xl font-semibold">
                                            {subtitle}
                                        </span>
                                    </p>
                                )}
                            </h1>

                            <p className="text-sm sm:text-lg text-[#363338] sm:mt-4 px-3 lg:px-0">
                                {description ||
                                    "Stitchflow completes your identity maturity journey by finding and fixing orphaned, hidden and unused accounts not integrated with Okta and Okta Workflows."}
                            </p>

                            {/* <div className="flex items-center justify-center lg:justify-self-start"> */}
                            <div className="w-fit lg:w-full mx-auto lg:mx-0 lg:ml-0 lg:mr-auto mt-4 min-[1490px]:mt-10">
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
                        </div>

                        {/* Trusted Logos Marquee */}
                        {(marqueeImages ?? []).length > 0 && (
                            <div className="flex flex-col lg:items-start mt-10 items-center">
                                <p className="text-[#7B7481] text-base">Trusted by</p>

                                <div className="flex items-center w-full min-h-20">
                                    <Marquee
                                        pauseOnHover={true}
                                        autoFill={true}
                                        speed={50}
                                        gradient={true}
                                        gradientColor="#F7F5F2"
                                        gradientWidth={86}
                                        className="w-full"
                                    >
                                        {(marqueeImages ?? []).map((image: MarqueeImage, index: number) => (
                                            <div key={index} className="w-fit h-20 align-bottom px-6">
                                                <Image
                                                    alt={image.asset?.alt || "company logo"}
                                                    src={image.asset?.asset?.url ?? ""}
                                                    width={image.width || 150}
                                                    height={image.height || 40}
                                                    className="max-w-full h-full flex justify-center items-end"
                                                />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Image */}
                    {heroImage?.asset?.url && (
                        <div className="w-full max-w-[560px] mx-auto lg:ml-auto">
                            <Image
                                className="w-full"
                                src={heroImage.asset.url}
                                alt={heroImage.alt || "Okta Hero"}
                                width={heroImage.width || 560}
                                height={heroImage.height || 600}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}