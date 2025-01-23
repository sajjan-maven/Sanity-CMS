import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import PostGrid from './_components/post-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_POSTS_QUERY, BLOG_PAGE_QUERY } from '@/sanity/lib/queries/documents/post';

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: BLOG_PAGE_QUERY,
    stega: false
  });

  if (!data) { return {} };

  return processMetadata({ data });
}

export default async function BlogArchivePage() {
  const { data: posts } = await sanityFetch({
    query: ALL_POSTS_QUERY,
  });

  return (
    <PostGrid posts={posts} />
  )
}