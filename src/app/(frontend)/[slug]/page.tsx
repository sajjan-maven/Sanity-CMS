import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { pageBySlugQuery, pageSlugsQuery } from '@/sanity/lib/queries/documents/page';

export async function generateStaticParams() {
  const { data: pages } = await sanityFetch({
    query: pageSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return pages;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const params = await props.params;
  
  const { data: page } = await sanityFetch({
    query: pageBySlugQuery,
    params,
    stega: false,
  });

  return {
    title: page?.metaTitle ?? page?.title,
    description: page?.metaDescription ?? '',
  } satisfies Metadata;
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;
  
  const { data: page } = await sanityFetch({ 
    query: pageBySlugQuery, 
    params: params,
  });

  if (page === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={page?.pageBuilder} />
    </main>
  )
}