import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Heading from '@/components/ui/heading';
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
    paddingTop, 
    paddingBottom 
  } = props;

  return (
    <section 
      className={cn('px-4 xl:px-10', {
        'border-t': enableBorderTop,
        'rounded-t-4xl': cornerRadiusTop,
        'border-b': enableBorderBottom,
        'rounded-b-4xl': cornerRadiusBottom
      })}
    >
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='border-x border-dashed space-y-10 md:space-y-14'
      >
        <div className='grid grid-cols-12 gap-y-12 md:gap-x-20'>
          <div className='col-span-12 md:col-span-5 max-w-[400px] md:max-w-full space-y-10 md:space-y-14'>
            <Heading tag="h2" size="xl" className='-ml-3 relative px-4 text-balance leading-normal border-y border-t-slate-100/60 border-b-slate-100/60 bg-white pattern-bg'>
              {heading}
            </Heading>
            {buttons && buttons.length > 0 && (
              <ButtonRenderer buttons={buttons} />  
            )}
          </div>
          <div className='col-span-12 xl:col-span-7'>
            <ul className='grid md:grid-cols-2 gap-y-3 md:gap-x-10'>
              {features.map((feature: string) => (
                <li key={feature} className='pb-3.5 flex items-center gap-3.5 border-b border-dashed border-b-slate-200/80'>
                  <Check size={20} />
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