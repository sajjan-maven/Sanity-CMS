"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import ProjectToolbar from './project-toolbar';
import Heading from '@/components/shared/heading';
import Container from '@/components/global/container';
import { ProjectCategoryType, ProjectType } from '@/types/project';

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
    <main className='px-4 xl:px-10 pattern-bg overflow-hidden md:overflow-auto'>
      <Container className='px-4 pt-32 md:pt-40 pb-14 md:pb-28 border-x border-dashed'>
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
