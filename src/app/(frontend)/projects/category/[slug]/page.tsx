import ProjectGrid from '../../_components/project-grid';
import { fetchProjectsByCategory } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function ProjectsByCategoryPage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;
  const projects = await fetchProjectsByCategory(params.slug);

  if (projects.length === 0) {
    return (
      <p className="py-8 text-center text-gray-600">
        No projects found in this category.
      </p>
    )
  }

  return (
    <ProjectGrid projects={projects} />
  )
}