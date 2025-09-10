"use client";

import Image from "next/image";
import { PageBuilderType } from "@/types";

export type SAMCardsBlockProps = PageBuilderType<"samCardsBlock">;

export default function SAMCardsBlock(props: SAMCardsBlockProps) {
  const { tagline, heading, highlightedText, description, cards = [] } = props;

  return (
    <section className="py-[60px] lg:pb-[100px] bg-[#f7f5f2]">
      <div className="max-w-[1256px] mx-auto flex flex-col items-center px-4">
        {tagline && (
          <span className="inline-block px-6 py-1 mb-4 rounded-full bg-white text-[#7B7481] font-semibold shadow-sm">
            {tagline}
          </span>
        )}
        {heading && (
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e1e1e] text-center mt-2">
            {heading.split(new RegExp(`(${highlightedText})`, "gi")).map((part, i) =>
              part.toLowerCase() === highlightedText?.toLowerCase() ? (
                <span key={i} className="text-[#B53A20]">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h2>
        )}
        {description && (
          <p className="text-gray-600 text-center mb-16 mt-8 text-base md:text-lg max-w-[800px] mx-auto">
            {description}
          </p>
        )}

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards?.map((card, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden border w-full max-w-[600px] mx-auto"
              style={{ borderColor: "#ded3c6" }}
            >
              <div className="px-8 py-16 flex flex-col flex-1">
                {card.tagline && (
                  <span className="text-[#7B7481] text-sm font-semibold">
                    {card.tagline}
                  </span>
                )}
                <h3 className="font-bold text-[26px] md:text-[34px] lg:text-[40px] leading-tight mt-4">
                  {card.heading}
                </h3>
                <p className="text-[#363338] mx-auto mt-4 text-base md:text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
              {card.image?.asset?.url && (
                <div className="w-full flex items-center justify-center bg-[#E5E4E2]">
                  <Image
                    alt={card.image.alt || "Card Image"}
                    src={card.image.asset.url}
                    width={card.image.width || 600}
                    height={card.image.height || 300}
                    className="max-w-full h-auto"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}