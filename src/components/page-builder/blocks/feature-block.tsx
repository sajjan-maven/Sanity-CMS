import Link from 'next/link';
import Image from 'next/image';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { FeatureBlockType, FeatureItem } from '@/types/page-builder/blocks/features';

export default function FeatureBlock(props: FeatureBlockType) {

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
          <Button variant="default" buttonType="internal" className='bg-black'>
            Get Started
          </Button>
        </div>
        <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {features.map((feature: FeatureItem) => (
            <li>
              <>
                {feature.pageReference ? (
                  <Link 
                    href={feature.pageReference?.slug} 
                    className='block px-10 py-16 rounded-xl border border-gray-200/40 hover:-translate-y-2 transition duration-300 bg-gray-50'
                  >
                    <Image
                      src={feature.icon.asset.url}
                      width={60}
                      height={60}
                      alt={`${feature.title}`}
                      className='mb-12'
                    />
                    <div className='space-y-4'>
                      <Heading size="h3" className='md:text-2xl'>
                        {feature.title}
                      </Heading>
                      <p className='text-pretty'>
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                ): (
                  <div className='px-10 py-16 rounded-xl border border-gray-200/40 bg-gray-50'>
                    <Image
                      src={feature.icon.asset.url}
                      width={60}
                      height={60}
                      alt={`${feature.title}`}
                      className='mb-12'
                    />
                    <div className='space-y-4'>
                      <Heading size="h3" className='md:text-2xl'>
                        {feature.title}
                      </Heading>
                      <p className='text-pretty'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )}
              </>
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