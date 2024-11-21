import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import Container from './container';
import { Button } from '../ui/button';
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
    <header className='fixed top-0 left-0 w-full py-6 rounded-b-xl border-b border-b-gray-100 bg-white/90 backdrop-blur-lg'>
      <Container className='flex items-center justify-between'>
        {!logo ? ( <span className='font-semibold tracking-tighter text-xl'>{siteTitle}</span> ): (
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
              <>
                {!isButton ? (
                  <Link 
                    href={`/${pageReference.slug}`}
                    className={cn('', {
                      'py-2 px-4 rounded-full text-white bg-blue-600': isButton
                    })}
                  >
                    {title}
                  </Link>
                ): (
                  <Button variant="default" disableIcon={true}>
                    {title}
                  </Button>
                )}
              </>
            </li>
          ))}
        </ul>
      </Container>
    </header>
  )
}