import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import ProjectGrid from './_components/project-grid';
import { allProjectsQuery, projectsPageQuery } from '@/sanity/lib/queries/documents/project';

export async function generateMetadata(): Promise<Metadata> {
  
  const { data: page } = await sanityFetch({
    query: projectsPageQuery,
    stega: false
  });

  return {
    title: page?.metaTitle ?? page?.title,
    description: page?.metaDescription ?? '',
  } satisfies Metadata;
}

export default async function ProjectsPage() {

  const { data: projects } = await sanityFetch({
    query: allProjectsQuery,
  });

  return (
    <ProjectGrid projects={projects} />
  )
}