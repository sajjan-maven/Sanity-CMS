import React from 'react';
import { BlogSearch } from './blog-search';
import PostCategories from './post-categories';
import { PostCategoryType, PostType } from '@/types/post';

export default function BlogToolbar({ categories, posts }: {
  categories: PostCategoryType[];
  posts: PostType[];
}) {
  return (
    <div className='relative z-20 py-2 mt-16 mb-12 flex items-center justify-between gap-2 border-y border-dashed backdrop-blur-md backdrop-opacity-50'>
      <PostCategories categories={categories} />
      <BlogSearch posts={posts} />
    </div>
  )
}