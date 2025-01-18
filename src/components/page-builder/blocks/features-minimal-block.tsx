import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import ButtonRenderer from '@/components/shared/button-renderer';
import { FeaturesMinimalBlockType } from '@/types/page-builder/blocks/features-minimal';

export default function FeaturesMinimalBlock(props: FeaturesMinimalBlockType) {

  const { 
    heading, 
    buttons,
    features, 
    enableBorderTop,
    cornerRadiusTop,
    enableBorderBottom,
    cornerRadiusBottom,
    anchorId,
    paddingTop, 
    paddingBottom 
  } = props;

  return (
    <section
      {...(anchorId ? { id: anchorId } : {})} 
      className={cn('px-4 xl:px-10 bg-gray-50', {
        'border-t': enableBorderTop,
        'border-b': enableBorderBottom,
        'rounded-t-4xl': cornerRadiusTop === 'rounded',
        'rounded-b-4xl': cornerRadiusBottom === 'rounded'
      })}
    >
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='border-x border-dashed space-y-10 md:space-y-14'
      >
        <div className='grid grid-cols-12 gap-y-12 md:gap-y-20 xl:gap-x-20'>
          <div className='col-span-12 xl:col-span-5 max-w-[400px] md:max-w-full space-y-10 md:space-y-10'>
            <div>
              <Heading tag="h2" size="xl" className=' max-w-[420px] relative pr-2.5 py-3 text-balance leading-normal border-y border-dashed border-t-gray-200 border-b-gray-200 bg-gray-50'>
                {heading}
              </Heading>
              <p className='max-w-[400px] mt-8 text-balance text-gray-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lectus non metus.
              </p>
            </div>
            {buttons && buttons.length > 0 && (
              <ButtonRenderer buttons={buttons} />  
            )}
          </div>
          <div className='col-span-12 xl:col-span-7'>
            <ul className='grid md:grid-cols-2 gap-y-3 md:gap-x-10'>
              {features.map((feature: string) => (
                <li key={feature} className='pb-3.5 flex items-center gap-3.5 border-b border-dashed border-b-slate-200/80'>
                  <Check size={18} />
                  <span className='text-sm md:text-base'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}