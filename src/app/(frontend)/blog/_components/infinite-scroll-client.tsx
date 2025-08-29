// app/blog/_components/infinite-scroll-client.tsx
'use client';

import { useState, useCallback } from 'react';
import { AllPostsQueryResult } from "../../../../../sanity.types";
import { useInfiniteScroll } from '@/hooks/use-infinite-scroll';
import { getPaginatedPosts, type PaginatedPostsResult } from '@/actions/get-paginated-posts';
import PostGrid from './post-grid';

interface InfiniteScrollClientProps {
    initialPosts: AllPostsQueryResult;
    postsPerPage?: number;
}

export default function InfiniteScrollClient({
    initialPosts,
    postsPerPage = 15
}: InfiniteScrollClientProps) {
    const [posts, setPosts] = useState<AllPostsQueryResult>(initialPosts);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true); // Start optimistic
    const [page, setPage] = useState(2); // Always start from page 2
    const [error, setError] = useState<string | null>(null);

    const loadMorePosts = useCallback(async () => {
        if (isLoading || !hasMore) return;

        setIsLoading(true);
        setError(null);
        try {
            const offset = (page - 1) * postsPerPage;
            const result: PaginatedPostsResult = await getPaginatedPosts(offset, postsPerPage);

            if (result.error) {
                throw new Error(result.error);
            }

            if (result.posts.length > 0) {
                setPosts(prevPosts => [...prevPosts, ...result.posts]);
                setPage(prevPage => prevPage + 1);

                // Trust the server's hasMore calculation completely
                setHasMore(result.hasMore);
            } else {
                setHasMore(false);
            }
        } catch (error: any) {
            console.error('Error loading more posts:', error);
            setError(error.message || 'An unknown error occurred');
            setHasMore(false); // Stop trying on error
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, hasMore, page, postsPerPage]);

    const { sentinelRef } = useInfiniteScroll({
        hasMore,
        isLoading,
        onLoadMore: loadMorePosts,
        threshold: 0.1,
        rootMargin: '100px'
    });

    return (
        <>
            {/* Render all posts within this component */}
            <PostGrid
                posts={posts}
                isLoading={isLoading}
                hasMore={hasMore}
            />

            {/* Sentinel element for infinite scroll */}
            <div ref={sentinelRef} className="h-1" />


            {/* Error message */}
            {error && (
                <div className="text-center py-4 text-red-500">
                    {error}
                    <button
                        onClick={() => {
                            setError(null);
                            setHasMore(true);
                            loadMorePosts();
                        }}
                        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            )}

            {/* No more posts message */}
            {!hasMore && posts.length > 0 && (
                <div className="text-center py-8 text-gray-500">
                    You&apos;ve reached the end of the blog posts
                </div>
            )}
        </>
    );
}