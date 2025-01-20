import React from 'react';
import Link from 'next/link';
import Container from './container';
import { Button } from '../ui/button';
import { PageType } from '@/types/page';
import useScroll from '@/hooks/use-scroll';
import SiteLogo from '../shared/site-logo';
import SlideOutMenu from './slide-out-menu';
import { usePathname } from 'next/navigation';
import { cn, resolveHref } from '@/lib/utils';
import { SettingsType } from '@/types/settings';
import { ChevronRight, Menu } from 'lucide-react';
import AnimatedText from '../shared/animated-text';
import { MenuItemType, NavigationSettingsType } from '@/types/navigation';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

interface NavbarProps {
  settings: SettingsType;
  navigationSettings: NavigationSettingsType;
}

export default function Navbar({ settings, navigationSettings }: NavbarProps) {

  const pathname = usePathname();
  const hasScrolled = useScroll();

  const { siteTitle, logo } = settings;

  const { navbarMenuItems } = navigationSettings['navbar'];
  const { showSlideOutMenu } = navigationSettings['slideOutMenu'];
  
  return (
    <header 
      className={cn('z-40 fixed top-0 left-0 w-full py-6 rounded-b-xl border-b border-b-gray-100 bg-white/80 backdrop-blur-lg transition-all duration-300 ease-in-out', {
        'py-4 ': hasScrolled
      })}
    >
      <Container className='flex items-center justify-between'>
        <SiteLogo siteTitle={siteTitle} logo={logo} />
        <div className='flex items-center gap-3'>
          <NavigationMenu className='hidden md:block'>
            <NavigationMenuList className='space-x-8 group/nav'>
              {navbarMenuItems.map((item: MenuItemType) => (
                <React.Fragment key={item._key}>
                  {!item.isButton ? (
                    <>
                      {item.menuItemType === 'group' ? (
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className='min-w-[180px] text-nowrap py-3 px-3 flex flex-col gap-2 bg-white'>
                            {item.pageReferences?.map((page: PageType) => (
                              <Link 
                                key={page.slug} 
                                href={resolveHref(page._type, page.slug) ?? '/'}
                                className='group py-1 pl-3 pr-2 flex items-center justify-between gap-6 rounded-md border border-dashed hover:bg-gray-50'
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
                        <NavigationMenuItem>
                          <Link 
                            href={resolveHref(item?.pageReference?._type, item?.pageReference?.slug) ?? '/'}
                            className={cn('relative overflow-hidden inline-flex transition-opacity duration-200 group-hover/nav:opacity-40 hover:!opacity-100', {
                              'hover:underline underline-offset-[38px]': !item.isButton,
                              'py-2 px-4 rounded-full text-white bg-blue-600': item.isButton,
                              'text-blue-700': pathname.includes(`/${item.pageReference.slug}`)
                            })}
                          >
                            <AnimatedText>
                              {item.title}
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
                      pageReference={item.pageReference.slug}
                    >
                      {item.title}
                    </Button>
                  )}
                </React.Fragment>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {showSlideOutMenu && (
            <SlideOutMenu 
              logo={logo}
              siteTitle={siteTitle} 
              settings={navigationSettings['slideOutMenu']}
            >
              <button className='p-2.5 border border-gray-200/60 rounded-full cursor-pointer hover:bg-gray-50 transition-colors duration-300 ease-in-out'>
                <Menu size={18} />
              </button>
            </SlideOutMenu>
          )}
        </div>
      </Container>
    </header>
  )
}