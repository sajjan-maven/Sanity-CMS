import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';
import { CallToActionBlockType } from '@/types/page-builder/blocks/call-to-action';

export default function CallToActionBlock(props: CallToActionBlockType) {

  const { heading, content, paddingTop, paddingBottom } = props

  return (
    <section className='xl:px-10 pattern-bg--2 border-t border-t-gray-200/60'>
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='border-x border-dashed'
      >
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div>
            <Heading tag="h2" size="xl" className='max-w-[40rem] text-balance leading-tight'>
              {heading}
            </Heading>
            <PortableTextEditor 
              data={content}
              classNames='mt-6 md:mt-8 text-balance text-gray-600'
            />
          </div>
          <div>
            <div className='flex items-center gap-3 mt-8 md:mt-10'>
              <Button variant="primary" buttonType="internal">
                View Demo
              </Button>
              <Button variant="outline" buttonType="internal">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}