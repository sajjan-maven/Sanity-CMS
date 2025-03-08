import ProjectCard from './project-card';
import { ProjectType } from '@/types/project';

export default function ProjectGrid({ projects }: {
  projects: ProjectType[];
}) {
  return (
    <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
      {projects.map((project: ProjectType) => (
        <ProjectCard 
          key={project._id} 
          project={project} 
        />
      ))}
    </div>
  )
}