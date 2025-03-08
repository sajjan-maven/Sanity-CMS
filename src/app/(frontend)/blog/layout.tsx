import React from 'react';
import { sanityFetch } from '@/sanity/lib/live';
import BlogLayout from './_components/blog-layout';
import { BLOG_PAGE_QUERY } from '@/sanity/lib/queries/documents/post';

export default async function BlogArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  
  const { data: page } = await sanityFetch({
    query: BLOG_PAGE_QUERY,
  });

  return (
    <BlogLayout 
      categories={page.categories} 
      posts={page.posts} 
      page={page}
    >
      {children}
    </BlogLayout>
  )
}