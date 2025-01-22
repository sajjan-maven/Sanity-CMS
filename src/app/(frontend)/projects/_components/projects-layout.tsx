"use client"
import React from 'react';
import { PageType } from '@/types/page';
import { usePathname } from 'next/navigation';
import ProjectToolbar from './project-toolbar';
import Heading from '@/components/shared/heading';
import PageBuilder from '@/components/page-builder';
import Container from '@/components/global/container';
import { ProjectCategoryType, ProjectType } from '@/types/project';

export default function ProjectsLayout({
  children,
  categories,
  projects,
  page
}: Readonly<{
  children: React.ReactNode;
  categories: ProjectCategoryType[];
  projects: ProjectType[];
  page: PageType;
}>) {

  const pathname = usePathname();

  if (pathname === '/projects' || pathname.includes('/projects/category/')) return (
    <main className='overflow-hidden md:overflow-auto'>
      <div className='px-4 xl:px-10 pattern-bg'>
        <Container className='px-4 pt-32 md:pt-40 pb-14 md:pb-28 border-x border-dashed'>
          <Heading tag="h1" size="xxxl">
            Projects
          </Heading>
          {(pathname === '/projects' || pathname.includes('/projects/category/')) && (
            <ProjectToolbar categories={categories} projects={projects} />
          )}
          {children}
        </Container>
      </div>
      <PageBuilder blocks={page?.pageBuilder} />
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