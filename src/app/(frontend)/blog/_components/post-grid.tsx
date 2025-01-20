import React from 'react';
import PostCard from './post-card';
import { PostType } from '@/types/post';

export default function PostGrid({ posts }: {
  posts: PostType[];
}) {
  return (
    <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
      {posts.map((post) => (
        <li key={post._id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}