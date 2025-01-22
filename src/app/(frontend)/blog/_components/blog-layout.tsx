"use client"
import React from 'react';
import { PageType } from '@/types/page';
import BlogToolbar from './blog-toolbar';
import { usePathname } from 'next/navigation';
import Heading from '@/components/shared/heading';
import PageBuilder from '@/components/page-builder';
import Container from '@/components/global/container';
import { PostCategoryType, PostType } from '@/types/post';

export default function BlogLayout({
  children,
  categories,
  posts,
  page
}: Readonly<{
  children: React.ReactNode;
  categories: PostCategoryType[];
  posts: PostType[];
  page: PageType;
}>) {

  const pathname = usePathname();

  if (pathname === '/blog' || pathname.includes('/blog/category/')) return (
    <main className='overflow-hidden md:overflow-auto'>
      <div className='px-4 xl:px-10 pattern-bg'>
        <Container className='px-4 pt-32 md:pt-40 pb-14 md:pb-28 border-x border-dashed'>
          <Heading tag="h1" size="xxxl">
            Blog
          </Heading>
          {(pathname === '/blog' || pathname.includes('/blog/category/')) && (
            <BlogToolbar categories={categories} posts={posts} />
          )}
          {children}
        </Container>
      </div>
      <PageBuilder blocks={page?.pageBuilder} />
    </main>
  )

  return (
    <main className='pt-32 md:pt-40 pb-10 xl:pb-16 pattern-bg'>
      <Container>
        {children}
      </Container>
    </main>
  )
}
