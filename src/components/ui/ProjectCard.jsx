const ProjectCard = ({
  title,
  category,
  image,
  frameColor,
  demoUrl,
  repoUrl,
  summary,
}) => {
  return (
    <article className="project-card">
      <a
        className="project-shot brutal-card"
        href={demoUrl}
        target="_blank"
        rel="noreferrer"
        style={{ '--frame-color': frameColor }}
      >
        <img src={image} alt={title} />
      </a>

      <div className="project-card__meta">
        <p className="project-category">{category}</p>
        <div className="project-links">
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer">
              GH
            </a>
          ) : null}
          <a href={demoUrl} target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      </div>

      <h3>{title}</h3>
      {summary ? <p className="project-summary">{summary}</p> : null}
    </article>
  )
}

export default ProjectCard
