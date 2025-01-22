import React from 'react';
import { sanityFetch } from '@/sanity/lib/live';
import ProjectsLayout from './_components/projects-layout';
import { allProjectCategoriesQuery, allProjectsQuery, projectsPageQuery } from '@/sanity/lib/queries/documents/project';

export default async function Layout({ children }: {
  children: React.ReactNode;
}) {
  
  const [{ data: categories }, { data: projects }, { data: page }] = await Promise.all([
    sanityFetch({ query: allProjectCategoriesQuery }),
    sanityFetch({ query: allProjectsQuery }),
    sanityFetch({ query: projectsPageQuery }),
  ]);

  return (
    <ProjectsLayout categories={categories} projects={projects} page={page}>
      {children}
    </ProjectsLayout>
  )
}