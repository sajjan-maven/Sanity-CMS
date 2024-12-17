import Image from 'next/image';
import Container from '@/components/global/container';
import { TestimonialBlockType } from '@/types/page-builder/blocks/testimonials';

export default function TestimonialBlock(props: TestimonialBlockType) {

  const { heading, eyebrow, testimonial, paddingTop, paddingBottom } = props

  return (
    <section className='xl:px-10 pattern-bg border-y border-dashed rounded-3xl'>
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='space-y-10 border-x border-dashed'
      >
        <div>
          <div className='w-fit mx-auto px-2 rounded-full text-center text-sm font-medium tracking-tight text-white bg-black'>
            {eyebrow}
          </div>
          <h2 className='mt-6 py-2 text-center text-2xl font-semibold border-y w-fit mx-auto bg-gradient-to-r from-white/0 via-yellow-500/15 to-white/0'>
            {heading}
          </h2>
        </div>
        <div className='mx-auto w-[44rem] p-12 space-y-20 border border-gray-200/70 rounded-xl bg-white'>
          <h2 className='text-xl text-pretty'>
            {testimonial?.quote}
          </h2>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Image
                src={testimonial?.avatar?.asset?.url}
                width={50}
                height={50}
                alt={testimonial?.name ?? ''}
                className='rounded-full'
              />
              <div className='-space-y-0.5'>
                <h3 className='font-medium'>
                  {testimonial?.name}
                </h3>
                <p className='text-sm text-gray-400'>
                  {testimonial?.jobTitle}
                </p>
              </div>
            </div>
            <div>
              <Image
                src={testimonial?.logo?.asset?.url}
                width={80}
                height={40}
                alt={`${testimonial?.company} Logo` ?? ''}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
