"use client"
import React from 'react';
import Heading from '@/components/ui/heading';
import { usePathname } from 'next/navigation';
import ProjectCategories from './project-categories';
import Container from '@/components/global/container';
import { ProjectCategoryType } from '@/types/project';

export default function ProjectsLayout({
  children,
  categories
}: Readonly<{
  children: React.ReactNode;
  categories: ProjectCategoryType[];
}>) {

  const pathname = usePathname();

  if (pathname === '/projects' || pathname.includes('/projects/category/')) return (
    <main className='pt-40 pb-28 pattern-bg'>
      <Container>
        <Heading tag="h1" size="xxl">
          Projects
        </Heading>
        {(pathname === '/projects' || pathname.includes('/projects/category/')) && (
          <ProjectCategories categories={categories} />
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
