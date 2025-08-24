"use client"
import Navbar from '../ui/navbar';
import Footer from '../ui/footer';
import localFont from "next/font/local";
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

interface ClientLayoutProps {
  children: React.ReactNode;
  navbarSettings: any;
  announcementBannerSettings: any;
  footerCTA: any;
  footerLinks: any;
  footerCoLinks: any;
  navbarFooterSettings: any;
}

const geistSans = localFont({
  src: "../../app/(frontend)/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../../app/(frontend)/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({
  children,
  navbarSettings,
  announcementBannerSettings,
  footerCTA,
  footerLinks,
  footerCoLinks,
  navbarFooterSettings,
}: ClientLayoutProps) {

  const pathname = usePathname();
  if (pathname.includes('/studio')) return (children);

  const shouldHideFooter = navbarFooterSettings?.excludedRoutes?.some((route: any) => {
    if (!route.excludeFooter) return false;
    if (pathname === route.path) return true;
    if (route.path !== '/' && pathname.startsWith(route.path)) return true;
    return false;
  });

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-geistSans antialiased grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
      <Navbar
        // settings={settings}
        announcementBannerSettings={announcementBannerSettings}
        navbarSetting={navbarSettings}
        navbarFooterSettings={navbarFooterSettings}
      />
      <main>
        {children}
      </main>
      {!shouldHideFooter && (
        <Footer
          footerCTA={footerCTA}
          footerLinks={footerLinks}
          footerCoLinks={footerCoLinks}
          navbarFooterSettings={navbarFooterSettings}
        />
      )}
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: 'text-sm font-semibold antialiased',
          style: {
            borderRadius: '300px',
            padding: '4px 8px',
            color: '#FFFFFF',
            fontWeight: '500',
            backgroundColor: '#000000'
          }
        }}
      />
    </div>
  )
}