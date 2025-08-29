import InfiniteScrollClient from './_components/infinite-scroll-client';
import { getPaginatedPosts } from '@/actions/get-paginated-posts';

const POSTS_PER_PAGE = 15;

export default async function BlogArchivePage() {
  let initialPostsData;

  try {
    initialPostsData = await getPaginatedPosts(0, POSTS_PER_PAGE);
  } catch (error) {
    console.error('Error loading initial posts:', error);
    initialPostsData = { posts: [], hasMore: false, total: 0 };
  }

  return (
    <div>
      <InfiniteScrollClient
        initialPosts={initialPostsData.posts || []}
        postsPerPage={POSTS_PER_PAGE}
      />
    </div>
  );
}