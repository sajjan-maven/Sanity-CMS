import { sanityFetch } from '@/sanity/lib/live';
import ProjectGrid from '../../_components/project-grid';
import { PROJECTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries/documents/project';

export default async function ProjectsByCategoryPage(props: {
  params: Promise<{ slug: string }>
}) {

  const params = await props.params;

  const { data: projects } = await sanityFetch({
    query: PROJECTS_BY_CATEGORY_QUERY,
    params: params
  });

  if (projects.length === 0) {
    return (
      <p className="pt-8 md:pt-14 text-center text-gray-600">
        No projects found in this category.
      </p>
    )
  }

  return (
    <ProjectGrid projects={projects} />
  )
}