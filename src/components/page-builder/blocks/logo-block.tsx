import Container from '@/components/global/container';
import { LogoBlockType } from '@/types/page-builder/blocks/logos';

export default function LogoBlock(props: LogoBlockType) {

  const { heading } = props

  return (
    <section className='py-12'>
      <Container>
        Logo Block
      </Container>
    </section>
  )
}
