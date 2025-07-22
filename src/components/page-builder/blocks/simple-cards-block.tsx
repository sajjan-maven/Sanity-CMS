import { PageBuilderType } from "@/types";
import Image from "next/image";
import React from "react";

export type SimpleCardBlockProps = PageBuilderType<"simpleCardBlock">;
// interface SimpleCardBlockProps {
//   block: {
//     title?: string;
//     cards?: Array<{
//       _key: string;
//       title: string;
//       description: string;
//       image?: {
//         asset?: {
//           url: string;
//           metadata?: {
//             dimensions?: {
//               width: number;
//               height: number;
//             };
//           };
//         };
//         alt?: string;
//       };
//       backgroundColor?: {
//         hex: string;
//       };
//     }>;
//   };
// }

export default function SimpleCardBlock( props : SimpleCardBlockProps) {

    const { title, cards } = props;

    return (
        <section className="flex justify-center items-center gap-14 py-0 pt-10 md:py-20 relative px-6">
            <div className="flex flex-col w-full items-start gap-6 md:gap-10 mx-auto">
                <h2 className="w-full font-semibold text-[#363338] text-3xl md:text-[40px] text-center leading-[48px]">
                {title}
                </h2>

                <div className="grid grid-rows-1 md:grid-cols-3 gap-4 max-w-[1256px] mx-auto">
                {Array.isArray(cards) && (cards as Array<any>).length > 0 ? (cards as Array<any>).map((card: any, index: number) => (
                    <div 
                      key={index} 
                      className="overflow-hidden rounded-2xl w-full h-full"
                      style={{ backgroundColor: card?.backgroundColor?.hex || '#F8F5F3' }}
                    >
                    {card.image?.asset?.url && (
                        <div className="relative w-full pt-[50%]">
                        <Image
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            width={card.image.asset.metadata?.dimensions?.width || 408}
                            height={card.image.asset.metadata?.dimensions?.height || 204}
                            src={card.image.asset.url}
                            alt={card.image.alt || card.title || 'Card image'}
                        />
                        </div>
                    )}
                    <div className="p-6 flex flex-col items-start gap-2">
                        <h3 className="text-[#363338] text-lg font-semibold">{card.title}</h3>
                        <p className="text-[#7b7481] text-base leading-6 font-normal">
                        {card.description}
                        </p>
                    </div>
                    </div>
                )): <div></div>}
                </div>
            </div>
        </section>
    );
};