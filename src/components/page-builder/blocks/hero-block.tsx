import Image from 'next/image';
import { cn } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import Container from '@/components/global/container';
import { HeroBlockType } from '@/types/page-builder/blocks/hero';
import { PortableText } from 'next-sanity';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function HeroBlock(props: HeroBlockType) {

  const { heading, content, image } = props

  return (
    <section className='pt-44 pb-24'>
      <Container className='space-y-32'>
        <div className='grid grid-cols-12'>
          <Heading size="h1" className='text-balance col-span-7'>
            {heading}
          </Heading>
          <div className='col-span-5'>
            <PortableTextEditor 
              data={content}
              classNames='mt-3 text-xl text-gray-600'
            />
          </div>
        </div>
        {image && (
          <Image
            src={image.asset.url}
            width={1400}
            height={800}
            alt={image.alt}
            className={cn('rounded-3xl', {
              'rounded-none': image.cornerRadius === 'straight'
            })}
          />
        )}
      </Container>
    </section>
  )
}
