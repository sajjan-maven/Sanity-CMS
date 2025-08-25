import "./globals.css";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import ClientLayout from "@/components/global/client-layout";
import { DisableDraftMode } from "@/components/shared/disable-draft-mode";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { navbarQuery } from "@/sanity/lib/queries/singletons/navbar";
import { marketingSettingsQuery } from "@/sanity/lib/queries/singletons/settings";
import { announcementBannerQuery } from "@/sanity/lib/queries/singletons/announcement-banner";
import { footerQuery } from "@/sanity/lib/queries/singletons/footer";

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
    sanityFetch({ query: announcementBannerQuery }),
    sanityFetch({ query: footerQuery }),
  ]);

  // const settings = sanityResults[0].data;
  const marketingSettings = sanityResults[0].data;
  const navbarSettings = sanityResults[1].data;
  const announcementBannerSettings = sanityResults[2].data;
  const footerSettings = sanityResults[3].data;
  // if (!settings) return (
  //   <Container className="py-16 flex items-center justify-center gap-2.5 h-screen pattern-bg--2">
  //     <InstallDemoButton />
  //   </Container>
  // )

  return (
    <html lang="en">
      <body>
        <ClientLayout
          announcementBannerSettings={announcementBannerSettings}
          navbarSettings={navbarSettings}
          footerSettings={footerSettings}
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