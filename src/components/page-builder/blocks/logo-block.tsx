import { LogoBlockType } from '@/types/page-builder/blocks/logos';
import Image from 'next/image';

export default function LogoBlock(props: LogoBlockType) {

  const { heading, logos } = props
  
  const items = [...logos, ...logos]
  
  return (
    <div className='py-20 border-y border-y-slate-200/60 bg-slate-50 rounded-3xl'>
      <div className='mt-5 mb-10 text-center font-mono uppercase font-medium text-gray-500'>
        {heading}
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

const companies = [
  { id: '1' },
  { id: '2' },
  { id: '3' },
  { id: '3' },
  { id: '3' },
  { id: '3' },
]