import { notFound } from 'next/navigation';
import PageBuilder from '@/components/page-builder';
import { client } from '@/sanity/config/sanity-client';
import { fetchServiceBySlug } from '@/sanity/lib/fetches';
import { servicePathsQuery } from '@/sanity/lib/queries/documents/service';

export const revalidate = 0;

export async function generateStaticParams() {
  const services = await client.fetch(servicePathsQuery);
  return services;
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;
  
  const service = await fetchServiceBySlug(params.slug);
  if (service === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={service?.pageBuilder} />
    </main>
  )
}