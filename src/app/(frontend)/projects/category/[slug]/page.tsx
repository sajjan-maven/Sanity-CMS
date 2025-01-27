import { sanityFetch } from '@/sanity/lib/live';
import ProjectGrid from '../../_components/project-grid';
import { PROJECT_CATEGORY_BY_SLUG_QUERY, PROJECT_SLUGS_QUERY, PROJECTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries/documents/project';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: PROJECT_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  });
  return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const { data: category } = await sanityFetch({
    query: PROJECT_CATEGORY_BY_SLUG_QUERY,
    params: await params,
    stega: false,
  });

  if (!category) { return {} };

  return {
    title: `${category.title} Projects`,
    description: `Browse our collection of ${category.title.toLowerCase()} projects.`
  }
}

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