import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container projects-section">
        <div className="projects-header">
          <h2>Selected Works</h2>
          <a
            className="section-button"
            href="https://github.com/johnpathish"
            target="_blank"
            rel="noreferrer"
          >
            View All
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
