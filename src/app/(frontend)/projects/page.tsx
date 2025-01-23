import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import ProjectGrid from './_components/project-grid';
import { ALL_PROJECTS_QUERY, PROJECTS_PAGE_QUERY } from '@/sanity/lib/queries/documents/project';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: PROJECTS_PAGE_QUERY,
    stega: false
  });

  if (!page) { return {} };

  return processMetadata({ data: page });
}

export default async function ProjectsPage() {
  const { data: projects } = await sanityFetch({
    query: ALL_PROJECTS_QUERY,
  });

  return (
    <ProjectGrid projects={projects} />
  )
}