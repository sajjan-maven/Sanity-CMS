import Image from 'next/image';
import { LogoBlockType } from '@/types/page-builder/blocks/logos';
import Container from '@/components/global/container';
import { cn } from '@/lib/utils';

export default function LogoBlock(props: LogoBlockType) {

  const { heading, logos } = props;
  
  const items = [...logos, ...logos];
  
  return (
    <section className='border-b'>
      <Container className='px-0'>
        <div className='py-10 md:py-20 border-x border-x-slate-200/60 border-dashed bg-slate-50'>
          <div className='relative w-fit mx-auto py-2 px-10 mt-5 bg-white pattern-bg border-y border-y-gray-100'>
            <h2 className='text-center font-geistMono text-xs md:text-sm uppercase font-medium text-gray-500'> 
              {heading}
            </h2>
            <EdgeBlur />
          </div>
          <div className="mt-10 md:mt-16 mb-6 md:mb-8 relative overflow-clip">
            <ul className="flex items-center pl-[4.8rem] gap-16 md:gap-[10rem] w-max animate-logo-marquee">
              {items.map((item, index) => (
                <li key={item._key + index}>
                  <Image
                    width={200}
                    height={100}
                    src={item.image.asset.url}
                    alt={`${item.title} Logo` ?? ''}
                    className={cn('w-20 md:w-32 object-contain', {
                      'w-36 md:w-56': item.size === 'large'
                    })}
                  />  
                </li>
              ))}
            </ul>
            <EdgeBlur />
          </div>
        </div>
      </Container>
    </section>
  )
}

function EdgeBlur() {
  return (
    <div className='absolute inset-0 flex items-center justify-between'>
      <div className='relative bg-gradient-to-r from-slate-50 via-slate/80 to-transparent h-full w-[100px]'></div>
      <div className='bg-gradient-to-l from-slate-50 via-slate/80 to-transparent h-full w-[100px]'></div>
    </div>
  )
}