import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PostContent from '../_components/post-content';
import RelatedPosts from '../_components/related-posts';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries/documents/post';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: postSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: postBySlugQuery,
    params: await params,
    stega: false,
  });

  if (!post) {
    return {}
  }

  const metadata: Metadata = {
    title: post.seo.title,
    description: post.seo.description,
  };

  if (post.seo.noIndex) {
    metadata.robots = "noindex";
  };

  return metadata;
}

export default async function PostPage({ params }: PageProps) {
  const { data: post } = await sanityFetch({ 
    query: postBySlugQuery, 
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