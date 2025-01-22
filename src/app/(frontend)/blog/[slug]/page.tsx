import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PostContent from '../_components/post-content';
import RelatedPosts from '../_components/related-posts';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries/documents/post';

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: postSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const params = await props.params;
  
  const { data: post } = await sanityFetch({
    query: postBySlugQuery,
    params,
    stega: false,
  });

  return {
    title: post?.metaTitle ?? post?.title,
    description: post?.metaDescription ?? '',
  } satisfies Metadata;
}

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