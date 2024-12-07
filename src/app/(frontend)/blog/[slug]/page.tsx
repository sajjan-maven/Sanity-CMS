import React from 'react';
import PostContent from '../_components/post-content';
import { fetchPostBySlug } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function PostPage({ params }: {
  params: { slug: string; }
}) {

  const post = await fetchPostBySlug(params.slug);

  return (
    <div>
      <PostContent post={post} />
    </div>
  )
}