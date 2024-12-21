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
          className={cn('grid grid-cols-1 md:grid-cols-2 gap-6', {
            'md:grid-cols-3': columnsPerRow === '3',
            'md:grid-cols-4': columnsPerRow === '4',
          })}
        >
          {columns.map((column) => (
            <div 
              key={column._key} 
              className={cn('flex flex-col items-start justify-center gap-0', {
                'gap-2': column?.spacing === 'small',
                'gap-3': column?.spacing === 'medium',
                'gap-4': column?.spacing === 'large',
                'items-center': column?.alignment === 'center',
                'items-end': column?.alignment === 'right',
              })}
            >
              {column.items.map((item) => (
                <>
                  {item._type === 'heading' && item?.headingText && (
                    <Heading tag="h3" size="md" key={item._key}>
                      {item?.headingText}
                    </Heading>
                  )}
                  {item._type === 'spacer' && item?.spacing && (
                    <div 
                      key={item._key}
                      className={cn('h-0', {
                        'h-4': item?.spacing === 'small',
                        'h-6': item?.spacing === 'medium',
                        'h-8': item?.spacing === 'large',
                      })}
                    />
                  )}
                  {item._type === 'richText' && item?.richTextContent && (
                    <PortableTextEditor 
                      key={item._key}
                      data={item?.richTextContent} 
                      classNames='text-balance'
                    />
                  )}
                  {item._type === 'singleImage' && item?.image?.asset?.url && (
                    <div 
                      key={item._key}
                      className={cn({
                        'p-3 border border-dashed rounded-3xl': item?.image?.enableBorder,
                        'border-solid': item?.image?.borderStyle === 'solid',
                      })}
                    >
                      <Image
                        src={item?.image?.asset?.url ?? ''}
                        width={800}
                        height={800}
                        alt={item?.image?.alt ?? ''}
                        className={cn('object-cover aspect-square', {
                          'rounded-2xl': item?.image?.cornerRadius === 'rounded',
                          'aspect-[3/2]': item?.image?.aspectRatio === 'rectangle',
                          'aspect-[3/4]': item?.image?.aspectRatio === 'portrait',
                        })}
                      />
                    </div>
                  )}
                  {item._type === 'button' && item?.buttonText && (
                    <Button 
                      key={item._key}
                      size="sm"
                      variant={item?.buttonVariant}
                      buttonType={item?.buttonType}
                    >
                      {item?.buttonText}
                    </Button>
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