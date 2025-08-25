"use client";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import NewButton from "../newButton";

interface FooterCTAProps {
  footerCTA: {
    title?: string;
    description?: string;
    ctaButton?: {
      text?: string;
      link?: string;
      variant?: string;
    };
    desktopImage?: {
      src: {
        asset?: {
          url?: string;
        };
      };
      alt?: string;
      width?: number;
      height?: number;
    };
    mobileImage?: {
      src: {
        asset?: {
          url?: string;
        };
      };
      alt?: string;
      width?: number;
      height?: number;
    };
  };
}

const FooterCTA = ({ footerCTA }: FooterCTAProps) => {
  const pathname = usePathname();
  const router = useRouter();

  // Don't render if path includes '/solution'
  if (pathname?.includes('/solution')) {
    return null;
  }

  // Use Sanity data if available, otherwise use fallback
  const title = footerCTA?.title;
  const description = footerCTA?.description;
  const buttonText = footerCTA?.ctaButton?.text;
  const buttonLink = footerCTA?.ctaButton?.link || "/demo";
  const desktopImageUrl = footerCTA?.desktopImage?.src?.asset?.url || "/common-components/footer-demo.png";
  const mobileImageUrl = footerCTA?.mobileImage?.src?.asset?.url || "/common-components/footer-demo-mobile.png";
  const desktopAlt = footerCTA?.desktopImage?.alt || "Dashboard preview";
  const mobileAlt = footerCTA?.mobileImage?.alt || "Dashboard preview";

  return (
    <section className="w-full bg-[#363338] px-4 pb-6 md:pb-20 relative z-50">
      <div className="w-full bg-[#565258] rounded-[26px] md:rounded-4xl max-w-[1256px] mx-auto overflow-hidden relative flex flex-col lg:flex-row items-start md:items-center justify-between sm:max-h-[515px] lg:max-h-auto">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 pt-10 lg:pt-0 flex flex-col gap-6 z-10 px-5 md:px-10">
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="font-semibold text-center md:text-start w-full text-white text-2xl sm:text-3xl lg:text-4xl leading-snug">
              {title}
            </div>
            <p className="font-normal text-center md:text-start w-full text-white text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          <div className="w-full max-w-[300px] lg:max-w-full mx-auto md:ml-0 md:mr-auto">
            <NewButton
              variant="secondary"
              onClick={() => router.push(buttonLink)}
              className="w-full lg:w-auto group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
            >
              {buttonText}
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
            </NewButton>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-end relative z-0">
          {footerCTA?.desktopImage && (
            <Image
              src={desktopImageUrl}
              alt={desktopAlt}
              width={footerCTA.desktopImage?.width || 725}
              height={footerCTA.desktopImage?.height || 400}
              className="hidden lg:block w-full max-w-[725px] h-auto object-contain"
              priority
            />
          )}
          {footerCTA?.mobileImage && (
            <Image
              src={mobileImageUrl}
              alt={mobileAlt}
              width={footerCTA.mobileImage?.width || 348}
              height={footerCTA.mobileImage?.height || 424}
              className="block lg:hidden w-auto h-[424px] object-contain"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
