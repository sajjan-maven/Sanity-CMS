import React from 'react';
import { notFound } from 'next/navigation';
import PageBuilder from '@/components/page-builder';
import { fetchProjectBySlug } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function ProjectPage(props: {
  params: Promise<{ slug: string; }>
}) {
  
  const params = await props.params;

  const project = await fetchProjectBySlug(params.slug);
  if (project === null) notFound();
  
  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={project?.pageBuilder} />
    </main>
  )
}