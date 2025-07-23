import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from 'react';

export type IconHighlightBlockProps = PageBuilderType<"iconHighlightBlock">;

export default function IconHighlightBlock( props: IconHighlightBlockProps) {
  const { title, cards, backgroundColor } = props;

  return (
    <section className="flex flex-col items-center py-10 md:py-20 px-6 w-full gap-20" style={{ background: backgroundColor?.hex || '#FFF'}}>
      <div className="flex flex-col items-center gap-10 max-w-[1256px] w-full">
        <h2 className="text-3xl md:text-[40px] font-semibold text-[#363338] leading-8 md:leading-[48px] w-full">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 w-full">
          {cards?.map((card: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-start gap-4 p-6 rounded-[32px] border border-[#545058] overflow-hidden bg-white"
            >
              {card?.image?.asset.url && (
                <Image
                  width={40}
                  height={40}
                  alt={'Insight icon'}
                  src={card?.image?.asset.url}
                />
              )}
              <p className="font-regular text-[#363338] text-start">
                {card?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};