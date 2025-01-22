import React from 'react';
import { sanityFetch } from '@/sanity/lib/live';
import BlogLayout from './_components/blog-layout';
import { allPostCategoriesQuery, allPostsQuery, blogPageQuery } from '@/sanity/lib/queries/documents/post';

export default async function BlogArchiveLayout({ children }: {
  children: React.ReactNode;
}) {
  
  const [{ data: categories }, { data: posts }, { data: page }] = await Promise.all([
    sanityFetch({ query: allPostCategoriesQuery }),
    sanityFetch({ query: allPostsQuery }),
    sanityFetch({ query: blogPageQuery }),
  ]);

  return (
    <BlogLayout categories={categories} posts={posts} page={page}>
      {children}
    </BlogLayout>
  )
}
