import React from 'react';
import VideoDialog from './video-dialog';

export default function PlayVideo({ videoUrl }: {
  videoUrl: string;
}) {
  return (
    <div className='z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group'>
      <VideoDialog videoUrl={videoUrl}>
        <button className='flex flex-col outline-none'>
          <div className='flex items-center justify-center p-4 md:p-7 border-[2.5px] drop-shadow-xl group border-white rounded-full bg-white transition duration-300'>
            <div className='h-6 w-6 play-icon translate-x-1 bg-black'></div>
          </div>
          <div className='hidden md:block translate-y-10 group-hover:translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out'>
            <span className='font-medium text-lg text-white'>
              Play Video
            </span>
          </div>
        </button>
      </VideoDialog>
      <div className='w-full h-0.5 rounded-full translate-y-5 translate-x-20 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out bg-white' />
    </div>
  )
}