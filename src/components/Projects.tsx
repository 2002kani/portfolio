import ProjectCard from "./ProjectCard"
import { projects } from "../utils/constants"

const Projects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {projects && projects.map((project) => (
          <ProjectCard
          project_link={project.link}
          project_new={project.new}
          image={project.img_src}
          key={project.label}
          project_label={project.label} 
          project_section={project.section} 
          project_badges={project.badges}
          />
        ))}
    </div>
  )
}

export default Projects