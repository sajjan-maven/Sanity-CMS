"use client"
import React from 'react';
import Heading from '@/components/ui/heading';
import { usePathname } from 'next/navigation';
import ProjectCategories from './project-categories';
import Container from '@/components/global/container';
import { ProjectCategoryType, ProjectType } from '@/types/project';
import ProjectToolbar from './project-toolbar';

export default function ProjectsLayout({
  children,
  categories,
  projects
}: Readonly<{
  children: React.ReactNode;
  categories: ProjectCategoryType[];
  projects: ProjectType[];
}>) {

  const pathname = usePathname();

  if (pathname === '/projects' || pathname.includes('/projects/category/')) return (
    <main className='px-10 pattern-bg'>
      <Container className='pt-40 pb-28 border-x border-dashed'>
        <Heading tag="h1" size="xxxl">
          Projects
        </Heading>
        {(pathname === '/projects' || pathname.includes('/projects/category/')) && (
          <ProjectToolbar categories={categories} projects={projects} />
        )}
        {children}
      </Container>
    </main>
  )

  return (
    <main className='pt-40 pb-28 pattern-bg'>
      <Container>
        {children}
      </Container>
    </main>
  )
}
