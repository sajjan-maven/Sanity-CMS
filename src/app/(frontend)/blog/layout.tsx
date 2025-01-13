import React from 'react';
import BlogLayout from './_components/blog-layout';
import { fetchAllPosts, fetchPostCategories } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function BlogArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const categories = await fetchPostCategories();
  const posts = await fetchAllPosts();
  
  return (
    <BlogLayout categories={categories} posts={posts}>
      {children}
    </BlogLayout>
  )
}
