import { PageBuilderType } from "@/types";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type HeroSectionBlockProps = PageBuilderType<"heroSectionBlock">;

export default function HeroSectionBlock(props: HeroSectionBlockProps) {
  const { 
    title, 
    titleWidth,
    description,
    descriptionWidth,
    showImage,
    image,
    backgroundColor,
    showButton,
    button,
    spacing,
    modifySpacing
  } = props;

  // Default spacing values
  const defaultSpacing = {
    topSpacing: 48,
    bottomSpacing: 0,
    titleBelowSpacing: 24,
    descriptionBelowSpacing: 16,
    imageBelowSpacing: 0,
    buttonBelowSpacing: 16
  };

  // Use custom spacing if enabled, otherwise use defaults
  const currentSpacing = modifySpacing ? spacing : defaultSpacing;

  const buttonClasses = {
    primary: "border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338]",
    secondary: "shadow-[0px_2px_12px_rgba(84,80,88,0.25),0px_2px_3px_rgba(84,80,88,0.27),inset_0px_-2px_4px_rgba(0,0,0,0.6)] bg-[#363338] bg-gradient-to-b from-[#545058] to-[#363338] hover:to-[#1c1c1c] active:to-[#1f1e1f] text-white group",
    outline: "border border-[#54505833] bg-transparent text-gray-700 hover:bg-[#54505810] shadow active:shadow-none",
  };

  return (
    <section 
      className="w-full z-[3] px-6"
      style={{ 
        backgroundColor: backgroundColor?.value || '#E4DBD0',
        paddingTop: `${currentSpacing?.topSpacing || defaultSpacing.topSpacing}px`,
        paddingBottom: `${currentSpacing?.bottomSpacing || defaultSpacing.bottomSpacing}px`
      }}
    >
      <div className="flex flex-col w-full items-center">
        <h1 
          className="font-semibold text-[#363338] text-[40px] text-center leading-[48px] mx-auto"
          style={{ 
            marginBottom: `${currentSpacing?.titleBelowSpacing || defaultSpacing.titleBelowSpacing}px`,
            maxWidth: `${ titleWidth || 1000 }px`
          }}
        >
          {title}
        </h1>

        <p 
          className="font-normal text-[#363338] text-lg text-center leading-8 max-w-2xl"
          style={{ 
            marginBottom: `${currentSpacing?.descriptionBelowSpacing || defaultSpacing.descriptionBelowSpacing}px`,
            maxWidth: `${ descriptionWidth || 1000 }px`
          }}
        >
          {description}
        </p>

        {showButton && button && (
          <Link
            href={button.link || '#'}
            className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${buttonClasses[button.variant as keyof typeof buttonClasses] || buttonClasses.primary}`}
            style={{ 
              marginBottom: `${button?.buttonBelowSpacing || defaultSpacing.buttonBelowSpacing}px` 
            }}
          >
            {button.text || 'Get Started'}
          </Link>
        )}
      </div>
      
      {showImage && image !== null && image.asset?.url && (
        <div 
          className="mx-auto"
          style={{ 
            marginBottom: `${currentSpacing?.imageBelowSpacing || defaultSpacing.imageBelowSpacing}px` 
          }}
        >
          <Image
            width={image?.width || 1053}
            height={image?.height || 406}
            className="mx-auto"
            alt={'Hero image'}
            src={image?.asset.url}
            priority
          />
        </div>
      )}
    </section>
  );
}