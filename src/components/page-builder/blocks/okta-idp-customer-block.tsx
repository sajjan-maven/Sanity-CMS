import { PageBuilderType } from "@/types";
import Image from "next/image";

export type OktaIdpCustomerProps = PageBuilderType<"oktaIdpCustomer">;

export default function OktaIdpCustomer(props: OktaIdpCustomerProps) {
    const { title, cards = [] } = props as OktaIdpCustomerProps & {
        cards?: {
            mainHeading: string;
            image?: {
                asset?: { url: string };
                alt?: string;
                width?: number;
                height?: number;
            };
            description: string;
            name: string;
            designation: string;
            avatarImage?: {
                asset?: { url: string };
                alt?: string;
                width?: number;
                height?: number;
            };
            impact?: {
                contractCount: string;
                contractDesc: string;
                reductionRate: string;
                reductionDesc: string;
            }[];
        }[];
    };

    return (
        <section className="w-full bg-[#F7F5F2] px-6">
            <div className="mx-auto max-w-[1256px] py-4">
                <h2 className="text-center mx-auto">
                    <span className="text-2xl md:text-[40px] font-medium">
                        {title || "Backed by Okta Ventures. Trusted by Okta Customers."}
                    </span>
                </h2>

                <div className="mt-10 lg:mt-14 flex flex-wrap justify-center gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-[#363338] flex flex-col justify-between rounded-lg shadow-md p-6 sm:p-8 w-full max-w-2xl transition-all duration-300"
                            >
                                <div>
                                    {card.image?.asset?.url && (
                                        <Image
                                            className="object-cover mb-4"
                                            src={card.image.asset.url}
                                            alt={card.image.alt || card.mainHeading || "company logo"}
                                            width={card.image.width || 150}
                                            height={card.image.height || 21}
                                        />
                                    )}
                                    <p className="text-[#E8E7EA] text-lg mb-6">
                                        {card.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex items-center mb-10 md:mb-6">
                                        <Image
                                            className="rounded-full object-cover bg-gray-300"
                                            src={card.avatarImage?.asset?.url || '/section-images/person.png'}
                                            alt={card.avatarImage?.alt || card.name || "avatar"}
                                            width={card.avatarImage?.width || 48}
                                            height={card.avatarImage?.height || 48}
                                        />
                                        <div className="ml-3">
                                            <p className="text-base font-semibold text-[#E8E7EA]">
                                                {card.name}
                                            </p>
                                            <p className="text-sm sm:text-base text-[#E8E7EA]">
                                                {card.designation}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-start text-sm sm:text-base text-[#E8E7EA]">
                                        IMPACT
                                    </p>
                                    <hr className="border-t border-[#E8E7EA] my-2" />

                                    {card.impact && card.impact.length > 0 && (
                                        <div className="grid grid-cols-2 gap-x-4 text-sm sm:text-base">
                                            <div>
                                                <p className="font-bold text-[#E8E7EA] text-xl mb-2">
                                                    {card.impact[0].contractCount}
                                                </p>
                                                <p className="text-[#E8E7EA] text-base">
                                                    {card.impact[0].contractDesc}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-bold text-[#E8E7EA] text-xl mb-2">
                                                    {card.impact[0].reductionRate}
                                                </p>
                                                <p className="text-[#E8E7EA] text-base">
                                                    {card.impact[0].reductionDesc}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}