import Image from 'next/image';
import React from 'react';
import { PageBuilderType } from "@/types";

export type SocialReviewBlockProps = PageBuilderType<"socialReviewBlock">;

export default function SocialReviewBlock( props: SocialReviewBlockProps ) {
  const { 
    title,
    background,
    spacing,
    avatarImage,
    comments = []
  } = props;

  const backgroundStyle = background?.gradient 
    ? { 
        background: `linear-gradient(to bottom, ${background?.color?.hex || '#f8f5f3'}, white)`,
        backgroundColor: background?.color?.hex || '#f8f5f3'
      }
    : { backgroundColor: background?.color?.hex || '#f8f5f3' };

  return (
    <section 
      className="gap-2 px-6 w-full"
      style={{
        ...backgroundStyle,
        paddingTop: `${spacing?.top || 40}px`,
        paddingBottom: `${spacing?.bottom || 40}px`
      }}
    >
      <div className="flex flex-col max-w-[645px] mx-auto items-center gap-4 w-full">
        <h2 className="font-semibold text-[#363338] text-2xl md:text-[40px] text-center mb-2">
          {title || 'What IT folks share about our free tools on Reddit'}
        </h2>
      </div>
      
      <div className="flex flex-col w-full justify-around gap-8 max-w-[1256px] mx-auto">
        <div className='flex flex-row flex-wrap items-stretch'>
          {comments?.map((comment, index) => (
            <ul key={index} className={`py-2 md:px-2 w-full ${comment.width || 'md:w-1/3'}`}>
              <li className='p-4 bg-[#E4DBD0] rounded-xl h-full flex flex-col items-stretch'>
                <div className='flex gap-2 mb-1'>
                  {avatarImage?.asset?.url ? (
                    <Image 
                      src={avatarImage.asset.url}
                      alt={`${comment.username} avatar`}
                      width={32}
                      height={32}
                    />
                  ) : (
                    <Image 
                      src='/section-images/reddit.png'
                      alt={`${comment.username} avatar`}
                      width={32}
                      height={32}
                    />
                  )}
                  <span className='font-medium'>{comment.username}</span>
                </div>
                <p className='flex-grow'>{comment.content}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}