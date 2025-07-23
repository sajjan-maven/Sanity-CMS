import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from "react";

export type StepProcessBlockProps = PageBuilderType<"stepProcessBlock">;

export default function StepProcessBlock( props: StepProcessBlockProps) {
  const { 
    heading,
    subheading,
    steps = [], 
    borderColor, 
    backgroundColor 
  } = props;

  return (
    <section 
      className="flex flex-col items-center py-14 md:py-40 w-full z-[2] px-6"
      style={{ backgroundColor: backgroundColor?.hex || '#F8F5F3' }}
    >
      {heading && <h1 className="font-semibold w-full text-[#363338] text-[32px] max-w-[1256px] mx-auto text-start leading-[48px]">
        {heading}
      </h1>}

      {subheading && <p className="font-normal w-full text-[#363338] text-lg text-start leading-8 max-w-[1256px] mx-auto pb-4 lg:pb-8">
        {subheading}
      </p>}
      <div className="w-full max-w-[1256px] mx-auto">
        {steps?.map((step, index) => (
          <div
            key={index}
            className="flex relative items-start justify-center lg:gap-8 w-full lg:border-l"
            style={{ borderColor: borderColor?.hex || '#E4DFDC' }}
          >
            <div 
              className="hidden lg:flex justify-center items-center absolute -left-[20px]"
              style={{ 
                backgroundColor: backgroundColor?.hex || '#F8F5F3',
                width: 40,
                height: 40
              }}
            >
              <div 
                className="w-2 h-2 rounded"
                style={{ backgroundColor: borderColor?.hex || '#E4DFDC' }}
              />
            </div>

            <div
              className={`${
                index !== steps.length - 1 ? "pt-0 pb-14 md:pb-20" : ""
              } px-0 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 flex-1 lg:ml-8`}
            >
              <div className="gap-2 flex-1 grow flex flex-col items-start">
                <div 
                  className="inline-flex items-start gap-2 px-3 py-1 md:px-4 md:py-2 rounded-[100px]"
                  style={{ backgroundColor: step.badgeColor?.hex || '#F1ACC0' }}
                >
                  <span className="w-fit text-[#363338] whitespace-nowrap">
                    Step {step.number}
                  </span>
                </div>

                <h2 className="font-medium text-[#363338] md:text-2xl text-xl">
                  {step.title}
                </h2>

                <p className="font-normal text-[#7b7481] text-base leading-6">
                  {step.description}
                </p>
              </div>

              <div className="flex-1 flex justify-center items-center grow rounded-[32px] overflow-hidden">
                {step.image?.asset?.url && (
                  <Image
                    width={step.image.width || 600}
                    height={step.image.height || 400}
                    alt={step.image.alt || `Step ${step.number} illustration`}
                    src={step.image.asset.url}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}