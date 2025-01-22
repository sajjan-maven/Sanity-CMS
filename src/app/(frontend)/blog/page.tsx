import { Metadata } from 'next';
import PostGrid from './_components/post-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { allPostsQuery, blogPageQuery } from '@/sanity/lib/queries/documents/post';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: blogPageQuery,
    stega: false
  });

  if (!page) {
    return {}
  };

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function BlogArchivePage() {
  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  });

  return (
    <PostGrid posts={posts} />
  )
}