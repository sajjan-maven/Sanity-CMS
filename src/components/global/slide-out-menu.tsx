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
    slideOutMenuButtons
  } = settings;

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
        <ul className='px-0 space-y-4 text-black'>
          {menuItems?.map((item: MenuItemType) => (
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
        {slideOutMenuButtons && slideOutMenuButtons.length > 0 && (
          <div className='fixed bottom-1 right-0 w-[380px] px-4 pb-4'>
            <ButtonRenderer buttons={slideOutMenuButtons} />  
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}