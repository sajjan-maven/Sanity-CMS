import PostGrid from './post-grid';
import { PostType } from '@/types/post';
import Heading from '@/components/ui/heading';

export default function RelatedPosts({ posts }: {
  posts: PostType[]
}) {
  return (
    <section className='mt-24 pt-16 pb-24 space-y-8 border-y border-dashed'>
      <div className='py-4 border-y border-dashed'>
        <Heading tag="h2" size="xl">
          Related Posts
        </Heading>

      </div>
      <PostGrid posts={posts} />
    </section>
  )
}
