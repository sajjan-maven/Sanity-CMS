import { PageBuilderType } from "@/types";
import Image from "next/image";

export type OktaIdpTraditionalToolsProps = PageBuilderType<"oktaIdpTraditionalTools">;

type ToolCardItem = {
    list: string;
    listIcon?: {
        alt?: string;
        asset?: {
            url: string;
            metadata?: {
                dimensions?: {
                    width: number;
                    height: number;
                };
            };
        };
    };
};

export default function OktaIdpTraditionalTools(props: OktaIdpTraditionalToolsProps) {
    const { traditionalTools = [], stitchflowTools = [] } =
        props as OktaIdpTraditionalToolsProps & {
            traditionalTools?: ToolCardItem[];
            stitchflowTools?: ToolCardItem[];
        };

    return (
        <section className="bg-[#F7F5F2] pt-12 md:pt-20">
            <div className="max-w-[1256px] mx-auto px-4">
                <h2 className="text-2xl md:text-[40px] font-medium text-center max-w-[820px] mx-auto text-gray-900 mb-10 md:mb-14 px-6 leading-tight md:leading-[48px]">
                    Traditional tools can&apos;t complement Okta. Stitchflow can.
                </h2>

                <div className="flex flex-col md:flex-row md:items-center md:justify-center justify-start relative">
                    {/* Traditional Process Card */}
                    <div className="bg-[#E0D5C8] rounded-lg p-6 sm:p-8 md:p-10 md:w-[50%] z-10 mb-8 md:mb-0 md:mr-[-70px]">
                        <h3 className="text-xl text-center font-semibold text-[#363338] mb-10 md::pr-10">
                            Traditional tools
                        </h3>
                        <ul className="space-y-6 md:pr-10">
                            {traditionalTools.map((item: ToolCardItem, index: number) => (
                                <li key={index} className="flex flex-col align-middle">
                                    <div className="flex items-center mb-2">
                                        <div className="flex-shrink-0 bg-[#F7F5F2] rounded-md p-2 mr-4">
                                            {item.listIcon?.asset?.url && (
                                                <Image
                                                    src={item.listIcon.asset.url}
                                                    alt={item.listIcon.alt || `Icon for ${item.list}`}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain w-full"
                                                />
                                            )}
                                        </div>
                                        <p className="text-[#66616C] font-semibold">{item.list}</p>
                                    </div>
                                    {index < traditionalTools.length - 1 && (
                                        <div className="border-t-2 border-[#CCBAA5] my-2" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stitchflow Card */}
                    <div className="bg-[#363338] rounded-lg md:shadow-xl p-8 sm:p-10 md:p-16 md:w-[50%] z-20">
                        <div className="flex items-center mb-10">
                            <Image
                                className="mx-auto w-1/3"
                                src="/section-images/Stitch_flow_logo.svg"
                                alt="Stitchflow logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <ul className="space-y-6">
                            {stitchflowTools.map((item: ToolCardItem, index: number) => (
                                <li key={index} className="flex flex-col">
                                    <div className="flex items-center mb-2 ">
                                        <div className="flex-shrink-0 bg-[#FFFFFF] rounded-md p-2 mr-4 h-10 w-10 flex items-center justify-center">
                                            {item.listIcon?.asset?.url && (
                                                <Image
                                                    src={item.listIcon.asset.url}
                                                    alt={item.listIcon.alt || `Icon for ${item.list}`}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain h-6 w-auto"
                                                />
                                            )}
                                        </div>
                                        <p className="text-white font-semibold">{item.list}</p>
                                    </div>
                                    {index < stitchflowTools.length - 1 && (
                                        <hr className="border-t-2 border-[#66616C] my-2" />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}