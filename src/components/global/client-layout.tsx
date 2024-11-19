"use client"
import Navbar from './navbar';
import Footer from './footer';
import { usePathname } from 'next/navigation';

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ 
  children,
}: ClientLayoutProps) {

  const pathname = usePathname()
  if (pathname.includes('/studio')) return (children)
  
  return (
    <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}