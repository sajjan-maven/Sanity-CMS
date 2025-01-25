import Link from 'next/link';
import Container from './container';
import Heading from '../shared/heading';
import SiteLogo from '../shared/site-logo';
import { SettingsType } from '@/types/settings';
import AnimatedUnderline from '../shared/animated-underline';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';

interface FooterProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType;
}

export default function Footer({ settings, navigationSettings }: FooterProps) {

  const { siteTitle, copyright, siteLogo } = settings;
  
  const { 
    footerColumns: columns, 
    footerLegalMenuItems: legalMenuItems 
  } = navigationSettings['footer'];

  return (
    <footer className='px-4 xl:px-10 border-t border-t-gray-200/60'>
      <Container className='pt-14 md:pt-24 border-x border-dashed'>
        <div className='w-full flex flex-col md:flex-row items-start gap-0 md:gap-28 xl:gap-60'>
          <div className='flex-none py-4 md:py-0 border-y border-dashed md:border-none'>
            <SiteLogo siteTitle={siteTitle} siteLogo={siteLogo} location="footer" />
          </div>
          <FooterColumns columns={columns} />
        </div>
        <div className='mt-10 md:mt-20 mb-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0 border-y border-dashed text-xs'>
          <div className='z-20 relative'>
            {copyright} - Made by
            <a 
              href="https://jamesrea.co" 
              rel="noopener noreferrer" target="_blank"
              className='relative ml-1 font-semibold tracking-tight text-blue-600 group'
            >
              <span>James Rea.</span> 
              <AnimatedUnderline className='bg-blue-600'/>
            </a>
          </div>
          <LegalMenuItems legalMenuItems={legalMenuItems} />
          <EdgeBlur />
        </div>
      </Container>
    </footer>
  )
}

function FooterColumns({ columns }: {
  columns: {
    _key: string;
    title: string;
    menuItems: MenuItemType[]
  }[]
}) {
  return (
    <ul className='pt-10 md:pt-0 flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2 border-y border-dashed pattern-bg--2'>
      {columns.map((column) => (
        <li key={column._key} className='md:py-10 px-10 w-full space-y-7 border-x border-dashed bg-gray-50'>
          <Heading tag="h2" size="xs" className='relative py-2.5 font-semibold border-y border-dashed pattern-bg--2'>
            <span className='z-20 relative'>
              {column.title}
            </span>
            <EdgeBlur />
          </Heading>
          <ul className='space-y-2'>
            {column.menuItems.map((item) => (
              <li key={item._key}>
                <Link 
                  href={`/${item.pageReference.slug}`}
                  className='relative group text-sm md:text-base'
                >
                  {item.title}
                  <AnimatedUnderline />
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

function LegalMenuItems({ legalMenuItems }: {
  legalMenuItems: MenuItemType[]
}) {
  return (
    <ul className='z-20 relative flex items-center gap-1'>
      {legalMenuItems.map((item, index) => (
        <li key={item._key} className='text-xs font-medium'>
          <Link 
            href={`/${item.pageReference.slug}`}
            className='relative group'
          >
            <span>{item.title}</span>
            <AnimatedUnderline />
          </Link>
          {index !== legalMenuItems.length - 1 && (
            <span className='ml-1'>/</span>
          )}
        </li>
      ))}
    </ul>
  )
}

function EdgeBlur() {
  return (
    <div className='absolute inset-0 flex items-center justify-between'>
      <div className='relative bg-gradient-to-r from-gray-50 to-transparent h-full w-[100px]'></div>
      <div className='bg-gradient-to-l from-gray-50 to-transparent h-full w-[100px]'></div>
    </div>
  )
}