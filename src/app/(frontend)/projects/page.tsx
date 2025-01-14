import { sanityFetch } from '@/sanity/lib/live';
import ProjectGrid from './_components/project-grid';
import { allProjectsQuery } from '@/sanity/lib/queries/documents/project';

export default async function ProjectsPage() {

  const { data: projects } = await sanityFetch({
    query: allProjectsQuery,
  });

  return (
    <ProjectGrid projects={projects} />
  )
}