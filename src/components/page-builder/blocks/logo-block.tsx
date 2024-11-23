import { LogoBlockType } from '@/types/page-builder/blocks/logos';
import Image from 'next/image';

export default function LogoBlock(props: LogoBlockType) {

  const { heading, logos } = props
  
  const items = [...logos, ...logos]
  
  return (
    <div className='pt-8 pb-28'>
      <div className='text-center font-mono uppercase tracking-tight text-gray-500'>
        {heading}
      </div>
      <div className="py-10 relative overflow-clip">
        <ul className="flex items-center pl-[4.8rem] gap-[4.8rem] w-max animate-logo-marquee">
          {items.map((item) => (
            <li key={item._key}>
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
      <div className='relative bg-gradient-to-r from-white via-white/80 to-transparent h-full w-[100px]'></div>
      <div className='bg-gradient-to-l from-white via-white/8 to-transparent h-full w-[100px]'></div>
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