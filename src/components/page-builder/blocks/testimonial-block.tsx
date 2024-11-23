import Image from 'next/image';
import Container from '@/components/global/container';
import { TestimonialBlockType } from '@/types/page-builder/blocks/testimonials';

export default function TestimonialBlock(props: TestimonialBlockType) {

  const { testimonial, author, position, avatar, company, logo } = props

  return (
    <section className='xl:px-10 pattern-bg border-y border-dashed rounded-3xl'>
      <Container className='py-28'>
        <div className='mx-auto w-[42rem] p-12 space-y-20 border rounded-xl bg-white'>
          <h2 className='text-2xl text-pretty'>
            {testimonial}
          </h2>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Image
                src={avatar.asset.url}
                width={50}
                height={50}
                alt={author}
                className='rounded-full'
              />
              <div className='-space-y-0.5'>
                <h3 className='font-medium'>
                  {author}
                </h3>
                <p className='text-sm text-gray-400'>
                  {position}
                </p>
              </div>
            </div>
            <div>
              <Image
                src={logo.asset.url}
                width={80}
                height={40}
                alt={`${company} Logo`}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
