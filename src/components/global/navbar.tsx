import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Container from './container';
import { SettingsType } from '@/types/settings';
import { NavigationSettingsType } from '@/types/navigation';

interface NavbarProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType['navbar']
}

export default function Navbar({ settings, navigationSettings }: NavbarProps) {

  const { siteTitle, logo } = settings
  const { navbarMenuItems: menuItems } = navigationSettings;

  return (
    <header className='py-6 border-b border-b-gray-100'>
      <Container className='flex items-center justify-between'>
        {!logo ? ( <span className='font-semibold tracking-tighter'>{siteTitle}</span> ): (
          <Image
            src={logo.asset.url}
            width={200}
            height={200}
            alt={`${siteTitle} Logo`}
          />
        )}
        <ul className='flex items-center gap-8'>
          {menuItems.map(({ _key, pageReference, title, isButton }) => (
            <li key={_key}>
              <Link 
                href={`/${pageReference.slug}`}
                className={cn('', {
                  'py-3 px-4 rounded-md text-white bg-blue-600': isButton
                })}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}