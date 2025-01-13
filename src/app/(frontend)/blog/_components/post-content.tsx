"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Date from '@/components/ui/date';
import Author from '@/components/ui/author';
import Heading from '@/components/ui/heading';
import { Tag, Text, ImageIcon } from 'lucide-react';
import BackButton from '@/components/ui/back-button';
import { PostCategoryType, PostType } from '@/types/post';
import AnimatedUnderline from '@/components/ui/animated-underline';
import TableOfContents from '@/components/portable-text/table-of-contents';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function PostContent({ post }: {
  post: PostType;
}) {

  const { 
    title, 
    _createdAt, 
    category,
    author, 
    content, 
    tableOfContents, 
    excerpt, 
    image,
    categories,
    settings
  } = post;
  
  return (
    <div className='grid grid-cols-12 gap-20'>
      <aside className='col-span-2 sticky top-28 h-fit'>
        <BackButton />
      </aside>
      <div className='pl-10 border-l border-dashed col-span-7'>
        <div className='flex items-center gap-3'>
          <Author author={author} />
          <Category category={category} /> 
          <Date date={_createdAt} />
        </div>
        <Heading tag="h1" size="xxl" className='mt-8'>
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
      <aside className='col-span-3 sticky top-28 h-fit space-y-6'>
        {settings.showTableOfContents && (
          <div className='space-y-4'>
            <div className="py-1.5 pl-2 flex items-center gap-2 border border-dashed rounded-lg">
              <span className='h-5 w-5 flex items-center justify-center rounded bg-gray-200 text-black'>
                <Text size={12} />
              </span>
              <span className='font-medium text-sm'>
                Table Of Contents
              </span>
            </div>
            <TableOfContents content={tableOfContents} />
          </div>
        )}
        {settings.showPostsByCategory && (
          <div className='space-y-4'>
            <div className="py-1.5 pl-2 flex items-center gap-2 border border-dashed rounded-lg">
              <span className='h-5 w-5 flex items-center justify-center rounded bg-gray-200 text-black'>
                <Tag size={12} />
              </span>
              <span className='font-medium text-sm'>
                Explore Categories
              </span>
            </div>
            <ul role="list" className="space-y-2 border-l border-dashed">
              {categories.map((category: PostCategoryType) => (
                <li key={category.slug}>
                  <Link 
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center gap-2 scroll-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    <span className="block w-2.5 border-t border-dashed text-gray-300" /> 
                      <span className="relative group w-fit">
                        {category.title}
                        <AnimatedUnderline />
                      </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  )
}

function Thumbnail({ image }: {
  image: {
    asset: { url: string; },
    alt: string;
    caption: string;
  }
}) {
  return (
    <>
      <div className='mt-10 p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50'>
        <Image
          src={image?.asset?.url}
          width={800}
          height={800}
          alt={image?.alt ?? ''}
          className='aspect-[3/2] rounded-2xl'
        />
      </div>
      <div className='flex items-center justify-center gap-1 mt-4 text-center text-gray-600'>
        <ImageIcon size={15} />
        {image.caption}
      </div>
    </>
  )
}

function Category({ category }: {
  category: PostCategoryType;
}) {
  return (
    <Link 
      href={`/blog/category/${category.slug}`} 
      className='flex items-center gap-1 px-1.5 rounded-full bg-black'
    >
      <span 
        className='h-2 w-2 rounded bg-violet-300' 
        style={{ backgroundColor: category?.categoryColor?.value ?? '#FFFFFF' }} 
      />
      <span className='pr-[1.5px] text-sm text-white'>
        {category.title}
      </span>
    </Link>
  )
}