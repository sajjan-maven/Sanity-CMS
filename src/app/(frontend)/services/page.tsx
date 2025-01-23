import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { SERVICES_PAGE_QUERY } from '@/sanity/lib/queries/documents/service';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: SERVICES_PAGE_QUERY,
    stega: false
  });

  if (!page) { return {} };

  return processMetadata({ data: page });
}

export default async function ServicesPage() {

  const { data: page } = await sanityFetch({
    query: SERVICES_PAGE_QUERY,
  });

  if (page === null) notFound();

  return (
    <PageBuilder blocks={page?.pageBuilder} />
  )
}