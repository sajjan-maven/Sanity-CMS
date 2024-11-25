import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { FeatureCardsBlockType, FeatureItem } from '@/types/page-builder/blocks/feature-cards';

export default function FeatureCardsBlock(props: FeatureCardsBlockType) {

  const { heading, features } = props

  return (
    <section className='xl:px-10'>
      <Container className='py-28 border-x border-dashed space-y-10 md:space-y-14'>
        <div className='flex items-center justify-between'>
          <Heading size="h2" className='relative px-4 text-balance col-span-7 leading-normal border-y border-t-slate-100/60 border-b-slate-100/60 bg-white pattern-bg'>
            <span className='relative z-10'>
              {heading}
            </span>
              <EdgeBlur />
          </Heading>
          <Button variant="primary" buttonType="internal" className='bg-black'>
            Get Started
          </Button>
        </div>
        <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {features?.map((feature: FeatureItem) => (
            <li key={feature._key} className='border rounded-2xl'>
              <div className='p-2'>
                <Image
                  src={feature.image.asset.url}
                  width={600}
                  height={400}
                  alt={feature.title}
                />
              </div>
              <div className='px-8 pb-2'>
                <div className='space-y-2'>
                  <h2 className='text-xl font-medium'>
                    {feature.title}
                  </h2>
                  <p className='text-balance text-gray-500'>
                    {feature.description}
                  </p>
                </div>
              </div>
              <ul className='mt-4 space-y-3 border-t border-dashed'>
                {feature.items.map((item, index) => (
                  <li 
                    key={item} 
                    className={cn('grid grid-cols-12 px-8 py-4 border-b border-dashed', {
                      'border-none pb-6': index === feature.items.length  - 1
                    })}
                  >
                    <CircleCheck className='col-span-1 h-4 w-4' />
                    <span className='-mt-[3px] col-span-11 text-balance'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className='px-4 py-4 border-t border-dashed'>
                <Button 
                  variant="tertiary" 
                  buttonType="internal" 
                  className='h-12 w-full'
                >
                  Get Started
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
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