"use client"
import Navbar from './navbar';
import Footer from './footer';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import { SettingsType } from '@/types/settings';
import { NavigationSettingsType } from '@/types/navigation';

interface ClientLayoutProps {
  children: React.ReactNode;
  settings: SettingsType;
  navigationSettings: NavigationSettingsType;
}

export default function ClientLayout({ 
  children,
  settings,
  navigationSettings,
}: ClientLayoutProps) {

  const pathname = usePathname()
  if (pathname.includes('/studio')) return (children)
  
  return (
    <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
      <Navbar 
        settings={settings}
        navigationSettings={navigationSettings['navbar']}
      />
      {children}
      <Footer 
        settings={settings} 
        navigationSettings={navigationSettings['footer']}
      />
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          className: 'text-sm font-semibold antialiased',
          style: {
            borderRadius: '300px'
          }
        }}
      />
    </div>
  )
}