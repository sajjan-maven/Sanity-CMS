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

  if (!page) {
    return {}
  };

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
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