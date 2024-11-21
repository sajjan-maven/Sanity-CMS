import Container from '@/components/global/container';
import { HeaderBlockType } from '@/types/page-builder/blocks/header';

export default function HeaderBlock(props: HeaderBlockType) {

  const { heading } = props

  return (
    <section className='py-12'>
      <Container>
        Header Block
      </Container>
    </section>
  )
}
