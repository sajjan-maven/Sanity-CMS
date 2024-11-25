"use client"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import { Button } from '@/components/ui/button';
import Container from '@/components/global/container';
import { FreeformBlockType } from '@/types/page-builder/blocks/freeform';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';

export default function FreeformBlock(props: FreeformBlockType) {

  const { columnsPerRow, columns } = props

  return (
    <section className='px-10'>
      <Container className='py-28 border-x border-dashed'>
        <div 
          className={cn('grid grid-cols-1 md:grid-cols-2 gap-20', {
            'md:grid-cols-3': columnsPerRow === '3',
            'md:grid-cols-4': columnsPerRow === '4',
          })}
        >
          {columns.map((column) => (
            <div key={column._key} className='space-y-6'>
              {column.items.map((item) => (
                <>
                  {item._type === 'heading' && (
                    <Heading size={item.headingSize}>
                      {item.headingText}
                    </Heading>
                  )}
                  {item._type === 'richText' && (
                    <PortableTextEditor 
                      data={item.richTextContent} 
                      classNames=''
                    />
                  )}
                  {item._type === 'singleImage' && (
                    <div className='p-3 border border-dashed rounded-3xl'>
                      <Image
                        src={item.image.asset.url}
                        width={800}
                        height={800}
                        alt={item.image.alt}
                        className={cn('object-cover aspect-square', {
                          'rounded-2xl': item.image.cornerRadius === 'rounded',
                          'aspect-[3/2]': item.image.aspectRatio === 'rectangle',
                          'aspect-[3/4]': item.image.aspectRatio === 'portrait'  
                        })}
                      />
                    </div>
                  )}
                  {item._type === 'button' && (
                    <div className='pt-2.5'>
                      <Button 
                        variant={item.buttonVariant}
                        buttonType={item.buttonType}
                        size="sm"
                      >
                        {item.buttonText}
                      </Button>
                    </div>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}