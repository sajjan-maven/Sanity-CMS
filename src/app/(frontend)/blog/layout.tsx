import React from 'react';
import { sanityFetch } from '@/sanity/lib/live';
import BlogLayout from './_components/blog-layout';
import { ALL_POST_CATEGORIES_QUERY, ALL_POSTS_QUERY, BLOG_PAGE_QUERY } from '@/sanity/lib/queries/documents/post';

export default async function BlogArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  
  const [{ data: categories }, { data: posts }, { data: page }] = await Promise.all([
    sanityFetch({ query: ALL_POST_CATEGORIES_QUERY }),
    sanityFetch({ query: ALL_POSTS_QUERY }),
    sanityFetch({ query: BLOG_PAGE_QUERY }),
  ]);

  return (
    <BlogLayout categories={categories} posts={posts} page={page}>
      {children}
    </BlogLayout>
  )
}
