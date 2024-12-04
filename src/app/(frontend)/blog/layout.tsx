import React from 'react';
import BlogLayout from './_components/blog-layout';
import { fetchPostCategories } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function BlogArchiveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const categories = await fetchPostCategories();
  
  return (
    <BlogLayout categories={categories}>
      {children}
    </BlogLayout>
  )
}
