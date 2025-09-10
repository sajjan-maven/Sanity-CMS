"use client";

import React from "react";
import Image from "next/image";
import { PageBuilderType } from "@/types";

export type TestimonialV1BlockProps = PageBuilderType<"testimonialV1Block">;

export default function TestimonialV1Block(props: TestimonialV1BlockProps) {
    const { testimonials = [] } = props;

    if (!testimonials) return null;

    return (
        <section className="bg-[#f7f5f2] px-4">
            <div className="w-full max-w-[1066px] mx-auto px-4 flex justify-center">
                {testimonials?.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-[#e0d6c7] p-4 w-full mb-8"
                    >
                        {/* Company Logo */}
                        <div className="font-bold text-2xl md:text-[1rem] leading-tight tracking-wide mb-2 text-[#232025]">
                            {testimonial.companyLogo?.asset?.url && (
                                <Image
                                    width={153}
                                    height={20}
                                    src={testimonial.companyLogo.asset.url}
                                    alt={testimonial.company || "Company logo"}
                                    className="p-2 pl-0"
                                />
                            )}
                        </div>

                        {/* Testimonial Text */}
                        {testimonial.text && (
                            <p className="text-lg text-gray-700 mb-6">{testimonial.text}</p>
                        )}

                        {/* Profile */}
                        {testimonial.profile && (
                            <div className="flex items-center gap-4 mt-6">
                                {testimonial.profile.image?.asset?.url && (
                                    <Image
                                        src={testimonial.profile.image.asset.url}
                                        alt={testimonial.profile.name || "Profile"}
                                        width={48}
                                        height={48}
                                        className="rounded-full object-cover"
                                    />
                                )}
                                <div>
                                    {testimonial.profile.name && (
                                        <div className="font-semibold text-gray-900">
                                            {testimonial.profile.name}
                                        </div>
                                    )}
                                    {testimonial.profile.role && (
                                        <div className="text-sm text-gray-500">
                                            {testimonial.profile.role}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}