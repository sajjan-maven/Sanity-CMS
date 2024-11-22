import Image from 'next/image';
import { cn } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { HeroBlockType } from '@/types/page-builder/blocks/hero';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function HeroBlock(props: HeroBlockType) {

  const { heading, content, image } = props

  return (
    <section className='pt-48 pb-20 md:pb-28'>
      <Container className='space-y-14 xl:space-y-32'>
        <div className='xl:px-10 grid grid-cols-12 gap-6'>
          <Heading size="h1" className='text-balance col-span-12 xl:col-span-7'>
            {heading}
          </Heading>
          <div className='col-span-12 xl:col-span-5'>
            <PortableTextEditor 
              data={content}
              classNames='mt-3 md:text-xl text-balance text-gray-600'
            />
            <div className='flex items-center gap-3 mt-10'>
              <Button variant="default" buttonType="internal">
                View Demo
              </Button>
              <Button variant="underline" buttonType="external">
                Star on GitHub
              </Button>
            </div>
          </div>
        </div>
        {image && (
          <Image
            src={image.asset.url}
            width={1400}
            height={800}
            alt={image.alt}
            className={cn('rounded-xl md:rounded-3xl', {
              'rounded-none': image.cornerRadius === 'straight'
            })}
          />
        )}
      </Container>
    </section>
  )
}
