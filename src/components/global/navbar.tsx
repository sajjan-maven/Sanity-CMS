import Link from 'next/link';
import { cn } from '@/lib/utils';
import Container from './container';
import { Button } from '../ui/button';
import useScroll from '@/hooks/use-scroll';
import SiteLogo from '../shared/site-logo';
import AnimatedText from '../ui/animated-text';
import { SettingsType } from '@/types/settings';
import { ChevronRight, Menu } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import AnimatedUnderline from '../ui/animated-underline';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface NavbarProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType['navbar'];
  slideOutMenuSettings: NavigationSettingsType['slideOutMenu'];
}

export default function Navbar({ settings, navigationSettings, slideOutMenuSettings }: NavbarProps) {

  const pathname = usePathname();
  const hasScrolled = useScroll();

  const { siteTitle, logo } = settings;
  
  const { navbarMenuItems: menuItems } = navigationSettings;
  const { showSlideOutMenu, slideOutMenuItems } = slideOutMenuSettings;

  return (
    <header 
      className={cn('z-20 fixed top-0 left-0 w-full py-6 rounded-b-xl border-b border-b-gray-100 bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out', {
        'py-4 ': hasScrolled
      })}
    >
      <Container className='flex items-center justify-between'>
        <SiteLogo siteTitle={siteTitle} logo={logo} />
        <div className='hidden md:flex items-center gap-3'>
          <NavigationMenu>
            <NavigationMenuList className='space-x-8 group/nav'>
              {menuItems.map(({ _key, pageReference, pageReferences, title, isButton, menuItemType }) => (
                <>
                  {!isButton ? (
                    <>
                      {menuItemType === 'group' ? (
                        <NavigationMenuItem key={_key}>
                          <NavigationMenuTrigger>
                            {title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className='min-w-[180px] py-3 px-3 flex flex-col gap-2 bg-white'>
                            {pageReferences?.map((page) => (
                              <Link 
                                key={page.slug} 
                                href={`/${page.slug}`} 
                                className='group py-1 pl-3 pr-2 flex items-center justify-between gap-2 rounded-md border border-dashed hover:bg-gray-50'
                              >
                                {page.title}
                                <ChevronRight 
                                  size={14} 
                                  className='text-gray-300 group-hover:-translate-x-0.5 group-hover:text-gray-500 transition-all duration-300' 
                                />
                              </Link>
                            ))}
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      ): (
                        <NavigationMenuItem key={_key}>
                          <Link 
                            href={`/${pageReference.slug}`}
                            className={cn('relative overflow-hidden inline-flex transition-opacity duration-200 group-hover/nav:opacity-40 hover:!opacity-100', {
                              'hover:underline underline-offset-[38px]': !isButton,
                              'py-2 px-4 rounded-full text-white bg-blue-600': isButton,
                              'text-blue-700': pathname.includes(`/${pageReference.slug}`)
                            })}
                          >
                            <AnimatedText>
                              {title}
                            </AnimatedText>
                          </Link>
                        </NavigationMenuItem>
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
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {showSlideOutMenu && (
            <SlideOutNavigation menuItems={slideOutMenuItems} siteTitle={siteTitle} logo={logo}>
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

function SlideOutNavigation({ children, menuItems, siteTitle, logo }: {
  siteTitle: string;
  logo?: {
    asset: {
      url: string;
    }
  }
  children: React.ReactNode;
  menuItems: MenuItemType[];
}) {

  const router = useRouter();

  return(
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className='overflow-y-scroll'>
        <SheetHeader className='z-20 fixed top-0 pt-[26px] right-7 w-[330px] h-20 border-b border-dashed border-b-gray-200 bg-white/95'>
          <div className=' pb-6'>
            <SheetClose>
              <SiteLogo siteTitle={siteTitle} logo={logo} theme='dark' />
            </SheetClose>
          </div>
        </SheetHeader>
        <SheetTitle className='mt-16 px-0 py-6 antialiased font-normal text-gray-400'>
          Explore
        </SheetTitle>
        <ul className='px-0 space-y-4 text-black h-[800px]'>
          {menuItems?.map((item) => (
            <li key={item?._key}>
              <SheetClose>
                <button 
                  onClick={() => router.push(item?.pageReference?.slug)}
                  className='relative block text-3xl tracking-tight group'
                >
                  {item.title}
                  <AnimatedUnderline className='h-[2px]' />
                </button>
              </SheetClose>
            </li>
          ))}
        </ul>
        {/* <div className='fixed bottom-1 right-0 w-[380px] h-20 bg-red-500'>

        </div> */}
      </SheetContent>
    </Sheet>
  )
}