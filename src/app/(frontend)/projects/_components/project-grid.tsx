import ProjectCard from './project-card';
import { ProjectType } from '@/types/project';

export default function ProjectGrid({ projects }: {
  projects: ProjectType[];
}) {
  return (
    <ul className='grid grid-cols-3 gap-8'>
      {projects.map((project: ProjectType) => (
        <li key={project._id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  )
}