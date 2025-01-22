import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import PageBuilder from '@/components/page-builder';
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/lib/queries/documents/project';

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: projectSlugsQuery,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const params = await props.params;
  
  const { data: project } = await sanityFetch({
    query: projectBySlugQuery,
    params,
    stega: false,
  });

  return {
    title: project?.metaTitle ?? project?.title,
    description: project?.metaDescription ?? '',
  } satisfies Metadata;
}

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