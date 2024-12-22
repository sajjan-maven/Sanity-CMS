"use client"
import React from 'react';
import Heading from '@/components/ui/heading';
import { usePathname } from 'next/navigation';
import PostCategories from './post-categories';
import { PostCategoryType } from '@/types/post';
import Container from '@/components/global/container';

export default function BlogLayout({
  children,
  categories
}: Readonly<{
  children: React.ReactNode;
  categories: PostCategoryType[];
}>) {

  const pathname = usePathname();

  if (pathname === '/blog' || pathname.includes('/blog/category/')) return (
    <main className='pt-40 pb-28 pattern-bg'>
      <Container>
        <Heading tag="h1" size="xxxl">
          Blog
        </Heading>
        {(pathname === '/blog' || pathname.includes('/blog/category/')) && (
          <PostCategories categories={categories} />
        )}
        {children}
      </Container>
    </main>
  )

  return (
    <main className='pt-40 pb-28 pattern-bg'>
      <Container>
        {children}
      </Container>
    </main>
  )
}
