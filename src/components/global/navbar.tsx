import Link from 'next/link';
import Image from 'next/image';
import Container from './container';
import { Button } from '../ui/button';
import useScroll from '@/hooks/use-scroll';
import AnimatedText from '../ui/animated-text';
import { SettingsType } from '@/types/settings';
import { cn, scrollToElement } from '@/lib/utils';
import { NavigationSettingsType } from '@/types/navigation';

interface NavbarProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType['navbar']
}

export default function Navbar({ settings, navigationSettings }: NavbarProps) {

  const { siteTitle, logo } = settings
  const { navbarMenuItems: menuItems } = navigationSettings;

  const hasScrolled = useScroll()

  return (
    <header 
      className={cn('z-10 fixed top-0 left-0 w-full py-6 rounded-b-xl border-b border-b-gray-100 bg-white/90 backdrop-blur-lg transition-all duration-300 ease-in-out', {
        'py-4': hasScrolled
      })}
    >
      <Container className='flex items-center justify-between'>
        <button 
          aria-label="Go to home page"
          onClick={() => scrollToElement('home')}
          className='hover:scale-[0.95] transition-transform duration-300 ease-in-out'
        >
          {!logo ? ( 
            <span className='font-semibold tracking-tighter text-xl'>
              {siteTitle}
            </span>
          ): (
            <Image
              src={logo.asset.url}
              width={200}
              height={200}
              alt={`${siteTitle} Logo`}
            />
          )}
        </button>
        <ul className='hidden md:flex items-center gap-8'>
          {menuItems.map(({ _key, pageReference, title, isButton }) => (
            <li key={_key}>
              <>
                {!isButton ? (
                  <Link 
                    href={`/${pageReference.slug}`}
                    className={cn('relative overflow-hidden inline-flex', {
                      'hover:underline underline-offset-[38px]': !isButton,
                      'py-2 px-4 rounded-full text-white bg-blue-600': isButton
                    })}
                    >
                      <AnimatedText>
                        {title}
                      </AnimatedText>
                  </Link>
                ): (
                  <Button 
                    variant="default" 
                    disableIcon={true}
                    buttonType="internal"
                  >
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