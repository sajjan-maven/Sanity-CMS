import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ServiceType } from '@/types/service';
import Heading from '@/components/ui/heading';
import Container from '@/components/global/container';
import AnimatedUnderline from '@/components/ui/animated-underline';
import { ServicesBlockType } from '@/types/page-builder/blocks/services';

export default function ServicesBlock(props: ServicesBlockType) {

  const { heading, services, background, topCornerRadius, paddingTop, paddingBottom } = props;

  return (
    <section 
      className={cn('px-4 xl:px-10', {
        'pattern-bg': background === 'pattern',
        'rounded-t-4xl border-t border-t-gray-200/60': topCornerRadius === 'rounded'
      })}
    >
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='space-y-10 border-x border-dashed'
      >
        <div className='flex items-center justify-between'>
          {heading && (
            <Heading tag="h2" size="xl" className='max-w-[40rem] text-balance leading-tight'>
              {heading}
            </Heading>
          )}
        </div>
        <ul className='grid md:grid-cols-3 gap-x-6 gap-y-10'>
          {services.map((service) => (
            <li key={service._id}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

function ServiceCard({ service }: {
  service: ServiceType
}) {

  const { title, slug, shortDescription, image } = service;

  return (
    <div aria-label={title} className='relative pb-8 group border-b border-dashed'>
      <Link href={`/services/${slug}`} className='relative space-y-6'>
        <div className='p-4 rounded-3xl border border-dashed backdrop-blur-md backdrop-opacity-50'>
          <Image
            src={image?.asset?.url}
            width={800}
            height={800}
            alt={image?.alt ?? ''}
            className='aspect-[3/2] rounded-2xl'
          />
        </div>
        <Heading tag="h2" size="md" className='text-balance'>
          {title}
        </Heading>
        <p className='md:text-balance text-neutral-500'>
          {shortDescription}
        </p>
      </Link>
      <AnimatedUnderline className='-translate-y-0.5' />
    </div>
  )
}