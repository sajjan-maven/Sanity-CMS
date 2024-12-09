import PostGrid from './_components/post-grid';
import { fetchAllPosts } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function BlogArchivePage() {

  const posts = await fetchAllPosts();  

  return (
    <PostGrid posts={posts} />
  )
}