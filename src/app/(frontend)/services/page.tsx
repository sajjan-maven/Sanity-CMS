import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { servicesPageQuery } from '@/sanity/lib/queries/documents/service';

export async function generateMetadata(): Promise<Metadata> {
  
  const { data: page } = await sanityFetch({
    query: servicesPageQuery,
    stega: false
  });

  return {
    title: page?.metaTitle ?? page?.title,
    description: page?.metaDescription ?? '',
  } satisfies Metadata;
}

export default async function ServicesPage() {

  const { data: page } = await sanityFetch({
    query: servicesPageQuery,
  });

  if (page === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={page?.pageBuilder} />
    </main>
  )
}