import Link from 'next/link';
import Container from './container';
import Heading from '../ui/heading';
import SiteLogo from '../shared/site-logo';
import { SettingsType } from '@/types/settings';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';

interface FooterProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType['footer']
}

export default function Footer({ settings, navigationSettings }: FooterProps) {

  const { siteTitle, copyright, logo } = settings;
  const { footerColumns: columns } = navigationSettings;

  return (
    <footer className='pt-20 border-t'>
      <Container>
        <div className='w-full flex items-start gap-60'>
          <div className='flex-none'>
            <SiteLogo siteTitle={siteTitle} logo={logo} location="footer" />
          </div>
          <FooterColumns columns={columns} />
        </div>
        <div className='mt-20 py-6 border-t border-dashed text-sm'>
          {copyright} - Made by <a href="" className='font-bold tracking-tight'>James Rea.</a>
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
        <li key={column._key} className='w-full space-y-4'>
          <Heading size="h6" className='font-semibold'>
            {column.title}
          </Heading>
          <ul className='space-y-1.5'>
            {column.menuItems.map((item) => (
              <li key={item._key}>
                <Link 
                  href={`/${item.pageReference.slug}`}
                  className='hover:underline underline-offset-8'
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}