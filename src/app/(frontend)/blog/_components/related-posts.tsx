import PostGrid from './post-grid';
import { Button } from '@/components/ui/button';
import Heading from '@/components/shared/heading';
import { AllPostsQueryResult } from '../../../../../sanity.types';

interface RelatedPostsProps {
  posts: AllPostsQueryResult;
  classNames?: string;
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <section className='mt-12'>
      <div className='py-4 flex items-center justify-between gap-6 border-t border-dashed'>
        <Heading tag="h2" size="xl">
          Related Posts
        </Heading>
        <Button variant="tertiary" size="default" buttonType="internal">
          View All Posts
        </Button>
      </div>
      <PostGrid posts={posts} />
    </section>
  )
}