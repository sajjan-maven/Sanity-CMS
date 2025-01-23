import React from 'react';
import { sanityFetch } from '@/sanity/lib/live';
import ProjectsLayout from './_components/projects-layout';
import { ALL_PROJECT_CATEGORIES_QUERY, ALL_PROJECTS_QUERY, PROJECTS_PAGE_QUERY } from '@/sanity/lib/queries/documents/project';

export default async function Layout({ children }: {
  children: React.ReactNode;
}) {
  
  const [{ data: categories }, { data: projects }, { data: page }] = await Promise.all([
    sanityFetch({ query: ALL_PROJECT_CATEGORIES_QUERY }),
    sanityFetch({ query: ALL_PROJECTS_QUERY }),
    sanityFetch({ query: PROJECTS_PAGE_QUERY }),
  ]);

  return (
    <ProjectsLayout categories={categories} projects={projects} page={page}>
      {children}
    </ProjectsLayout>
  )
}