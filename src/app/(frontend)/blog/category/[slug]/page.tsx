import PostGrid from '../../_components/post-grid';
import { fetchPostsByCategory } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function PostsByCategoryPage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;
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