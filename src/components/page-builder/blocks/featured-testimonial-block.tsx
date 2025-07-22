import { PageBuilderType } from "@/types";
import Image from "next/image";

export type FeaturedTestimonialBlockProps = PageBuilderType<"featuredTestimonialBlock">;

export default function FeaturedTestimonialBlock(props: FeaturedTestimonialBlockProps) {
  const { quote, author, quoteIcon } = props;

  return (
    <section 
      className="w-full py-10 md:py-20 z-[5] px-6 bg-gradient-to-b from-[#f8f5f3] to-white"
    >
      <div className="max-w-[790px] mx-auto">
        <div className="flex flex-col items-start gap-6 md:gap-12">
          {quoteIcon?.asset?.url && (
            <Image 
              className="w-[41px] h-10" 
              alt={quoteIcon.alt || 'Quote icon'} 
              src={quoteIcon.asset.url} 
              width={41} 
              height={40} 
            />
          )}

          <div className="flex flex-col items-start gap-6">
            <p className="text-lg text-[#363338] font-normal leading-[26px] max-w-[800px]">
              {quote}
            </p>

            <div className="flex items-center gap-4">
              {author?.avatar?.asset?.url && (
                <div className="rounded-full overflow-hidden border border-[#54505833]">
                  <Image
                    width={48}
                    height={48}
                    src={author.avatar.asset.url as string}
                    alt={author.avatar.alt ?? author.name ?? ''}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <p className="text-base text-[#7b7481] font-medium leading-6">
                  {author?.name}
                </p>
                <p className="text-xs text-[#7b7481] font-normal leading-4">
                  {author?.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}