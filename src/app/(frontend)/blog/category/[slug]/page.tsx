import PostGrid from '../../_components/post-grid';
import { fetchPostsByCategory } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function PostsByCategoryPage({ params }: {
  params: { slug: string }
}) {

  const posts = await fetchPostsByCategory(params.slug);

  if (posts.length === 0) {
    return (
      <p className="py-8 text-center text-gray-600">
        No posts found in this category.
      </p>
    )
  }
  
  return (
    <PostGrid posts={posts} />
  )
}