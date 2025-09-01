import Image from 'next/image'
import MarqueeSlider from './MarqueeSlider';
import { sanityFetch } from '@/sanity/lib/live';
import { demoSettingsQuery } from '@/sanity/lib/queries/singletons/demo';

export const dynamic = 'force-dynamic';

export default async function LeftSection() {
    const { data } = await sanityFetch({
        query: demoSettingsQuery,
        params: {},
    });
    const { mainHeading, benefits, trustedByText, testimonialCard } = data || {};

    return (
        <section className="lg:max-w-[50%] mt-20 w-full px-6">
            <div className="flex flex-col w-full items-start relative max-w-[578px] mx-auto">
                {/* Main content */}
                <div className="flex flex-col items-start relative w-full overflow-hidden">
                    <div className="flex flex-col items-start gap-8 relative w-full mb-10">
                        <div className="flex flex-col items-start relative w-full">
                            <header>
                                <h1 className="w-full font-semibold md:font-bold text-[#222222] text-center text-3xl mb-8 md:text-start md:text-[40px] md:leading-[54px] md:mb-4">
                                    {mainHeading || ""}
                                </h1>
                            </header>
                            <div className="flex flex-col items-start gap-2 relative w-full">
                                {benefits?.map((benefit: any, index: number) => (
                                    <div key={index} className="flex items-start md:items-center justify-center gap-2 w-full">
                                        <Image width={16} height={16} alt="Benefit icon" className="mt-1 md:mt-0" src={benefit.icon?.asset?.url || "/schedule-demo/person.svg"} />
                                        <p className="flex-1 font-normal text-[#363338] text-base leading-[25.6px]">
                                            {benefit.text}
                                        </p>
                                    </div>
                                )) || (
                                        <>
                                            <div className="flex items-start md:items-center justify-center gap-2 w-full">
                                                <Image width={16} height={16} alt="Benefit icon" className="mt-1 md:mt-0" src="/schedule-demo/person.svg" />
                                                <p className="flex-1 font-normal text-[#363338] text-base leading-[25.6px]">
                                                    Offboarding taken care of without the manual hassle
                                                </p>
                                            </div>
                                            <div className="flex items-start md:items-center justify-center gap-2 w-full">
                                                <Image width={16} height={16} alt="Benefit icon" className="mt-1 md:mt-0" src="/schedule-demo/gridfour.svg" />
                                                <p className="flex-1 font-normal text-[#363338] text-base leading-[25.6px]">
                                                    Eliminate risk from orphaned and hidden accounts
                                                </p>
                                            </div>
                                            <div className="flex items-start md:items-center justify-center gap-2 w-full">
                                                <Image width={16} height={16} alt="Benefit icon" className="mt-1 md:mt-0" src="/schedule-demo/lightning.svg" />
                                                <p className="flex-1 font-normal text-[#363338] text-base leading-[25.6px]">
                                                    Save on the SSO/SCIM tax and wasted licenses
                                                </p>
                                            </div>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>

                    {/* Trusted by section */}
                    <p className="w-full font-normal text-[#363338] text-sm leading-8">
                        {trustedByText || ""}
                    </p>
                    <div className="flex flex-col items-start relative max-w-[578px] w-full overflow-hidden">
                        <div className="slider-container">
                            <MarqueeSlider />
                        </div>
                    </div>
                </div>

                {/* Testimonial card */}
                <div className="flex flex-col items-start gap-6 p-8 bg-white rounded-[32px] border border-solid border-[#545058] mb-24 mt-12">
                    <div className="p-0 w-full">
                        <Image
                            className="mb-6"
                            alt="Quote icon"
                            src="/schedule-demo/quotes.svg"
                            width={30}
                            height={31}
                        />
                        <div className="flex flex-col items-start gap-4 w-full">
                            <p className="w-full font-semibold text-[#363338] text-lg leading-[26px]">
                                {testimonialCard?.quoteText || ""}
                            </p>
                            <div className="flex items-center gap-4 w-full">
                                <div className="flex items-center gap-2 flex-1">
                                    <Image
                                        width={40}
                                        height={40}
                                        alt={testimonialCard?.authorName || ""}
                                        className="bg-gray-300 min-w-10 min-h-10 rounded-full overflow-hidden"
                                        src={testimonialCard?.authorImage?.asset.url || ""}
                                    />
                                    <p className="w-full text-[#7b7481] text-base leading-6">
                                        <span className="font-semibold">{testimonialCard?.authorName || ""}</span><br />
                                        <span className="text-sm">{testimonialCard?.authorTitle || ""}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
