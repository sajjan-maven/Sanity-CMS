import React from 'react'
import FooterCTA from './sections/footer-cta'
import FooterLinks from './sections/footer-links'
import FooterCoLinks from './sections/footer-co-links'

export default function Footer({ footerCTA, footerLinks, footerCoLinks }: { footerCTA: any, footerLinks: any, footerCoLinks: any }) {

  return (
    <footer className="bg-[#363338] rounded-t-4xl overflow-hidden -mt-5 pt-6 md:pt-20 relative z-40">
        <FooterCTA footerCTA={footerCTA} />
        <FooterLinks footerLinks={footerLinks} />
        <FooterCoLinks footerCoLinks={footerCoLinks} />
    </footer>
  )
}
