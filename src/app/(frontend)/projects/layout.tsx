import React from 'react';
import { sanityFetch } from '@/sanity/config/live';
import ProjectsLayout from './_components/projects-layout';
import { allProjectCategoriesQuery, allProjectsQuery } from '@/sanity/lib/queries/documents/project';

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const { data: categories } = await sanityFetch({
    query: allProjectCategoriesQuery,
  });

  const { data: projects } = await sanityFetch({
    query: allProjectsQuery,
  });
  
  return (
    <ProjectsLayout categories={categories} projects={projects}>
      {children}
    </ProjectsLayout>
  )
}
