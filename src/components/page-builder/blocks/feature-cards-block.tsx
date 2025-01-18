import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import ButtonRenderer from '@/components/shared/button-renderer';
import { FeatureCardsBlockType, FeatureItem } from '@/types/page-builder/blocks/feature-cards';

export default function FeatureCardsBlock(props: FeatureCardsBlockType) {

  const { heading, buttons, features, anchorId, paddingTop, paddingBottom } = props;

  return (
    <section 
      {...(anchorId ? { id: anchorId } : {})}
      className='px-4 xl:px-10'
    >
      <Container 
        className='px-4 space-y-8 md:space-y-6 border-x border-dashed'
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className='max-w-[60rem] mx-auto py-2 md:py-4 flex flex-col md:flex-row gap-3 md:gap-6 items-center justify-between border-y border-dashed'>
          <Heading tag="h2" size="xl" className='relative col-span-7 md:px-4 py-1.5 text-balance leading-normal border-y border-t-slate-100/60 border-b-slate-100/60 bg-white pattern-bg'>
            <span className='relative z-10'>
              {heading}
            </span>
            <EdgeBlur />
          </Heading>
          {buttons && buttons.length > 0 && (
            <ButtonRenderer classNames='hidden md:flex' buttons={buttons} />  
          )}
        </div>
        <ul className='max-w-[60rem] mx-auto grid md:grid-cols-2 gap-6'>
          {features?.map((feature: FeatureItem) => (
            <li key={feature._key} className='col-span-2 md:col-span-1'>
              <FeatureCard feature={feature} />
            </li>
          ))}
          <div className='col-span-2 w-full p-8 flex flex-col md:flex-row gap-8 border rounded-3xl pattern-bg--2'>
            <div className="space-y-5 md:space-y-3">
              <div className="font-medium text-xl text-balance">
                Want to take SiteEngine for a spin?
              </div>
              <p className="text-balance text-gray-500">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
              </p>
            </div>
            <div className="flex items-center md:justify-center gap-2.5">
              <Button variant="outline" buttonType="internal" className="decoration-transparent">
                Learn More
              </Button>
              <Button variant="primary" buttonType="internal" className="decoration-transparent">
                View Demo
              </Button>
            </div>
          </div>
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
          <p className='text-balance text-sm text-gray-500'>
            {feature.description}
          </p>
        </div>
      </div>
      <ul className='mt-4 space-y-3 border-t border-dashed'>
        {feature.items.map((item, index) => (
          <li 
            key={item} 
            className={cn('flex items-center gap-2.5 px-6 md:px-8 py-4 border-b border-dashed', {
              'border-none pb-6': index === feature.items.length  - 1
            })}
          >
            <CircleCheck className='h-4 w-4 text-green-600' />
            <span className='text-balance text-sm'>
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