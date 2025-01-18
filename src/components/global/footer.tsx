import Link from 'next/link';
import Container from './container';
import Heading from '../ui/heading';
import SiteLogo from '../shared/site-logo';
import { SettingsType } from '@/types/settings';
import AnimatedUnderline from '../ui/animated-underline';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';

interface FooterProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType;
}

export default function Footer({ settings, navigationSettings }: FooterProps) {

  const { siteTitle, copyright, logo } = settings;
  
  const { 
    footerColumns: columns, 
    footerLegalMenuItems: legalMenuItems 
  } = navigationSettings['footer'];

  return (
    <footer className='pt-14 md:pt-24 border-t border-t-gray-200/60'>
      <Container>
        <div className='w-full flex flex-col md:flex-row items-start gap-0 md:gap-28 xl:gap-60'>
          <div className='flex-none py-4 md:py-0 border-y border-dashed md:border-none'>
            <SiteLogo siteTitle={siteTitle} logo={logo} location="footer" />
          </div>
          <FooterColumns columns={columns} />
        </div>
        <div className='mt-10 md:mt-20 mb-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-1 md:gap-0 border-y border-dashed text-xs'>
          <div>
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
    <ul className='pt-10 md:pt-0 flex-1 grid grid-cols-2 md:grid-cols-4 gap-8'>
      {columns.map((column) => (
        <li key={column._key} className='w-full space-y-3'>
          <Heading tag="h2" size="xs" className='font-semibold'>
            {column.title}
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
    <ul className='flex items-center gap-1'>
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