import React from 'react';
import { sanityFetch } from '@/sanity/lib/live';
import ProjectsLayout from './_components/projects-layout';
import { projectsPageQuery } from '@/sanity/lib/queries/documents/project';

export default async function Layout({ children }: {
  children: React.ReactNode;
}) {
  
  const { data: page } = await sanityFetch({
    query: projectsPageQuery,
  });
  
  return (
    <ProjectsLayout 
      categories={page.categories}
      projects={page.projects}
      page={page}
    >
      {children}
    </ProjectsLayout>
  )
}