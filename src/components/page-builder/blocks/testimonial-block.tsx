import Container from '@/components/global/container';
import { TestimonialBlockType } from '@/types/page-builder/blocks/testimonials';

export default function TestimonialBlock(props: TestimonialBlockType) {

  const { heading } = props

  return (
    <section className='py-12'>
      <Container>
        Testimonial Block
      </Container>
    </section>
  )
}
