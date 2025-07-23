import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from "react";

export type IconListBlockProps = PageBuilderType<"iconListBlock">;
export default function IconListBlock(props: IconListBlockProps) {
  const { 
    heading,
    features = [],
    backgroundColor
  } = props;

  return (
    <section className="py-10 md:py-20 px-6 flex flex-col gap-20 w-full"  style={{ background: backgroundColor?.hex || '#FFF'}}>
      <div className="flex flex-col w-full items-start gap-10 max-w-[1256px] mx-auto">
        <h2 className="text-3xl md:text-[40px] md:leading-[48px] font-semibold text-[#363338]">
          {heading}
        </h2>

        <div className="flex flex-col w-full gap-10">
          <div className="w-full">
            {features?.map((feature, index) => (
              <div key={index} className="mb-8 md:mb-10">
                <div className="flex items-start gap-2">
                  {feature?.icon?.asset?.url && (
                    <Image
                      width={24}
                      height={24}
                      alt={'icon'}
                      src={feature?.icon.asset.url}
                    />
                  )}
                  <h3 className="font-medium text-[#363338]">
                    {feature?.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};