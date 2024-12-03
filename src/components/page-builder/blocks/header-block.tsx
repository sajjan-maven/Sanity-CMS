import { cn } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import Container from '@/components/global/container';
import { HeaderBlockType } from '@/types/page-builder/blocks/header';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function HeaderBlock(props: HeaderBlockType) {

  const { heading, content, bottomCornerRadius } = props

  return (
    <section 
      className={cn('px-10 pattern-bg border-b', {
        'rounded-4xl': bottomCornerRadius === 'rounded'
      })}
    >
      <Container className='border-x border-dashed'>
        <div className='pt-52 pb-20 md:pb-36'>
          <Heading size="h1" className='text-balance leading-normal'>
            {heading}
          </Heading>
          <PortableTextEditor 
            data={content}
            classNames='mt-8 md:text-xl text-balance text-gray-600'
          />
        </div>
      </Container>
    </section>
  )
}
