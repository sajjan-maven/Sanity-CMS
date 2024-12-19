import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/ui/heading';
import { ProjectType } from '@/types/project';
import AnimatedUnderline from '@/components/ui/animated-underline';

export default function ProjectCard({ project }: {
  project: ProjectType;
}) {

  const { title, category, slug, shortDescription, image } = project;

  return (
    <article aria-label={title} className='relative group pb-10 border-b border-dashed'>
      <Link href={`/projects/${slug}`} className='relative space-y-6'>
        <Category>
          {category.title}
        </Category>
        <Thumbnail image={image} />
        <Heading tag="h2" size="md" className='text-balance'>
          {title}   
        </Heading>
        <Excerpt>
          {shortDescription}
        </Excerpt>
      </Link>
      <AnimatedUnderline className='-translate-y-0.5' />
    </article>
  )
}

function Thumbnail({ image }: {
  image: {
    asset: { url: string; },
    alt: string;
  }
}) {
  return (
    <div className='p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50'>
      <Image
        src={image?.asset?.url}
        width={800}
        height={800}
        alt={image?.alt ?? ''}
        className='aspect-[3/2] rounded-2xl'
      />
    </div>
  )
}

function Category({ children }: { children: React.ReactNode }) {
  return (
    <div className='z-10 absolute top-10 left-10 px-1.5 rounded-md text-sm font-medium bg-white'>
      {children}
    </div>
  )
}

function Excerpt({ children }: { children: React.ReactNode }) {
  return (
    <p className='text-balance text-neutral-500'>
      {children}
    </p>
  )
}