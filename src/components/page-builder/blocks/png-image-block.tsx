import Image from "next/image";
import { PageBuilderType } from "@/types";

export type PngImageBlockProps = PageBuilderType<"pngImageBlock">;

const PngImageBlock = ({
    hasFeaturedCard = false,
    featuredCard,
    cards = [],
    sectionBgColor
}: PngImageBlockProps) => {
    return (
        <section
            className="py-[70px] w-full px-6"
            style={{ backgroundColor: sectionBgColor?.value || '#e4dbd0' }}
        >
            <div className="max-w-[670px] mx-auto">
                <div className="flex flex-col flex-wrap gap-6 items-center justify-center">
                    {hasFeaturedCard && featuredCard && (
                        <div className="flex flex-col w-full overflow-hidden border border-[#545058] rounded-[32px] bg-white">
                            <div style={{ backgroundColor: featuredCard.bgColor?.value || '#A0D5F1' }} className="w-full">
                                {featuredCard.image?.asset?.url && (
                                    <Image
                                        alt={featuredCard.altText || "Compliance"}
                                        src={featuredCard.image.asset.url}
                                        width={296}
                                        height={200}
                                        priority
                                        className="mx-auto"
                                    />
                                )}
                            </div>
                            <div className="flex flex-col items-center gap-2 p-8">
                                <h3 className="text-[#363338] text-xl font-semibold text-center">
                                    {featuredCard.title}
                                </h3>
                                <p className="text-[#7b7481] text-center max-w-[335px]">
                                    {featuredCard.description}
                                </p>
                            </div>
                        </div>
                    )}

                    {cards && cards.length > 0 && (
                        <div className="flex md:flex-nowrap flex-wrap gap-6">
                            {cards?.map((card, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col w-full overflow-hidden border border-[#545058] rounded-[32px] bg-white"
                                >
                                    <div style={{ backgroundColor: card.bgColor?.value || '#A0D5F1' }} className="w-full">
                                        {card.image?.asset?.url && (
                                            <Image
                                                alt={card.altText || "Compliance"}
                                                src={card.image.asset.url}
                                                width={296}
                                                height={200}
                                                priority
                                                className="mx-auto"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-col items-center gap-2 p-8">
                                        <h3 className="text-[#363338] text-xl font-semibold text-center">
                                            {card.title}
                                        </h3>
                                        <p className="text-[#7b7481] text-center">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PngImageBlock;