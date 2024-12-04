import { Check } from 'lucide-react';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { FeaturesMinimalBlockType } from '@/types/page-builder/blocks/features-minimal';
import { cn } from '@/lib/utils';

export default function FeaturesMinimalBlock(props: FeaturesMinimalBlockType) {

  const { 
    heading, 
    features, 
    enableBorderTop,
    cornerRadiusTop,
    enableBorderBottom,
    cornerRadiusBottom,
    paddingTop, 
    paddingBottom 
  } = props

  return (
    <section 
      className={cn('xl:px-10', {
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
        <div className='grid grid-cols-12 gap-20'>
          <div className='col-span-12 xl:col-span-5 space-y-14'>
            <Heading tag="h2" size="xl" className='-ml-3 relative px-4 text-balance col-span-7 leading-normal border-y border-t-slate-100/60 border-b-slate-100/60 bg-white pattern-bg'>
              {heading}
            </Heading>
            <Button variant="tertiary" buttonType="internal">
              Get Started
            </Button>
          </div>
          <div className='col-span-12 xl:col-span-7'>
            <ul className='grid md:grid-cols-2 gap-y-3 gap-x-10'>
              {features.map((feature: string) => (
                <li className='pb-3.5 flex items-center gap-3.5 border-b border-b-slate-100/60'>
                  <Check size={20} />
                  <span>
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