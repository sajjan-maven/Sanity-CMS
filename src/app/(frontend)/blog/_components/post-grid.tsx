import React from 'react'
import PostCard from './post-card';
import { PostType } from '@/types/post';

export default function PostGrid({ posts }: {
  posts: PostType[];
}) {
  return (
    <ul className='grid grid-cols-3 gap-8'>
      {posts.map((post) => (
        <li key={post._id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  )
}