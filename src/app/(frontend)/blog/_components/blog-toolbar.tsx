import React from 'react';
import { BlogSearch } from './blog-search';
import PostCategories from './post-categories';
import { PostCategoryType, PostType } from '@/types/post';

export default function BlogToolbar({ categories, posts }: {
  categories: PostCategoryType[];
  posts: PostType[];
}) {
  return (
    <>
      <BlogSearch posts={posts} classNames='mt-4 md:hidden' />
      <div className='overflow-x-scroll md:overflow-visible relative z-20 -mx-4 md:-mx-0 py-4 md:py-2 pl-4 md:pl-0 mt-6 md:mt-16 mb-6 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-2 border-y border-dashed backdrop-blur-md backdrop-opacity-50'>
        <PostCategories categories={categories} />
        <BlogSearch posts={posts} classNames='hidden md:block' />
      </div>
    </>
  )
}