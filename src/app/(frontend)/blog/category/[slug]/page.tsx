import { sanityFetch } from '@/sanity/config/live';
import PostGrid from '../../_components/post-grid';
import { postsByCategoryQuery } from '@/sanity/lib/queries/documents/post';

export default async function PostsByCategoryPage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;

  const { data: posts } = await sanityFetch({ 
    query: postsByCategoryQuery, 
    params: params
  });

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