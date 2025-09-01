import { PageBuilderType } from "@/types";
import Image from "next/image";

export type OktaIdpWhySaasSectionProps = PageBuilderType<"oktaIdpWhySaasSection">;

export default function WhySaasSection(props: OktaIdpWhySaasSectionProps) {
    const { title, lineImage, cards = [] } = props as OktaIdpWhySaasSectionProps & {
        cards?: {
            mainHeading: string;
            description: string;
            image?: {
                asset?: { url: string };
                alt?: string;
                width?: number;
                height?: number;
            };
        }[];
    };

    return (
        <section className="pt-4 pb-12 md:pt-14 md:pb-16 bg-[#F7F5F2] px-4">
            <div className="mx-auto max-w-[1256px]">
                {/* Section Title */}
                <div className="max-w-[675px] mx-auto text-center">
                    <h2 className="text-2xl font-medium text-[#363338] md:text-[40px] px-2 mb-4 lg:mb-0 leading-tight md:leading-[48px]">
                        {title ||
                            "How non-SSO, non-API apps derail your identity investments"}
                    </h2>
                </div>

                {/* Divider Image */}
                {lineImage?.asset?.url && (
                    <Image
                        src={lineImage.asset.url}
                        className="w-[70%] mx-auto hidden lg:block"
                        alt={lineImage.alt || "Line Container"}
                        width={lineImage.width || 900}
                        height={lineImage.height || 146}
                    />
                )}

                {/* Cards */}
                <div className="mx-auto flex flex-wrap lg:flex-nowrap">
                    {cards.map((card, index) => {
                        const { mainHeading, description, image } = card;
                        return (
                            <div
                                key={index}
                                className="p-2 pt-4 lg:pt-0 w-full max-w-md mx-auto"
                            >
                                <div className="relative flex flex-col h-full px-6 py-7 overflow-hidden rounded-3xl bg-[#F0EBE4] group">
                                    {image?.asset?.url && (
                                        <div className="overflow-hidden rounded-3xl aspect-w-16 aspect-h-9 shrink-0">
                                            <Image
                                                className="object-cover w-full h-full"
                                                src={image.asset.url}
                                                alt={image.alt ?? mainHeading ?? ""}
                                                width={image.width || 283}
                                                height={image.height || 240}
                                            />
                                        </div>
                                    )}

                                    <div className="flex-1 px-2 mt-5 md:mt-8">
                                        <p className="text-xl font-medium md:font-semibold text-[#363338]">
                                            {mainHeading}
                                        </p>
                                        <p className="mt-3 md:mt-4 text-base text-[#7B7481]">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}