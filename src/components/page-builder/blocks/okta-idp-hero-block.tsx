import BlogHeaderEmailCapture from "@/components/ui/BlogHeaderEmailCapture";
import { PageBuilderType } from "@/types";
import Image from "next/image";
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
    } = props as OktaIdpHeroSectionProps & { marqueeImages?: MarqueeImage[] };

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

                            <div className="flex items-center justify-center lg:justify-self-start">
                                <div className="w-fit lg:w-full mx-auto lg:mx-0 lg:ml-0 lg:mr-auto mt-4 min-[1490px]:mt-10">
                                    <BlogHeaderEmailCapture />
                                </div>
                            </div>
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