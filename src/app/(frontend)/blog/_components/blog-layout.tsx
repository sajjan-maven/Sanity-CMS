"use client"
import React from 'react';
import BlogToolbar from './blog-toolbar';
import Heading from '@/components/ui/heading';
import { usePathname } from 'next/navigation';
import Container from '@/components/global/container';
import { PostCategoryType, PostType } from '@/types/post';

export default function BlogLayout({
  children,
  categories,
  posts
}: Readonly<{
  children: React.ReactNode;
  categories: PostCategoryType[];
  posts: PostType[];
}>) {

  const pathname = usePathname();

  if (pathname === '/blog' || pathname.includes('/blog/category/')) return (
    <main className='px-10 pattern-bg'>
      <Container className='pt-40 pb-28 border-x border-dashed'>
        <Heading tag="h1" size="xxxl">
          Blog
        </Heading>
        {(pathname === '/blog' || pathname.includes('/blog/category/')) && (
          <BlogToolbar categories={categories} posts={posts} />
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
