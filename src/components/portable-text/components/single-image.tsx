import Image from "next/image";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/sanity/lib/utils";

export default function SingleImage({ data }: {
  data: {
    image?: {
      asset: {
        _ref: string;
      };
      aspectRatio: 'square' | 'rectangle' | 'portrait';
      cornerRadius: 'rounded' | 'straight';
      enableBorder: boolean;
      borderStyle: 'solid' | 'dashed';
      alt: string;
    };
  }
}) {
  
  return (
    <div>
      {data.image?.asset._ref && (
        <div 
          className={cn('mt-12 md:mt-14', {
            'p-4 md:p-4 border border-dashed': data?.image?.enableBorder,
            'rounded-3xl md:rounded-3xl': data?.image?.cornerRadius === 'rounded',
          })}
        >
          <Image
            src={
              urlForImage(data.image)
              ?.height(400)
              .width(800)
              .url() as string
            }
            width={800}
            height={800}
            alt={data.image?.alt ?? ''}
            className={cn('my-0 object-cover aspect-auto h-auto w-full', {
              'rounded-2xl': data?.image?.cornerRadius === 'rounded',
              'aspect-[3/2]': data?.image?.aspectRatio === 'rectangle',
              'aspect-[3/4]': data?.image?.aspectRatio === 'portrait',
            })}
          />
        </div>
      )}
    </div>
  )
}