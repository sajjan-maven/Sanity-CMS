import Image from "next/image";
import { PageBuilderType } from "@/types";

export type IconBlockProps = PageBuilderType<"iconBlock">;

const IconBlock = ({
    title = "",
    icons = [],
}: IconBlockProps) => {
    return (
        <section className="w-full px-6 pb-40">
            <div className="w-full max-w-[1256px] mx-auto">
                <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] leading-tight md:leading-[48px] mb-6 md:mb-10">
                    {title}
                </h2>

                <div className="flex justify-center items-center flex-wrap">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {icons?.map((icon, index) => (
                            <div
                                key={index}
                                className="h-[200px] w-[296px] bg-white rounded-[32px] border border-solid border-[#545058] flex items-center justify-center"
                            >
                                {icon?.logo?.asset?.url && (
                                    <div className="flex items-center justify-center h-full p-0">
                                        <Image
                                            alt={icon.altText || "icon logo"}
                                            src={icon.logo.asset.url}
                                            width={icon.width || 100}
                                            height={icon.height || 40}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IconBlock;