import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { FeatureCardsBlockType, FeatureItem } from '@/types/page-builder/blocks/feature-cards';

export default function FeatureCardsBlock(props: FeatureCardsBlockType) {

  const { heading, features, paddingTop, paddingBottom } = props

  return (
    <section className='px-4 xl:px-10'>
      <Container 
        className='px-4 space-y-10 md:space-y-14 border-x border-dashed'
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
          <Heading tag="h2" size="xl" className='relative col-span-7 px-4 text-balance leading-normal border-y border-t-slate-100/60 border-b-slate-100/60 bg-white pattern-bg'>
            <span className='relative z-10'>
              {heading}
            </span>
            <EdgeBlur />
          </Heading>
          <Button variant="primary" buttonType="internal" className='hidden md:flex bg-black'>
            Get Started
          </Button>
        </div>
        <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {features?.map((feature: FeatureItem) => (
            <li key={feature._key}>
              <FeatureCard feature={feature} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function FeatureCard({ feature }: {
  feature: FeatureItem;
}) {
  return (
    <div className='border border-dashed rounded-3xl'>
      <div className='p-3'>
        <Image
          src={feature.image.asset.url}
          width={600}
          height={400}
          alt={feature.title ?? ''}
          className='rounded-2xl h-[280px] object-cover overflow-hidden'
        />
      </div>
      <div className='mt-5 px-6 md:px-8 pb-2'>
        <div className='space-y-6'>
          <Heading tag="h3" size="sm" className='relative py-2 font-semibold border-y border-y-gray-200/40 pattern-bg'>
            {feature.title}
          </Heading>
          <p className='text-pretty text-sm text-gray-500'>
            {feature.description}
          </p>
        </div>
      </div>
      <ul className='mt-4 space-y-3 border-t border-dashed'>
        {feature.items.map((item, index) => (
          <li 
            key={item} 
            className={cn('grid grid-cols-12 px-6 md:px-8 py-4 border-b border-dashed', {
              'border-none pb-6': index === feature.items.length  - 1
            })}
          >
            <CircleCheck className='col-span-1 h-4 w-4' />
            <span className='-mt-[3px] col-span-11 text-balance text-sm'>
              {item}
            </span>
          </li>
        ))}
      </ul>
      {feature?.button.showButton && (
        <div className='px-4 py-4 border-t border-dashed'>
          <Button 
            variant={feature?.button.buttonVariant}
            buttonType={feature?.button.buttonType}
            pageReference={feature?.button.buttonPageReference?.slug ?? ''}
            externalUrl={feature?.button.buttonExternalUrl ?? ''}
            className='h-12 w-full'
          >
            {feature.button.buttonText}
          </Button>
        </div>
      )}
    </div>
  )
}

function EdgeBlur() {
  return (
    <div className='absolute inset-0 flex items-center justify-between'>
      <div className='relative bg-gradient-to-r from-white to-transparent h-full w-[100px]'></div>
      <div className='bg-gradient-to-l from-white to-transparent h-full w-[100px]'></div>
    </div>
  )
}