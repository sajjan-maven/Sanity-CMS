import React from 'react';
import { ProjectSearch } from './project-search';
import ProjectCategories from './project-categories';
import { ProjectCategoryType, ProjectType } from '@/types/project';

export default function ProjectToolbar({ categories, projects }: {
  categories: ProjectCategoryType[];
  projects: ProjectType[];
}) {
  return (
    <>
      <ProjectSearch projects={projects} classNames='mt-4 md:hidden' />
      <div className='relative z-20 overflow-x-scroll md:overflow-visible -mx-4 md:-mx-0 py-4 md:py-2 pl-4 md:pl-0 mt-6 md:mt-16 mb-6 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-2 border-y border-dashed backdrop-blur-md backdrop-opacity-50 pattern-bg--2'>
        <ProjectCategories categories={categories} />
        <ProjectSearch projects={projects} classNames='hidden md:block' />
        <EdgeBlur />
      </div>
    </>
  )
}

function EdgeBlur() {
  return (
    <div className='absolute inset-0 flex items-center justify-between'>
      <div className='relative bg-gradient-to-r from-white to-transparent h-full w-[100px]'></div>
      <div className='bg-gradient-to-l from-white to-transparent h-full w-[100px]'></div>
    </div>
  )
}
