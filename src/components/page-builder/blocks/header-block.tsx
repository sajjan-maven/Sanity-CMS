import { cn } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import Container from '@/components/global/container';
import { HeaderBlockType } from '@/types/page-builder/blocks/header';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function HeaderBlock(props: HeaderBlockType) {

  const { heading, content, bottomCornerRadius } = props;

  return (
    <section 
      className={cn('px-4 md:px-10 pattern-bg border-b', {
        'rounded-4xl': bottomCornerRadius === 'rounded'
      })}
    >
      <Container className='border-x border-dashed'>
        <div className='pt-36 md:pt-52 pb-20 md:pb-36'>
          <Heading tag="h1" size="xxl" className='text-balance leading-normal'>
            {heading}
          </Heading>
          <PortableTextEditor 
            data={content}
            classNames='mt-6 md:mt-8 md:text-xl text-balance text-gray-600'
          />
        </div>
      </Container>
    </section>
  )
}
