import PostGrid from './_components/post-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { allPostsQuery } from '@/sanity/lib/queries/documents/post';

export default async function BlogArchivePage() {

  const { data: posts } = await sanityFetch({
    query: allPostsQuery,
  });

  return (
    <PostGrid posts={posts} />
  )
}