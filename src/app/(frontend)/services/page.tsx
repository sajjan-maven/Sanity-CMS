import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/config/live';
import PageBuilder from '@/components/page-builder';
import { servicesPageQuery } from '@/sanity/lib/queries/documents/service';

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