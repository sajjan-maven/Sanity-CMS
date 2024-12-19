import ProjectGrid from './_components/project-grid';
import { fetchAllProjects } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function ProjectsPage() {

  const projects = await fetchAllProjects();  

  return (
    <ProjectGrid projects={projects} />
  )
}