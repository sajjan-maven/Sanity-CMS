import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { FeaturesMinimalBlockType } from '@/types/page-builder/blocks/features-minimal';
import { Check } from 'lucide-react';

export default function FeaturesMinimalBlock(props: FeaturesMinimalBlockType) {

  const { heading, features } = props

  return (
    <section className='xl:px-10'>
      <Container className='pt-28 pb-8 border-x border-dashed space-y-10 md:space-y-14'>
        <div className='grid grid-cols-12 gap-20'>
          <div className='col-span-12 xl:col-span-5 space-y-14'>
            <Heading size="h2" className='-ml-3 relative px-4 text-balance col-span-7 leading-normal border-y border-t-slate-100/60 border-b-slate-100/60 bg-white pattern-bg'>
              {heading}
            </Heading>
            <Button variant="default" buttonType="internal" className='bg-black'>
              Get Started
            </Button>
          </div>
          <div className='col-span-12 xl:col-span-7'>
            <ul className='grid md:grid-cols-2 gap-3'>
              {features.map((feature: string) => (
                <li className='flex items-center gap-3.5'>
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