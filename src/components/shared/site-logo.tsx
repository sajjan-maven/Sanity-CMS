"use client"
import React from 'react';
import Image from 'next/image';
import { cn, scrollToElement } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

export default function SiteLogo({ siteTitle, logo, navbarType, location }: {
  siteTitle: string;
  logo?: {
    asset: {
      url: string;
    }
  };
  navbarType?: 'classic' | 'floating';
  location?: 'footer' | 'navbar';
}) {

  const pathname = usePathname()
  const router = useRouter()

  return (
    <button 
      aria-label="Go to home page"
      onClick={() => pathname === '/' ? scrollToElement('home') : router.push(`/#home`)}
      className='hover:scale-[0.95] transition-transform duration-300 ease-in-out'
    >
      {!logo ? ( 
        <span 
          className={cn('font-semibold tracking-tighter text-xl', {
            'pr-4 border-r text-lg': navbarType === 'floating',
            'text-3xl': location === 'footer'
          })}
        >
          {siteTitle}
        </span>
      ): (
        <Image
          src={logo.asset.url}
          width={200}
          height={200}
          alt={`${siteTitle} Logo` ?? ''}
        />
      )}
    </button>
  )
}
