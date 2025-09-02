import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// interface TestimonialsProps {
//     testimonialsG2: {
//         name: string | null;
//         jobTitle: string | null;
//         company?: string | null;
//         quote: string | null;
//         avatar: {
//             asset: {
//                 url: string;
//             };
//         };
//         url: string;
//     }[];
//     heading: string;
// }

export default function Testimonials({ testimonialsG2, heading }: any) {
    const testimonials = testimonialsG2 || [];

    return (
        <section className="flex flex-col items-center justify-center px-6 py-14 md:py-[100px] w-full [background:linear-gradient(0deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.02)_100%),linear-gradient(0deg,rgba(250,249,248,1)_0%,rgba(250,249,248,1)_100%)]">
            <h2 className="w-full font-semibold text-[#222222] mb-10 md:mb-[70px] text-3xl md:text-[40px] text-center leading-[54px]">
                {heading}
            </h2>

            <div className="relative flex flex-col lg:flex-row gap-[18px] w-full max-w-[1064px] mni-h-[490px]">
                {/* First testimonial card */}
                {testimonials.length > 0 && (
                    <Link href={testimonials[0].url || '#'} target="_blank" className="relative hover:border-blue-400 flex flex-col w-full lg:w-[265px] lg:min-h-[490px] items-start justify-start gap-6 p-8 pb-12 bg-white rounded-[32px] border border-solid border-[#545058]">
                        <div className="p-0 w-full">
                            <div className="flex flex-col items-start gap-4 w-full">
                                <p className="font-medium text-[#363338] text-lg leading-[26px]">
                                    {testimonials[0].quote}
                                </p>
                                <div className="flex items-center gap-4 w-full">
                                    <Image
                                        width={40}
                                        height={40}
                                        alt={testimonials[0]?.name || "avatar"}
                                        className="bg-gray-300 w-10 h-10 rounded-full overflow-hidden"
                                        src={testimonials[0].avatar?.asset?.url || '/section-images/person.png'}
                                    />
                                    <div className="flex flex-col items-start gap-0.5 flex-1">
                                        <p className="font-medium text-[#7b7481] text-base leading-6">
                                            {testimonials[0].name}
                                        </p>
                                        <p className="font-medium text-[#7b7481] text-sm leading-6">
                                            {testimonials[0].jobTitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-4 bottom-4">
                            <Image
                                width={32}
                                height={32}
                                alt="Company Logo"
                                src={'/section-images/g2_logo.svg'}
                            />
                        </div>
                    </Link>
                )}

                {/* Right side testimonials */}
                <div className="flex flex-col w-full lg:w-[780px] items-start gap-[18px]">
                    {testimonials.slice(1).map((testimonial: any, index: number) => (
                        <Link
                            href={testimonial.url || '#'}
                            target="_blank"
                            key={index}
                            className="relative hover:border-blue-400 flex flex-col h-full items-center gap-[18px] p-8 pb-12 w-full bg-white rounded-[32px] border border-solid border-[#545058]"
                        >
                            <div className="p-0 w-full">
                                <div className="flex flex-col items-start gap-4 w-full">
                                    <p className="font-medium text-[#363338] text-lg leading-[26px]">
                                        {testimonial.quote}
                                    </p>
                                    <div className="flex items-center gap-4 w-full">
                                        <Image
                                            width={40}
                                            height={40}
                                            alt={testimonial?.name || "avatar"}
                                            className="bg-gray-300 w-10 h-10 rounded-full overflow-hidden"
                                            src={testimonial.avatar?.asset?.url || '/section-images/person.png'}
                                        />
                                        <div className="flex flex-col items-start gap-1 flex-1">
                                            <p className="font-medium text-[#7b7481] text-base leading-6">
                                                {testimonial.name}
                                            </p>
                                            <p className="font-medium text-[#7b7481] text-sm leading-6">
                                                {testimonial.jobTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute right-4 bottom-4">
                                <Image
                                    width={32}
                                    height={32}
                                    alt="Company Logo"
                                    src={'/section-images/g2_logo.svg'}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
