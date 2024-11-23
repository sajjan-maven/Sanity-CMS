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
          <Heading size="h2" className='text-balance col-span-7'>
            {heading}
          </Heading>
          <Button variant="default" buttonType="internal">
            Get Started
          </Button>
        </div>
        <ul className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
          {features.map((feature: FeatureItem) => (
            <li>
              <>
                {feature.pageReference ? (
                  <Link 
                    href={feature.pageReference?.slug} 
                    className='block px-10 py-16 space-y-4 rounded-xl border border-gray-200/40 hover:-translate-y-2 transition duration-300 bg-gray-50'
                  >
                    <Image
                      src={feature.icon.asset.url}
                      width={60}
                      height={60}
                      alt={`${feature.title}`}
                    />
                    <Heading size="h3" className='md:text-2xl'>
                      {feature.title}
                    </Heading>
                    <p className='text-pretty'>
                      {feature.description}
                    </p>
                  </Link>
                ): (
                  <div className='px-10 py-16 space-y-4 rounded-xl border border-gray-200/40 bg-gray-50'>
                    <Image
                      src={feature.icon.asset.url}
                      width={60}
                      height={60}
                      alt={`${feature.title}`}
                    />
                    <Heading size="h3" className='md:text-2xl'>
                      {feature.title}
                    </Heading>
                    <p className='text-pretty'>
                      {feature.description}
                    </p>
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