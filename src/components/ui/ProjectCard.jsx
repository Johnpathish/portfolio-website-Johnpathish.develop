import { motion } from 'framer-motion'

const MotionArticle = motion.article

const ProjectCard = ({
  title,
  category,
  description,
  image,
  frameColor,
  live,
  demoUrl,
  github,
  repoUrl,
  technologies,
  features = [],
  featured,
  summary,
}) => {
  const projectUrl = demoUrl || live
  const sourceUrl = repoUrl || github
  const projectSummary = summary || description
  const techStack = technologies || []

  return (
    <MotionArticle
      className={`project-card brutal-card${featured ? ' project-card--featured' : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <a
        className="project-shot"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        style={{ '--frame-color': frameColor || 'var(--primary)' }}
      >
        <img src={image} alt={`${title} website preview`} />
      </a>

      <div className="project-card__body">
        <div className="project-card__eyebrow">
          <span>{featured ? 'Featured Project' : category}</span>
        </div>
        <h3>{title}</h3>
        <p className="project-summary">{projectSummary}</p>

        {features.length > 0 ? (
          <div className="project-feature-list" aria-label="Project features">
            {features.map((feature) => (
              <span key={feature}>{feature}</span>
            ))}
          </div>
        ) : null}

        {techStack.length > 0 ? (
          <div className="tech-stack" aria-label="Tech stack">
            {techStack.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        ) : null}

        <div className="project-links">
          <a href={projectUrl} target="_blank" rel="noreferrer">
            Live Demo
          </a>
          {sourceUrl ? (
            <a href={sourceUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </MotionArticle>
  )
}

export default ProjectCard
