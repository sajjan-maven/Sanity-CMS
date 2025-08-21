"use client"
import React from 'react';
import BlogToolbar from './blog-toolbar';
import { usePathname } from 'next/navigation';
import Container from '@/components/global/container';
import { PageBuilder } from '@/components/page-builder';
import { BlogPageQueryResult } from '../../../../../sanity.types';
import BlogHeader from '@/components/ui/BlogHeader';
import FeaturedBlog from '@/components/ui/FeaturedBlog';
import EditorPicks from '@/components/ui/EditorPicks';

export default function BlogLayout({ children, page }: Readonly<{
  children: React.ReactNode;
  page: BlogPageQueryResult;
}>) {

  const pathname = usePathname();

  const { heroText, featuredBlog, editorsPicks, categories, posts } = page ?? {};

  if (pathname === '/blog' || pathname.includes('/blog/category/')) return (
    <main className='overflow-hidden md:overflow-auto'>
      <div>
        <BlogHeader heroText={heroText ?? 'Get expert-led insights on Modern IT'} />
        {featuredBlog && <FeaturedBlog featuredBlog={featuredBlog} />}
        {editorsPicks && <EditorPicks editorsPicks={editorsPicks} />}
        <Container>
          {(pathname === '/blog' || pathname.includes('/blog/category/')) && (
            <BlogToolbar categories={categories} posts={posts} />
          )}
          {children}
        </Container>
      </div>
      <PageBuilder
        id={page?._id ?? ''}
        type={page?._type ?? ''}
        pageBuilder={page?.pageBuilder ?? []}
      />
    </main>
  )

  return (
    <main className='pt-12'>
      <Container>
        {children}
      </Container>
    </main>
  )
}