"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Heading from '@/components/ui/heading';
import { PostCategoryType, PostType } from '@/types/post';
import { ArrowLeft, ChevronLeft, Text } from 'lucide-react';
import AnimatedUnderline from '@/components/ui/animated-underline';
import TableOfContents from '@/components/portable-text/table-of-contents';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function PostContent({ post }: {
  post: PostType;
}) {

  const { title, category, content, tableOfContents, excerpt, image } = post;

  return (
    <div className='grid grid-cols-12 gap-20'>
      <div className='col-span-2 sticky top-28 h-fit'>
        <BackButton />
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
      <div className='col-span-3 sticky top-28 h-fit'>
        <div className="mb-4 flex items-center gap-2">
          <Text size={16} />
          <span className='font-medium'>
            Table Of Contents
          </span>
        </div>
        <TableOfContents content={tableOfContents} />
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

function BackButton() {

  const router = useRouter();

  return (
    <button 
      type="button"
      onClick={() => router.back()}
      aria-label="Go back to previous page"
      className='flex items-center gap-1'
    >
      <ChevronLeft size={18} aria-hidden="true" /> 
      <span className='relative group font-medium'>
        Back
        <AnimatedUnderline />
      </span>
    </button>
  )
}

function Category({ category }: {
  category: PostCategoryType;
}) {
  return (
    <Link 
      href={`/blog/category/${category.slug}`} 
      className='px-1.5 text-sm rounded-full bg-black text-white'
    >
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