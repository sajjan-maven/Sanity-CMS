import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import PostContent from '../_components/post-content';
import RelatedPosts from '../_components/related-posts';
import { POST_BY_SLUG_QUERY, POST_SLUGS_QUERY } from '@/sanity/lib/queries/documents/post';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_BY_SLUG_QUERY,
    params: await params,
    stega: false,
  });

  if (!post) { return {} };

  return processMetadata({ data: post });
}

export default async function PostPage({ params }: PageProps) {
  const { data: post } = await sanityFetch({ 
    query: POST_BY_SLUG_QUERY, 
    params: await params
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