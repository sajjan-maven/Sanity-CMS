"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import FooterCTA from './sections/footer-cta'
import FooterLinks from './sections/footer-links'
import FooterCoLinks from './sections/footer-co-links'

export default function Footer({ footerSettings }: {
  footerSettings: any,
}) {
  const pathname = usePathname();

  const shouldHideFooterCTA = footerSettings?.footerCTAexcludedRoutes?.some((route: any) => {
    const excludedPath = route?.path;
    if (!excludedPath) return false;
    if (pathname === excludedPath) return true;
    if (excludedPath !== '/' && pathname.startsWith(excludedPath)) return true;
    return false;
  });

  return (
    <footer className="bg-[#363338] rounded-t-4xl overflow-hidden -mt-5 pt-6 md:pt-20 relative z-20">
      {!shouldHideFooterCTA && <FooterCTA footerCTA={footerSettings.footerCTA} />}
      <FooterLinks footerLinks={footerSettings.footerLinks} />
      <FooterCoLinks footerCoLinks={footerSettings.footerCoLinks} />
    </footer>
  )
}
