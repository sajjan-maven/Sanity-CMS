'use server';

import { sanityFetch } from '@/sanity/lib/live';
import { paginatedPostsQuery } from '@/sanity/lib/queries/documents/post';

// Define a proper return type
export interface PaginatedPostsResult {
    posts: any[]; // Replace 'any' with your specific Post type if possible
    hasMore: boolean;
    total: number;
    error?: string; // Optional error message for the client
}

export async function getPaginatedPosts(offset: number, limit: number): Promise<PaginatedPostsResult> {
    try {
        const { data } = await sanityFetch({
            query: paginatedPostsQuery,
            params: { offset, limit }
        });

        // If the query fails, data will be null/undefined
        if (!data) {
            throw new Error('Failed to fetch data from Sanity');
        }

        const { posts, total } = data;
        const hasMore = offset + limit < total;

        return {
            posts: posts || [],
            hasMore,
            total
        };

    } catch (error) {
        console.error('Error fetching paginated posts:', error);
        // Return a structured error instead of an empty array
        return {
            posts: [],
            hasMore: false,
            total: 0,
            error: 'Failed to load more posts. Please try again later.'
        };
    }
}