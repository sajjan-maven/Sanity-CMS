import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterCoLinksProps {
  footerCoLinks: {
    footerCoLinks: {
    companyNameMark?: {
      asset?: {
        url: string;
      };
    };
    copyright?: string;
    coLinks?: Array<{
      label: string;
      url: string;
    }>;
    businessEmail?: string;
  };
}
}

const FooterCoLinks = ({ footerCoLinks }: FooterCoLinksProps) => {
  // Fallback links if no Sanity data
  const fallbackLinks = [
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Privacy Policy", href: "/privacy" },
    { text: "contact@stitchflow.io", href: "mailto:contact@stitchflow.io" },
  ];

  // Use Sanity data if available, otherwise use fallback
  const copyright = footerCoLinks?.footerCoLinks?.copyright || "Copyright © 2025 Stitchflow, Inc.";
  const links = footerCoLinks?.footerCoLinks?.coLinks && footerCoLinks?.footerCoLinks.coLinks.length > 0
    ? footerCoLinks?.footerCoLinks.coLinks.map(link => ({
        text: link.label,
        href: link.url
      }))
    : fallbackLinks;

  return (
    <section className="w-full bg-[#363338] text-white pt-6 pb-10 md:pb-16 px-4">
      <div className="max-w-[1256px] mx-auto flex flex-col items-start gap-8 md:gap-16">
        <div className="w-full flex justify-center relative">
          <Image
            alt="Stitchflow Wordmark"
            src={footerCoLinks?.footerCoLinks?.companyNameMark?.asset?.url || ''}
            width={1256}
            height={199}
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap w-full gap-4 md:gap-6">
          <div className="font-normal text-xs leading-6">{copyright}</div>

          <div className="flex flex-row items-center justify-center md:justify-between gap-2 md:gap-6 flex-wrap px-20 sm:px-0">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="font-normal text-xs leading-6 no-underline hover:underline"
              >
                {link.text}
              </Link>
            ))}
            <Link key='email' href={`mailto:${footerCoLinks?.footerCoLinks?.businessEmail}`} className="font-normal text-xs leading-6 no-underline hover:underline">{footerCoLinks?.footerCoLinks?.businessEmail}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCoLinks;
