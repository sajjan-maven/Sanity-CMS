import { notFound } from 'next/navigation';
import PageBuilder from '@/components/page-builder';
import { client } from '@/sanity/config/sanity-client';
import { fetchPageBySlug } from '@/sanity/lib/fetches';
import { pagePathsQuery } from '@/sanity/lib/queries/documents/page';

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const pages = await client.fetch(pagePathsQuery)
  return pages
}

export const revalidate = 0;

export default async function Page(props: PageProps) {
  const params = await props.params;

  const page = await fetchPageBySlug(params.slug);
  if (page === null) notFound();

  return (
    <main id="home" className="overflow-hidden">
      <PageBuilder
        blocks={page?.pageBuilder} 
      />
    </main>
  )
}