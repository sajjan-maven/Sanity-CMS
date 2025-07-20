import "./globals.css";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import Container from "@/components/global/container";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import ClientLayout from "@/components/global/client-layout";
import InstallDemoButton from "@/components/shared/install-demo-button";
import { DisableDraftMode } from "@/components/shared/disable-draft-mode";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { navbarQuery } from "@/sanity/lib/queries/singletons/navbar";
import { generalSettingsQuery, marketingSettingsQuery } from "@/sanity/lib/queries/singletons/settings";
import { footerCTAQuery } from "@/sanity/lib/queries/singletons/footer-cta";
import { footerLinksQuery } from "@/sanity/lib/queries/singletons/footer-links";
import { footerCoLinksQuery } from "@/sanity/lib/queries/singletons/footer-co-links";

export const metadata: Metadata = {
  title: {
    template: `%s | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    default: `${process.env.NEXT_PUBLIC_SITE_NAME}`,
  },
  description: "Open-Source Next.js & Sanity Marketing Website Template.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isEnabled: isDraftMode } = await draftMode();

  // const [{ data: settings }, { data: marketingSettings }, { data: navbarSettings }] = await Promise.all([
  //   sanityFetch({ query: generalSettingsQuery }),
  //   sanityFetch({ query: marketingSettingsQuery }),
  //   sanityFetch({ query: navbarQuery })
  // ]);
  const sanityResults = await Promise.all([
    sanityFetch({ query: marketingSettingsQuery }),
    sanityFetch({ query: navbarQuery }),
  ]);

  // const settings = sanityResults[0].data;
  const marketingSettings = sanityResults[0].data;
  const navbarSettings = sanityResults[1].data;

  // if (!settings) return (
  //   <Container className="py-16 flex items-center justify-center gap-2.5 h-screen pattern-bg--2">
  //     <InstallDemoButton />
  //   </Container>
  // )
  const sanityResultsa = await Promise.all([
    sanityFetch({ query: footerCTAQuery, stega: false }),
    sanityFetch({ query: footerLinksQuery, stega: false }),
    sanityFetch({ query: footerCoLinksQuery, stega: false }),
  ]);

  const footerCTA = sanityResultsa[0].data;
  const footerLinks = sanityResultsa[1].data;
  const footerCoLinks = sanityResultsa[2].data;
  return (
    <html lang="en">
      <body>
        <ClientLayout 
          navbarSettings={navbarSettings}
          footerCTA={footerCTA}
          footerLinks={footerLinks}
          footerCoLinks={footerCoLinks}
        >
          {children}
        </ClientLayout>
        <SanityLive />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
        {marketingSettings?.googleAnalyticsId && (
          <GoogleAnalytics 
            gaId={marketingSettings.googleAnalyticsId} 
          />
        )}
        {marketingSettings?.googleTagManagerId && (
          <GoogleTagManager 
            gtmId={marketingSettings?.googleTagManagerId} 
          />
        )}
      </body>
    </html>
  );
}