import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from "react";

export type IconListTwoColumnBlockProps = PageBuilderType<"iconListTwoColumnBlock">;
export default function IconListTwoColumnBlock(props: IconListTwoColumnBlockProps) {
  const { 
    heading,
    features = []
  } = props;

  return (
    <section className="pb-4 md:pb-20 px-6 flex flex-col gap-20 w-full">
    <div className="flex flex-col w-full items-start gap-10 max-w-[1256px] mx-auto">
      <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-semibold text-[#363338]">
        {heading}
      </h2>

      <div className="flex flex-col w-full gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
          {features?.map((feature: any, index: number) => (
            <div
              key={index}
              className="border-none shadow-none bg-transparent"
            >
              <div className="p-0">
                <div className="flex flex-col items-start gap-2">
                  {feature.icon && (
                    <Image
                      width={24}
                      height={24}
                      alt={'icon'}
                      src={feature?.icon.asset.url}
                    />
                  )}
                  <h3 className="font-medium text-[#363338]">
                    {feature.title}
                  </h3>
                  <p className="font-['Geist',Helvetica] font-normal text-[#7b7481] text-base leading-6">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};