import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import ClientLayout from "@/components/global/client-layout";
import { DisableDraftMode } from "@/components/shared/disable-draft-mode";
import { generalSettingsQuery } from "@/sanity/lib/queries/singletons/settings";
import { navigationSettingsQuery } from "@/sanity/lib/queries/singletons/navigation";

export const metadata: Metadata = {
  title: "SiteEngine",
  description: "Open-Source Next.js & Sanity Marketing Website Template.",
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isEnabled: isDraftMode } = await draftMode();

  const [{ data: settings }, { data: navigationSettings }] = await Promise.all([
    sanityFetch({ query: generalSettingsQuery }),
    sanityFetch({ query: navigationSettingsQuery })
  ]);
  
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-geistSans antialiased`}>
        <ClientLayout 
          settings={settings}
          navigationSettings={navigationSettings}
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
      </body>
    </html>
  );
}
