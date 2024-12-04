import React from 'react';
import PostGrid from '../../_components/post-grid';
import { fetchPostsByCategory } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function PostsByCategoryPage({ params }: {
  params: { slug: string }
}) {

  const posts = await fetchPostsByCategory(params.slug);
  
  return (
    <div>
      {posts.length > 0 ? (
        <PostGrid posts={posts} />
      ) : (
        <p className="py-8 text-center text-gray-600">
          No posts found in this category.
        </p>
      )}
    </div>
  )
}
