import { PageBuilderType } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type HeroImageBlockProps = PageBuilderType<"heroImageBlock">;

export default function HeroImageBlock( props: HeroImageBlockProps) {
  const { 
    title, 
    description,
    image,
    backgroundColor,
    showButton,
    button
  } = props;

  const buttonClasses = {
    primary: "border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338]",
    secondary: "shadow-[0px_2px_12px_rgba(84,80,88,0.25),0px_2px_3px_rgba(84,80,88,0.27),inset_0px_-2px_4px_rgba(0,0,0,0.6)] bg-[#363338] bg-gradient-to-b from-[#545058] to-[#363338] hover:to-[#1c1c1c] active:to-[#1f1e1f] text-white group",
    outline: "border border-[#54505833] bg-transparent text-gray-700 hover:bg-[#54505810] shadow active:shadow-none",
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