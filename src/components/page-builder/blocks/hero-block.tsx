import Container from '@/components/global/container';
import { HeroBlockType } from '@/types/page-builder/blocks/hero';

export default function HeroBlock(props: HeroBlockType) {

  const { heading } = props

  return (
    <section className='py-12'>
      <Container>
        Hero Block
      </Container>
    </section>
  )
}
