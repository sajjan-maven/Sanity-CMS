import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AllPostsQueryResult } from "../../../../../sanity.types";

interface PostCardProps {
  post: AllPostsQueryResult[number];
}

export default function PostCard({ post }: PostCardProps) {

  const { title, category, slug, excerpt, image } = post;

  return (
    <article aria-label={title ?? ''} className='relative pb-8'>
      <Link href={`/blog/${slug}`} className='relative'>
        <Thumbnail image={image} />
        <Category>
          {category?.title}
        </Category>
        <h3 className="text-[20px] font-medium text-[#18181B] my-[10px]">
          {title}
        </h3>
        <Excerpt>
          {excerpt}
        </Excerpt>
      </Link>
    </article>
  )
}

function Thumbnail({ image }: {
  image?: {
    asset?: { url?: string | null } | null;
    altText?: string | null;
  } | null;
}) {

  if (!image?.asset?.url) return null;

  return (
    <div className='w-full pt-[55%] rounded-lg overflow-hidden relative'>
      <Image
        src={image.asset.url}
        width={500}
        height={300}
        alt={image.altText ?? ''}
        className='absolute top-0 left-0 h-full w-full object-cover mx-auto'
      />
    </div>
  )
}

function Category({ children }: { children: React.ReactNode }) {
  return (
    <div className='pt-4 font-semibold text-[#f25c30]'>
      {children}
    </div>
  )
}

function Excerpt({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-gray-500'>
      {children}
    </p>
  )
}