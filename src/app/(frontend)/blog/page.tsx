import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import PostGrid from './_components/post-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { allPostsQuery, blogPageQuery } from '@/sanity/lib/queries/documents/post';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: blogPageQuery,
    stega: false
  });

  if (!data) { return {} };

  return processMetadata({ data });
}

export default async function BlogArchivePage() {
  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  });

  return (
    <PostGrid posts={posts} />
  )
}