import { PageBuilderType } from "@/types";
import Image from "next/image";

export type OktaIdpSaasManagementActuallyWorksProps = PageBuilderType<"oktaIdpSaasManagementActuallyWorks"> & {
    bottomLineImage?: {
        asset?: { url: string };
        alt?: string;
        width?: number;
        height?: number;
    } | null;
};

export default function OktaIdpSaasManagementActuallyWorks(props: OktaIdpSaasManagementActuallyWorksProps) {
    const { title, topLineImage, bottomLineImage, sections = [] } = props as OktaIdpSaasManagementActuallyWorksProps & {
        sections?: {
            mainTitle: string;
            subTitle: string;
            image?: {
                asset?: { url: string };
                alt?: string;
                width?: number;
                height?: number;
            };
        }[];
    };

    return (
        <section className="bg-[#F7F5F2] w-full px-6 pb-18 lg:pb-0">
            {/* Section Title */}
            <h2 className="text-center text-2xl font-[500] sm:text-[40px] mb-6 lg:mb-0 lg:leading-12">
                {title || "How Stitchflow works even when your tools don’t connect"}
            </h2>

            <div className="max-w-[900px] mx-auto">
                {/* Top Divider Image */}
                <div className="flex">
                    {topLineImage?.asset?.url && (
                        <div className="hidden lg:block w-full max-w-1/2">
                            <Image
                                src={topLineImage.asset.url}
                                alt={topLineImage.alt || "Top Line"}
                                width={topLineImage.width || 507}
                                height={topLineImage.height || 91}
                            />
                        </div>
                    )}
                    <div className="w-full max-w-1/2"></div>
                </div>

                {/* Section List */}
                <div className="mx-auto space-y-10 lg:border-l-[2px] border-[#A39792]">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-x-8 lg:gap-x-20 ${index === sections.length - 1 ? "mb-0" : "mb-12 md:mb-14"}`}
                        >
                            <div className="mb-6 md:mb-0 w-full md:max-w-[366] pl-0.5 lg:pl-14 relative">
                                {/* Circle Connector */}
                                <div className="hidden lg:block absolute -left-[11px] top-2 w-[22px] h-[22px] border border-black rounded-full bg-[#E0D5C8] gap-y-3"></div>

                                <h2 className="text-xl md:text-3xl font-medium text-center md:text-start">
                                    {section.mainTitle}
                                </h2>
                                <p className="mt-6 md:mt-8 text-sm sm:text-base font-normal text-center md:text-start text-[#7B7481]">
                                    {section.subTitle}
                                </p>
                            </div>

                            {section.image?.asset?.url && (
                                <div className="relative w-full">
                                    <Image
                                        className="w-full mx-auto"
                                        src={section.image.asset.url}
                                        alt={section.image.alt ?? section.mainTitle ?? ""}
                                        width={section.image.width || 531}
                                        height={section.image.height || 400}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Divider Image */}
                <div className="flex">
                    {bottomLineImage?.asset?.url && (
                        <div className="hidden lg:block w-full max-w-1/2">
                            <Image
                                src={bottomLineImage.asset.url}
                                alt={bottomLineImage.alt || "Bottom Line"}
                                width={bottomLineImage.width || 507}
                                height={bottomLineImage.height || 91}
                            />
                        </div>
                    )}
                    <div className="w-full max-w-1/2"></div>
                </div>
            </div>
        </section>
    );
}