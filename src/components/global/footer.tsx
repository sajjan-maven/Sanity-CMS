import Link from 'next/link';
import Container from './container';
import Heading from '../ui/heading';
import SiteLogo from '../shared/site-logo';
import { SettingsType } from '@/types/settings';
import AnimatedUnderline from '../ui/animated-underline';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';

interface FooterProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType['footer']
}

export default function Footer({ settings, navigationSettings }: FooterProps) {

  const { siteTitle, copyright, logo } = settings;
  
  const { 
    footerColumns: columns, 
    footerLegalMenuItems: legalMenuItems 
  } = navigationSettings;

  return (
    <footer className='pt-20 border-t border-t-gray-200/60'>
      <Container>
        <div className='w-full flex items-start gap-60'>
          <div className='flex-none'>
            <SiteLogo siteTitle={siteTitle} logo={logo} location="footer" />
          </div>
          <FooterColumns columns={columns} />
        </div>
        <div className='flex items-center justify-between mt-20 py-6 border-t border-dashed text-xs'>
          <div>
            {copyright} - Made by
            <a href="" className='relative ml-1 font-semibold tracking-tight text-blue-600 group'>
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
    <ul className='flex-1 grid grid-cols-4 gap-8'>
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
                  className='relative group'
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