import React from 'react';
import { notFound } from 'next/navigation';
import PostContent from '../_components/post-content';
import { fetchPostBySlug } from '@/sanity/lib/fetches';
import RelatedPosts from '../_components/related-posts';

export const revalidate = 0;

export default async function PostPage({ params }: {
  params: { slug: string; }
}) {

  const post = await fetchPostBySlug(params.slug);
  if (post === null) notFound();

  const showRelatedPosts = post.relatedPosts?.length > 0 && post.settings.showRelatedPosts;

  return (
    <>
      <PostContent post={post} />
      {showRelatedPosts && (
        <RelatedPosts posts={post.relatedPosts} />
      )}
    </>
  )
}