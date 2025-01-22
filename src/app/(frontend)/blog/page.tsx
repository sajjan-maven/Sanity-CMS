import PostGrid from './_components/post-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { allPostsQuery, blogPageQuery } from '@/sanity/lib/queries/documents/post';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  
  const { data: page } = await sanityFetch({
    query: blogPageQuery,
    stega: false
  });

  return {
    title: page?.metaTitle ?? page?.title,
    description: page?.metaDescription ?? '',
  } satisfies Metadata;
}

export default async function BlogArchivePage() {

  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  });

  return (
    <PostGrid posts={posts} />
  )
}