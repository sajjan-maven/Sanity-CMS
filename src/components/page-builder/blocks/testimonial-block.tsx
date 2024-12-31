"use client"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Container from '@/components/global/container';
import { TestimonialType } from '@/types/testimonial';
import { TestimonialBlockType } from '@/types/page-builder/blocks/testimonials';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function TestimonialBlock(props: TestimonialBlockType) {

  const { heading, eyebrow, testimonials, paddingTop, paddingBottom } = props;

  return (
    <section className='pb-10 md:pb-0 xl:px-10 pattern-bg border-y border-dashed rounded-3xl'>
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='space-y-10 border-x border-dashed'
      >
        <div>
          <div className='w-fit mx-auto px-2 rounded-full text-center text-sm font-medium tracking-tight text-white bg-black'>
            {eyebrow}
          </div>
          <h2 className='mt-6 py-2 text-center text-xl md:text-2xl font-semibold border-y w-fit mx-auto bg-gradient-to-r from-white/0 via-yellow-500/15 to-white/0'>
            {heading}
          </h2>
        </div>
        {testimonials.length > 1 ? (
          <Carousel className="w-full max-w-[44rem] mx-auto">
            <CarouselContent>
              {testimonials?.map((testimonial: TestimonialType) => (
                <CarouselItem key={testimonial._id}>
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ): (
          <TestimonialCard 
            testimonial={testimonials[0]} 
            classNames='border border-gray-200/70 rounded-xl'
          />
        )}       
      </Container>
    </section>
  )
}

function TestimonialCard({ testimonial, classNames }: {
  testimonial: TestimonialType;
  classNames?: string;
}) {
  return (
    <div className={cn('h-full mx-auto md:w-[44rem] p-8 md:p-12 space-y-10 md:space-y-20 flex flex-col justify-between bg-white', classNames)}>
      <h2 className='text-lg md:text-xl text-pretty'>
        {testimonial?.quote}
      </h2>
      <div className='flex flex-col md:flex-row md:items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image
            src={testimonial?.avatar?.asset?.url}
            width={50}
            height={50}
            alt={testimonial?.name ?? ''}
            className='w-12 h-12 rounded-full'
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
            className='hidden md:block'
          />
        </div>
      </div>
    </div>
  )
}