import React from 'react';
import ProjectsLayout from './_components/projects-layout';
import { fetchAllProjects, fetchProjectCategories } from '@/sanity/lib/fetches';

export const revalidate = 0;

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const categories = await fetchProjectCategories();
  const projects = await fetchAllProjects();
  
  return (
    <ProjectsLayout categories={categories} projects={projects}>
      {children}
    </ProjectsLayout>
  )
}
