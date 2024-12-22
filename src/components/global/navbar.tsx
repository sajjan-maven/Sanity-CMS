import Link from 'next/link';
import { cn } from '@/lib/utils';
import Container from './container';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import SiteLogo from '../shared/site-logo';
import useScroll from '@/hooks/use-scroll';
import { usePathname } from 'next/navigation';
import AnimatedText from '../ui/animated-text';
import { SettingsType } from '@/types/settings';
import AnimatedUnderline from '../ui/animated-underline';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

interface NavbarProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType['navbar'];
  slideOutMenuSettings: NavigationSettingsType['slideOutMenu'];
}

export default function Navbar({ settings, navigationSettings, slideOutMenuSettings }: NavbarProps) {

  const pathname = usePathname();
  const hasScrolled = useScroll();

  const { siteTitle, logo } = settings;
  
  const { navbarType, navbarMenuItems: menuItems } = navigationSettings;
  const { showSlideOutMenu, slideOutMenuItems } = slideOutMenuSettings;

  return (
    <header 
      className={cn('z-20 fixed top-0 left-0 bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out', {
        'py-1 border w-fit mx-auto right-0 top-4 rounded-full': navbarType === 'floating',
        'w-full py-6 rounded-b-xl border-b border-b-gray-100': navbarType === 'classic',
        'py-4 ': hasScrolled && navbarType === 'classic',
      })}
    >
      <Container 
        className={cn('flex items-center justify-between', {
          'md:px-1 md:pl-6 gap-6': navbarType === 'floating'
        })}
      >
        <SiteLogo siteTitle={siteTitle} logo={logo} navbarType={navbarType} />
        <div className='flex items-center gap-3'>
          <ul 
            className={cn('hidden md:flex items-center gap-8 group/nav', {
              'gap-6 text-sm': navbarType === 'floating'
            })}
          >
            {menuItems.map(({ _key, pageReference, title, isButton }) => (
              <li key={_key} className='relative'>
                <>
                  {!isButton ? (
                    <>
                      <Link 
                        href={`/${pageReference.slug}`}
                        className={cn('relative overflow-hidden inline-flex transition-opacity duration-200 group-hover/nav:opacity-40 hover:!opacity-100', {
                          'hover:underline underline-offset-[38px]': !isButton,
                          'py-2 px-4 rounded-full text-white bg-blue-600': isButton,
                        })}
                      >
                        <AnimatedText>
                          {title}
                        </AnimatedText>
                      </Link>
                      {pathname.includes(`/${pageReference.slug}`) && (
                        <div className='absolute -bottom-1.5 left-0 right-0 w-full flex items-center justify-center transition-all duration-300'>
                          <div className='border-b-[1.5px] border-dashed w-full'></div>
                        </div>
                      )}
                    </>
                  ): (
                    <Button 
                      variant="primary" 
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
          {showSlideOutMenu && (
            <SlideOutNavigation menuItems={slideOutMenuItems}>
              <button className='p-2.5 border border-gray-200/60 rounded-full cursor-pointer hover:bg-gray-50 transition-colors duration-300 ease-in-out'>
                <Menu size={18} />
              </button>
            </SlideOutNavigation>
          )}
        </div>
      </Container>
    </header>
  )
}

function SlideOutNavigation({ children, menuItems }: {
  children: React.ReactNode;
  menuItems: MenuItemType[];
}) {
  return(
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className='p-8 pb-6 antialiased font-normal text-gray-400'>
          Explore
        </SheetTitle>
        <ul className='px-8 space-y-4 text-white'>
          {menuItems?.map((item) => (
            <li key={item?._key}>
              <Link 
                href={item?.pageReference?.slug} 
                className='relative text-3xl tracking-tight group'
              >
                {item.title}
                <AnimatedUnderline className='bg-white' />
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}