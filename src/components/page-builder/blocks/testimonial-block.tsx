import Image from 'next/image';
import Container from '@/components/global/container';
import { TestimonialBlockType } from '@/types/page-builder/blocks/testimonials';

export default function TestimonialBlock(props: TestimonialBlockType) {

  const { 
    testimonial, 
    author, 
    position, 
    avatar, 
    company, 
    logo,
    paddingTop,
    paddingBottom
  } = props

  return (
    <section className='xl:px-10 pattern-bg border-y border-dashed rounded-3xl'>
      <Container 
        className='space-y-10'
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div>
          <div className='w-fit mx-auto px-2.5 rounded-full text-center text-sm tracking-tight text-white bg-black'>
            Testimonials
          </div>
          <h2 className='mt-6 py-2 text-center text-2xl font-semibold border-y w-fit mx-auto bg-gradient-to-r from-white/0 via-yellow-500/15 to-white/0'>
            Our Happy Customers.
          </h2>
        </div>
        <div className='mx-auto w-[44rem] p-12 space-y-20 border rounded-xl bg-white'>
          <h2 className='text-xl text-pretty'>
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
