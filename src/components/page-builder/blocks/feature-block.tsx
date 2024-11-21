import Container from '@/components/global/container';
import Heading from '@/components/ui/heading';
import { FeatureBlockType } from '@/types/page-builder/blocks/features';

export default function FeatureBlock(props: FeatureBlockType) {

  const { heading } = props

  return (
    <section className='pb-24'>
      <Container>
        <Heading size="h2" className='text-balance col-span-7'>
          {heading}
        </Heading>
      </Container>
    </section>
  )
}
