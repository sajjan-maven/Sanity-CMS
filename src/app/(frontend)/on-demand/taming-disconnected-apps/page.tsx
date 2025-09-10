import React from "react";
import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import { sanityFetch } from '@/sanity/lib/live';
import { tamingDisconnectedAppsPageQuery } from '@/sanity/lib/queries/documents/taming-disconnected-apps';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: tamingDisconnectedAppsPageQuery,
    stega: false,
  });

  if (!page) { return {} };

  return processMetadata({ data: page as any });
}

export default async function Webinar() {
  const { data: page } = await sanityFetch({
    query: tamingDisconnectedAppsPageQuery,
  });

  if (!page) {
    return null;
  }

  // Fix type for RightSection props
  const rightSectionData = {
    videoId: page.videoId ?? null,
    formThumbnail: page.formThumbnail ?? null,
  };

  return (
    <section className="w-full bg-[#F7F5F2]">
      <div className="relative w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row h-full">
        <LeftSection pageData={page} />
        <RightSection pageData={rightSectionData} />
      </div>
    </section>
  );
};
