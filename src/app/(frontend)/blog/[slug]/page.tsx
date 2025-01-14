import React from 'react';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PostContent from '../_components/post-content';
import RelatedPosts from '../_components/related-posts';
import { postBySlugQuery } from '@/sanity/lib/queries/documents/post';

export default async function PostPage(props: {
  params: Promise<{ slug: string; }>
}) {
  
  const params = await props.params;

  const { data: post } = await sanityFetch({ 
    query: postBySlugQuery, 
    params: params
  });

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