"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import FooterCTA from './sections/footer-cta'
import FooterLinks from './sections/footer-links'
import FooterCoLinks from './sections/footer-co-links'

export default function Footer({ footerCTA, footerLinks, footerCoLinks, navbarFooterSettings }: { 
  footerCTA: any, 
  footerLinks: any, 
  footerCoLinks: any,
  navbarFooterSettings: any 
}) {
  const pathname = usePathname();

  // Check if current path should hide FooterCTA
  const shouldHideFooterCTA = navbarFooterSettings?.footerCTAexcludedRoutes?.some((route: any) => 
    route.path === pathname
  );

  return (
    <footer className="bg-[#363338] rounded-t-4xl overflow-hidden -mt-5 pt-6 md:pt-20 relative z-40">
        {!shouldHideFooterCTA && <FooterCTA footerCTA={footerCTA} />}
        <FooterLinks footerLinks={footerLinks} />
        <FooterCoLinks footerCoLinks={footerCoLinks} />
    </footer>
  )
}
