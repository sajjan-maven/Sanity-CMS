import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { SERVICE_BY_SLUG_QUERY, SERVICE_SLUGS_QUERY } from '@/sanity/lib/queries/documents/service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: SERVICE_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: service } = await sanityFetch({
    query: SERVICE_BY_SLUG_QUERY,
    params: await params,
    stega: false,
  });

  if (!service) { return {} };

  return processMetadata({ data: service });
}

export default async function ServicePage({ params }: PageProps) {
  const { data: service } = await sanityFetch({ 
    query: SERVICE_BY_SLUG_QUERY, 
    params: await params
  });
  
  if (service === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={service?.pageBuilder} />
    </main>
  )
}