import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/lib/live';
import ProjectGrid from './_components/project-grid';
import { allProjectsQuery, projectsPageQuery } from '@/sanity/lib/queries/documents/project';

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: projectsPageQuery,
    stega: false
  });

  if (!page) {
    return {}
  };

  const metadata: Metadata = {
    title: page.seo.title,
    description: page.seo.description,
  };

  if (page.seo.noIndex) {
    metadata.robots = "noindex";
  }

  return metadata;
}

export default async function ProjectsPage() {
  const { data: projects } = await sanityFetch({
    query: allProjectsQuery,
  });

  return (
    <ProjectGrid projects={projects} />
  )
}