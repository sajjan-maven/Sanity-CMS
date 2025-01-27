import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import PostGrid from '../../_components/post-grid';
import { POST_CATEGORY_BY_SLUG_QUERY, POST_SLUGS_QUERY, POSTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries/documents/post';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const { data: category } = await sanityFetch({
    query: POST_CATEGORY_BY_SLUG_QUERY,
    params: await params,
    stega: false,
  });

  if (!category) { return {} };

  return {
    title: `${category.title} Posts`,
    description: `Browse our collection of ${category.title.toLowerCase()} posts.`
  }
}

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