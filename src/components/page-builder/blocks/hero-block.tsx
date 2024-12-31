import Image from 'next/image';
import { cn } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import BackButton from '@/components/ui/back-button';
import Container from '@/components/global/container';
import { HeroBlockType } from '@/types/page-builder/blocks/hero';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function HeroBlock(props: HeroBlockType) {

  const { heading, content, mediaType, showBackButton, bottomCornerRadius, image } = props;

  return (
    <section 
      className={cn('px-4 md:px-10 pattern-bg border-b border-b-gray-200/60', {
        'rounded-4xl': bottomCornerRadius === 'rounded'
      })}
    >
      <Container 
        className={cn('space-y-14 xl:space-y-0 border-x border-dashed', {
          'pb-14': mediaType === 'image'
        })}
      >
        <div 
          className={cn('pt-40 md:pt-52 md:pb-36 grid grid-cols-12 gap-3 md:gap-14', {
            'pt-56': showBackButton,
          })}
        >
          <div 
            className={cn('col-span-12 xl:col-span-7', {
              '-mt-12 space-y-8': showBackButton
            })}
          >
            {showBackButton && <BackButton />}
            <Heading size="xxxl" tag="h1" className='md:max-w-[40rem] text-balance'>
              {heading}
            </Heading>
          </div>
          <div className='col-span-12 xl:col-span-5'>
            <PortableTextEditor 
              data={content}
              classNames='mt-3 md:text-lg md:text-balance text-gray-600'
            />
            <div className='mt-9 md:mt-10 flex items-center gap-3'>
              <Button variant="primary" buttonType="internal">
                View Demo
              </Button>
              <Button variant="outline" buttonType="external">
                Star on GitHub
              </Button>
            </div>
          </div>
        </div>
        {mediaType === 'image' && image && (
          <div className='p-4 md:p-6 rounded-3xl md:rounded-4xl border border-dashed'>
            <Image
              src={image.asset.url}
              width={1400}
              height={800}
              alt={image.alt ?? ''}
              className={cn('object-cover rounded-2xl md:rounded-3xl', {
                'rounded-none': image.cornerRadius === 'straight',
                'max-h-[30rem]': image.height === 'short'
              })}
            />
          </div>
        )}
      </Container>
    </section>
  )
}
