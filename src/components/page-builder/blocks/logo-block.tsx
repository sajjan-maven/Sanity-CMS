import Image from 'next/image';
import { LogoBlockType } from '@/types/page-builder/blocks/logos';

export default function LogoBlock(props: LogoBlockType) {

  const { heading, logos } = props
  
  const items = [...logos, ...logos]
  
  return (
    <div className='py-20 rounded-3xl border-y border-y-slate-200/60 bg-slate-50'>
      <div className='relative w-fit mx-auto py-2 px-10 mt-5 mb-10 border-y border-t-slate-200/60 border-b-slate-200/40 bg-white pattern-bg'>
        <span className=' text-center font-mono text-sm uppercase font-medium text-gray-500'> 
          {heading}
        </span>
        <EdgeBlur />
      </div>
      <div className="relative overflow-clip">
        <ul className="flex items-center pl-[4.8rem] gap-[4.8rem] w-max animate-logo-marquee">
          {items.map((item) => (
            <li key={item._key} className=''>
              <Image
                width={200}
                height={100}
                src={item.image.asset.url}
                alt={`${item.title} Logo`}
              />  
            </li>
          ))}
        </ul>
        <EdgeBlur />
      </div>
    </div>
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