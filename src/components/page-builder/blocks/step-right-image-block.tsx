
import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from "react";

export type StepRightImageBlockProps = PageBuilderType<"stepRightImageBlock">;

export default function StepRightImageBlock(props: StepRightImageBlockProps) {
  const {
    title,
    steps = [],
    footnote,
    image,
    badgeColor,
    backgroundGradient
  } = props;

  const gradientStyle = {
    background: `linear-gradient(180deg, ${backgroundGradient?.topColor?.value || '#FFFFFF'} 0%, ${backgroundGradient?.bottomColor?.value || '#F8F5F3'} 100%)`
  };

  return (
    <section
      className="flex flex-col items-center py-4 md:py-20 px-6 relative w-full z-[4]"
      style={gradientStyle}
    >
      <div className="flex flex-col items-center gap-20 w-full max-w-[1256px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full">
          <div className="flex flex-col w-full lg:w-[509px] items-center justify-start gap-10">
            <h2 className="w-full font-semibold text-3xl md:text-[40px] text-start text-[#363338]">
              {title}
            </h2>

            {steps?.map((step: any, index: number) => (
              <div key={index} className="flex items-start gap-3 w-full">
                <div
                  className="relative min-w-8 h-8 rounded-[100px] flex items-center justify-center"
                  style={{ backgroundColor: badgeColor?.value || '#F1ACC0' }}
                >
                  <span className="font-medium text-[#363338] text-center">
                    {step.number}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1 w-full">
                  <h3 className="font-medium text-[#363338]">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
            <p className="w-full text-start font-medium text-[#7B7481]">
              {footnote}
            </p>
          </div>

          <div className="relative w-full lg:w-[723px] h-auto lg:mr-[-56.00px] mt-10 lg:mt-0">
            {image?.asset?.url && (
              <Image
                width={801}
                height={494}
                alt={image?.alt || 'Compliance insight'}
                src={image?.asset.url}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};