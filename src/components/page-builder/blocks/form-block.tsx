"use client"
import Form from '@/components/shared/form';
import Heading from '@/components/ui/heading';
import Container from '@/components/global/container';
import { FormBlockType } from '@/types/page-builder/blocks/form';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function FormBlock(props: FormBlockType) {

  const { heading, content, formFields, paddingTop, paddingBottom } = props;

  return (
    <section className='px-10 pattern-bg'>
      <Container 
        className='border-x border-dashed'
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className='flex flex-col justify-center items-center'>
          <Heading tag="h2" size="xxl" className='text-balance text-center leading-normal'>
            {heading}
          </Heading>
          <PortableTextEditor 
            data={content}
            classNames='mt-8 md:text-xl text-balance text-center text-gray-600'
          />
          <Form formFields={formFields} />
        </div>
      </Container>
    </section>
  )
}