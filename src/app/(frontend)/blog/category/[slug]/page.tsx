import { sanityFetch } from '@/sanity/lib/live';
import PostGrid from '../../_components/post-grid';
import { POSTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries/documents/post';

export default async function PostsByCategoryPage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;

  const { data: posts } = await sanityFetch({ 
    query: POSTS_BY_CATEGORY_QUERY, 
    params: params
  });

  if (posts.length === 0) {
    return (
      <p className="pt-8 md:pt-14 text-center text-gray-600">
        No posts found in this category.
      </p>
    )
  }

  return (
    <PostGrid posts={posts} />
  )
}