import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { serviceBySlugQuery, serviceSlugsQuery } from '@/sanity/lib/queries/documents/service';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: serviceSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { data: service } = await sanityFetch({
    query: serviceBySlugQuery,
    params: await params,
    stega: false,
  });

  if (!service) {
    return {}
  };

  const metadata: Metadata = {
    title: service.seo.title,
    description: service.seo.description,
  };

  if (service.seo.noIndex) {
    metadata.robots = "noindex";
  };

  return metadata;
}

export default async function ServicePage({ params }: PageProps) {
  const { data: service } = await sanityFetch({ 
    query: serviceBySlugQuery, 
    params: await params
  });
  
  if (service === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={service?.pageBuilder} />
    </main>
  )
}