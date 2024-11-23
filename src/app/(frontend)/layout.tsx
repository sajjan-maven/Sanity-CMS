import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ClientLayout from "@/components/global/client-layout";
import { fetchNavigationSettings, fetchSettings } from "@/sanity/lib/fetches";

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

  const navigationSettings = await fetchNavigationSettings();
  const settings = await fetchSettings();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-geistSans antialiased`}>
        <ClientLayout 
          settings={settings}
          navigationSettings={navigationSettings}
        >
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
