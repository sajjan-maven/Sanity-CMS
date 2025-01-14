import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { client } from '@/sanity/lib/sanity-client';
import { serviceBySlugQuery, servicePathsQuery } from '@/sanity/lib/queries/documents/service';

export async function generateStaticParams() {
  const services = await client.fetch(servicePathsQuery);
  return services;
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;

  const { data: service } = await sanityFetch({ 
    query: serviceBySlugQuery, 
    params: params
  });
  
  if (service === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={service?.pageBuilder} />
    </main>
  )
}