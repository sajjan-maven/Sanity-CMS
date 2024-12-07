"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Heading from '@/components/ui/heading';
import { PostCategoryType, PostType } from '@/types/post';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function PostContent({ post }: {
  post: PostType;
}) {

  const router = useRouter();
  
  const { title, category, excerpt, image, content } = post;

  return (
    <div className='grid grid-cols-12 gap-20'>
      <div className='col-span-2'>
        <button 
          onClick={() => router.back()}
          className='flex items-center gap-1.5'
        >
         <ArrowLeft size={18} /> <span className='font-medium'>Back</span>
        </button>
      </div>
      <div className='col-span-7'>
        <div className='flex items-center gap-3'>
          <Category category={category} /> <Date />
        </div>
        <Heading tag="h1" size="xl" className='mt-8 font-semibold leading-tight tracking-tight text-balance'>
          {title}
        </Heading>
        <Thumbnail image={image} />
        <p className='text-xl my-14 py-8 border-y border-dashed'>
          {excerpt}
        </p>
        <div>
          <PortableTextEditor data={content} />
        </div>
      </div>
      <div className='col-span-3'>
        <span className='font-medium'>
          On This Page
        </span>
      </div>
    </div>
  )
}

function Thumbnail({ image }: {
  image: {
    asset: { url: string; },
    alt: string;
  }
}) {
  return (
    <div className='mt-10 p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50'>
      <Image
        src={image?.asset?.url}
        width={800}
        height={800}
        alt={image?.alt}
        className='aspect-[3/2] rounded-2xl'
      />
    </div>
  )
}

function Category({ category }: {
  category: PostCategoryType;
}) {
  return (
    <Link href={`/blog/category/${category.slug}`} className='px-1.5 text-sm rounded-full bg-black text-white'>
      {category.title}
    </Link>
  )
}

function Date() {
  return(
    <span className='text-sm font-medium text-gray-500'>
      7th December 2024
    </span>
  )
}