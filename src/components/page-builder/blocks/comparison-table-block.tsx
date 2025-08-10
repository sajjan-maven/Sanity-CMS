import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from "react";

export type ComparisonTableBlockProps = PageBuilderType<"comparisonTableBlock">;
export default function ComparisonTableBlock(props: ComparisonTableBlockProps) {
  const { title, leftColumn, rightColumn, rows = [] } = props;

  return (
    <section className="flex justify-center items-center gap-20 py-8 md:py-16 w-full bg-white z-10 relative px-4">
      <div className="w-full max-w-[1256px]">
        <div className="flex flex-col w-full max-w-4xl items-center gap-10 mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-[40px] font-semibold text-gray-900 leading-tight">
              {title || "Why Stitchflow is the only option"}
            </h2>
          </div>
        </div>
        <div className="flex mt-6 md:mt-[72px] flex-col md:flex-row w-full border border-[#545058] rounded-3xl overflow-hidden">
          {/* Left Column */}
          <div className="w-full md:w-1/2">
            <div className="flex h-[77px] items-center justify-center gap-3 px-3 py-4 md:py-6 border-b border-[#545058]">
              {leftColumn?.icon?.asset?.url && (
                <Image
                  src={leftColumn?.icon.asset.url}
                  alt={leftColumn?.icon.alt || 'icon left'}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              )}
              <h3 className="text-[#363338] text-lg font-medium">
                {leftColumn?.title}
              </h3>
            </div>
            <div className="flex flex-col justify-stretch h-[calc(100%-77px)]">
              {rows?.map((row: any, index: number) => (
                <div
                  key={`left-${index}`}
                  className={`p-4 md:px-8 pt-6 pb-2 md:min-h-[130px] ${
                    index === rows.length - 1 ? "mt-auto" : ""
                  } ${
                    index !== 0 ? "border-t border-[#545058]" : ""
                  }`}
                >
                  <p className="text-[#383f3b] text-lg leading-relaxed">
                    {row.leftText}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div 
            className="w-full md:w-1/2 border-t md:border-t-0 md:border-l border-[#545058]"
            style={{ backgroundColor: rightColumn?.backgroundColor?.value || '#EFF6FF' }}
          >
            <div className="flex h-[77px] items-center justify-center gap-3 px-3 py-4 md:py-6 border-b border-[#545058]">
              {rightColumn?.icon?.asset?.url && (
                <Image
                  src={rightColumn?.icon.asset.url}
                  alt={rightColumn?.icon.alt || 'icon right'}
                  className="w-6 h-6"
                  width={24}
                  height={24}
                />
              )}
              <h3 className="text-[#363338] text-lg font-medium">
                {rightColumn?.title}
              </h3>
            </div>
            <div className="flex flex-col justify-stretch h-[calc(100%-77px)]">
              {rows?.map((row: any, index: number) => (
                <div
                  key={`right-${index}`}
                  className={`p-4 md:px-8 pt-6 pb-2 md:min-h-[130px] ${
                    index !== 0 ? "border-t border-[#545058]" : ""
                  }`}
                >
                  <p className="text-[#383f3b] text-lg leading-relaxed">
                    {row.rightText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="h-2 border-b border-[#E4DFDC] py-6 md:py-10"></div>
      </div>
    </section>
  );
}