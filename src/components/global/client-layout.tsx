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
  footerSettings: any;
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
  announcementBannerSettings,
  navbarSettings,
  children,
  footerSettings
}: ClientLayoutProps) {

  const pathname = usePathname();
  if (pathname.includes('/studio')) return (children);

  const shouldHideFooter = footerSettings.footerExcludedRoutes?.some((route: { path: string }) => {
    const excludedPath = route.path;
    if (!excludedPath) return false;
    if (pathname === excludedPath) return true;
    if (excludedPath !== '/' && pathname.startsWith(excludedPath)) return true;
    return false;
  });

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-geistSans antialiased grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
      <Navbar
        announcementBannerSettings={announcementBannerSettings}
        navbarSetting={navbarSettings}
      />
      <main>
        {children}
      </main>
      {!shouldHideFooter && (
        <Footer
          footerSettings={footerSettings}
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