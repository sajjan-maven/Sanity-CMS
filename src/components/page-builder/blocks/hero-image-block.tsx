"use client";
import { PageBuilderType } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type HeroImageBlockProps = PageBuilderType<"heroImageBlock">;

export default function HeroImageBlock( props: HeroImageBlockProps) {
  const { 
    title = "How Stitchflow works", 
    description = "Stitchflow's expertise lies in its ability to automatically connect any app with any system of record for any audit.",
    image,
    backgroundColor,
    showButton,
    button
  } = props;

  const buttonClasses = {
    primary: 'bg-[#363338] text-white hover:bg-[#222222]',
    secondary: 'bg-[#F07E10] text-white hover:bg-[#E07100]',
    outline: 'bg-transparent border-2 border-[#363338] text-[#363338] hover:bg-[#363338] hover:text-white'
  };

  return (
    <section 
      className="w-full z-[3] pt-12 px-6"
      style={{ backgroundColor: backgroundColor?.hex || '#E4DBD0' }}
    >
      <div className="flex flex-col w-full items-center gap-4 max-w-4xl mx-auto">
        <h1 className="font-semibold text-[#363338] text-[40px] text-center leading-[48px]">
          {title}
        </h1>

        <p className="font-normal text-[#363338] text-lg text-center leading-8 max-w-2xl">
          {description}
        </p>

        {showButton && button && (
          <div className="mt-4">
            <Link
              href={button.link || '#'}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${buttonClasses[button.variant as keyof typeof buttonClasses] || buttonClasses.primary}`}
            >
              {button.text || 'Get Started'}
            </Link>
          </div>
        )}
      </div>
      
      {image?.asset?.url && (
        <Image
          width={1053}
          height={406}
          className='mx-auto mt-4 md:mt-[88px]'
          alt={image.alt || 'Hero image'}
          src={image.asset.url}
          priority
        />
      )}
    </section>
  );
}