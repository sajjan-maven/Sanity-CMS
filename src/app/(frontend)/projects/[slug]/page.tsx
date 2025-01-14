import React from 'react';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/config/live';
import PageBuilder from '@/components/page-builder';
import { projectBySlugQuery } from '@/sanity/lib/queries/documents/project';

export default async function ProjectPage(props: {
  params: Promise<{ slug: string; }>
}) {
  
  const params = await props.params;

  const { data: project } = await sanityFetch({ 
    query: projectBySlugQuery, 
    params: params
  });

  if (project === null) notFound();
  
  return (
    <main className="overflow-hidden">
      <PageBuilder blocks={project?.pageBuilder} />
    </main>
  )
}