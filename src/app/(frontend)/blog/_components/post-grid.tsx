import React from 'react';
import PostCard from './post-card';
import { AllPostsQueryResult } from "../../../../../sanity.types";

interface PostGridProps {
  posts: AllPostsQueryResult;
  isLoading?: boolean;
  hasMore?: boolean;
}

export default function PostGrid({ posts, isLoading = false, hasMore = false }: PostGridProps) {
  return (
    <>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>

      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-center py-10 blink">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="35" viewBox="0 0 32 35" fill="none">
            <path d="M0 13.6111C7.78809e-07 15.2318 1.177e-06 16.0421 0.138176 16.7555C0.617862 19.2321 2.30204 21.3292 4.657 22.3823C5.33534 22.6857 6.14392 22.8822 7.76106 23.2752L16 25.2777V17.5L0 13.6111L23.9999 7.77778V0L7.76108 3.94695C6.14388 4.34002 5.33528 4.53655 4.65692 4.83991C2.30198 5.893 0.617819 7.99013 0.138129 10.4667C-4.61949e-05 11.1801 0 11.9904 0 13.6111Z" fill="black" />
            <path d="M7.99997 35L24.2389 31.053C25.856 30.66 26.6647 30.4634 27.343 30.1601C29.698 29.107 31.3821 27.0099 31.8618 24.5333C32 23.8199 32 23.0096 32 21.3889C32 19.7682 32 18.9579 31.8618 18.2445C31.3821 15.7679 29.6979 13.6708 27.343 12.6177C26.6646 12.3143 25.856 12.1178 24.2388 11.7247L16 9.72227L16 17.5L32 21.3889L7.99997 27.2222L7.99997 35Z" fill="black" />
          </svg>
        </div>
      )}

      {/* No more posts message */}
      {!hasMore && posts.length > 0 && (
        <div className="text-center py-8 text-gray-500">
          You&apos;ve reached the end of the blog posts
        </div>
      )}
    </>
  )
}
