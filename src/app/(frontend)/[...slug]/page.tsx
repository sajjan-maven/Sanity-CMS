import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { PageBuilder } from '@/components/page-builder';
import { pageBySlugQuery, pageSlugsQuery } from '@/sanity/lib/queries/documents/page';
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const { data: pages } = await sanityFetch({
    query: pageSlugsQuery,
    perspective: "published",
    stega: false,
  });

  // Convert slug string to slug array by splitting on '/'
  return pages
    .filter((page) => page.params.slug)
    .map((page) => ({
      slug: page.params.slug!.split('/').filter(p => p),
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  // Join slug array to form full slug string
  const slugString = slug.join('/');

  const { data: page } = await sanityFetch({
    query: pageBySlugQuery,
    params: { slug: slugString },
    stega: false,
  });

  if (!page) { return {} };

  return processMetadata({ data: page as any });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  // Join slug array to form full slug string
  const slugString = slug.join('/');

  const { data: page } = await sanityFetch({
    query: pageBySlugQuery,
    params: { slug: slugString },
  });

  if (page === null) notFound();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageBuilder
        id={page?._id ?? ''}
        type="servicesPage"
        pageBuilder={page?.pageBuilder ?? []}
      />
    </Suspense>
  )
}
