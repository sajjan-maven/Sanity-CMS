import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/config/live';
import PageBuilder from '@/components/page-builder';
import { client } from '@/sanity/config/sanity-client';
import { pageBySlugQuery, pagePathsQuery } from '@/sanity/lib/queries/documents/page';

export async function generateStaticParams() {
  const pages = await client.fetch(pagePathsQuery);
  return pages;
}

export default async function Page(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;

  const { data: page } = await sanityFetch({ 
    query: pageBySlugQuery, 
    params: params
  });

  if (page === null) notFound();

  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={page?.pageBuilder} />
    </main>
  )
}