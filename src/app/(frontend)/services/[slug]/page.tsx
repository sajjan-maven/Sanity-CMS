import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { serviceBySlugQuery, serviceSlugsQuery } from '@/sanity/lib/queries/documents/service';

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: serviceSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const params = await props.params;
  
  const { data: service } = await sanityFetch({
    query: serviceBySlugQuery,
    params,
    stega: false,
  });

  return {
    title: service?.metaTitle ?? service?.title,
    description: service?.metaDescription ?? '',
  } satisfies Metadata;
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