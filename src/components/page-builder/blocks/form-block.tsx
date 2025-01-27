"use client"
import Form from '@/components/shared/form';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import { FormBlockType } from '@/types/page-builder/blocks/form';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function FormBlock(props: FormBlockType) {

  const { heading, content, form, anchorId } = props;

  return (
    <section 
      {...(anchorId ? { id: anchorId } : {})} 
      className='px-4 xl:px-10 pattern-bg'
    >
      <Container className='py-16 md:py-28 border-x border-dashed'>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-6'>
          {heading && (
            <Heading tag="h2" size="xl" className='text-balance text-center leading-normal'>
              {heading}
            </Heading>
          )}
          {content && (
            <PortableTextEditor 
              data={content}
              classNames='max-w-[320px] mb-4 md:text-xl text-balance text-center text-gray-600'
            />
          )}
          <Form form={form} />
        </div>
      </Container>
    </section>
  )
}