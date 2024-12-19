import { notFound } from 'next/navigation';
import PageBuilder from '@/components/page-builder';
import { fetchServicesPage } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function ServicesPage() {

  const page = await fetchServicesPage();
  if (page === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={page?.pageBuilder} />
    </main>
  )
}