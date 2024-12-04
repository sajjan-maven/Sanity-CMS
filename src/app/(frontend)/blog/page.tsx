import React from 'react';
import PostGrid from './_components/post-grid';
import { fetchAllPosts } from '@/sanity/lib/fetches';

export default async function BlogArchivePage() {

  const posts = await fetchAllPosts();  

  return (
    <div>
      <PostGrid posts={posts} />
    </div>
  )
}