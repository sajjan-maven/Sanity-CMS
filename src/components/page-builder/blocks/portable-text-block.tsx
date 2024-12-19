"use client"
import Container from '@/components/global/container';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';
import { PortableTextBlockType } from '@/types/page-builder/blocks/portable-text';

export default function PortableTextBlock(props: PortableTextBlockType) {

  const { content, paddingTop, paddingBottom } = props

  return (
    <section className='px-10'>
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='border-x border-dashed'
      >
        <div className='max-w-[40rem] mx-auto'>
          <PortableTextEditor 
            data={content}
            classNames='text-balance text-gray-600'
          />
        </div>
      </Container>
    </section>
  )
}
