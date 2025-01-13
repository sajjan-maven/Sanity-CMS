import React from 'react';
import { ProjectSearch } from './project-search';
import ProjectCategories from './project-categories';
import { ProjectCategoryType, ProjectType } from '@/types/project';

export default function ProjectToolbar({ categories, projects }: {
  categories: ProjectCategoryType[];
  projects: ProjectType[];
}) {
  return (
    <div className='relative z-20 py-2 mt-16 mb-12 flex items-center justify-between gap-2 border-y border-dashed backdrop-blur-md backdrop-opacity-50'>
      <ProjectCategories categories={categories} />
      <ProjectSearch projects={projects} />
    </div>
  )
}
