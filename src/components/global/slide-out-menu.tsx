import Image from "next/image";
import { resolveHref } from "@/lib/utils";
import SiteLogo from "../shared/site-logo";
import { useRouter } from "next/navigation";
import ButtonRenderer from "../shared/button-renderer";
import AnimatedUnderline from "../ui/animated-underline";
import { MenuItemType, NavigationSettingsType } from "@/types/navigation";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

export default function SlideOutMenu({ children, logo, siteTitle, settings  }: {
  siteTitle: string;
  children: React.ReactNode;
  logo?: { asset: { url: string; } };
  settings: NavigationSettingsType['slideOutMenu'];
}) {

  const router = useRouter();

  const { 
    slideOutMenuItems: menuItems,
    slideOutMenuButtons,
    slideOutMenuSettings,
    showCompanyDetailsSlideOutMenu
  } = settings;

  return(
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className='overflow-y-scroll'>
        <SheetHeader className='z-20 fixed top-0 pt-[26px] right-7 w-[338px] md:w-[330px] h-20 border-b border-dashed border-b-gray-200 bg-white/95'>
              <SiteLogo siteTitle={siteTitle} logo={logo} theme='dark' />
          
        </SheetHeader>
        <SheetTitle className='mt-16 px-0 py-6 antialiased font-normal text-gray-400'>
          Explore
        </SheetTitle>
        <ul className='px-0 space-y-4 text-black'>
          {menuItems?.map((item: MenuItemType) => (
            <li key={item?._key}>
              <SheetClose>
                <button 
                  onClick={() => (
                    router.push(resolveHref(item.pageReference._type, item.pageReference.slug) ?? '/')
                  )}
                  className='relative block text-3xl tracking-tight group'
                >
                  {item.title}
                  <AnimatedUnderline className='h-[2px]' />
                </button>
              </SheetClose>
            </li>
          ))}
        </ul>
        {showCompanyDetailsSlideOutMenu && (
          <>
            <SheetTitle className='border-t border-dashed mt-8 px-0 pt-8 antialiased font-normal text-gray-400'>
              Say Hello
            </SheetTitle>
            <ul className="mt-2 space-y-4">
              <a 
                href={`mailto:${slideOutMenuSettings.companyEmailAddress}`} 
                className="relative w-fit block text-2xl tracking-tight group"
              >
                {slideOutMenuSettings.companyEmailAddress}
                <AnimatedUnderline className='h-[2px]' />
              </a>
            </ul>
            <ul className="mt-8 py-4 flex items-center gap-3 border-y border-dashed">
              {slideOutMenuSettings.companySocialMediaLinks.map((item) => (
                <li key={item._key} className="p-3 border rounded-full hover:bg-black group transition-all duration-300">
                  <a href={item.profileUrl} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.icon.asset.url}
                      width={16}
                      height={16}
                      alt={`Follow us on ${item.title}`}
                      className="group-hover:invert"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
        {slideOutMenuButtons && slideOutMenuButtons.length > 0 && (
          <div className='fixed bottom-1 right-0 w-full md:w-[380px] px-4 pb-4'>
            <ButtonRenderer buttons={slideOutMenuButtons} classNames="flex-col md:flex-row" />  
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}