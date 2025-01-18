"use client"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Container from '@/components/global/container';
import VideoDialog from '@/components/shared/video-dialog';
import { MediaBlockType } from '@/types/page-builder/blocks/media';

export default function MediaBlock(props: MediaBlockType) {

  const { 
    backgroundType,
    backgroundWidth,
    image, 
    overlayType,
    dialogType,
    videoUrl,
    anchorId 
  } = props;

  return (
    <section 
      {...(anchorId ? { id: anchorId } : {})} 
      className={cn('border-t border-dashed pattern-bg--2', {
        'px-4 md:px-10': backgroundWidth === 'contained'
      })}
    >
      <Container 
        className={cn('relative h-[18rem] md:h-[48rem] overflow-hidden', {
          'border-x border-dashed': backgroundWidth === 'contained'
        })}
      >
        {backgroundType === 'image' && image && (
          <div 
            className={cn('absolute inset-0', {
              
            })}
          >
            <Image
              src={image.asset.url}
              width={2400}
              height={1200}
              alt={image.alt ?? ''}
              className={cn('w-full h-full object-cover', {
                
              })}
            />
            {overlayType === 'dark' && (
              <DarkOverlay />
            )}
          </div>
        )}
        {dialogType === 'video' && videoUrl && (
          <div className='z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group'>
            <VideoDialog videoUrl={videoUrl}>
              <button className='flex flex-col outline-none'>
                <div className='flex items-center justify-center p-4 md:p-7 border-[2.5px] drop-shadow-xl group border-gray-200 hover:border-white rounded-full bg-gray-200 hover:bg-white transition duration-300'>
                  <div className='h-6 w-6 play-icon translate-x-1 bg-black'></div>
                </div>
                <div className='hidden md:block translate-y-10 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
                  <span className='font-medium text-lg text-white'>
                    Play Video
                  </span>
                </div>
              </button>
            </VideoDialog>
            <div className='w-full h-0.5 rounded-full translate-y-16 group-hover:translate-y-5 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white' />
          </div>
        )}
      </Container>
    </section>
  )
}

function DarkOverlay() {
  return (
    <>
      <div className='absolute inset-0 bg-black/40' />
      <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent h-[50%] w-full' />
    </>
  )
}