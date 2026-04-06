const ExperienceCard = ({
  company,
  period,
  role,
  project,
  summary,
  accent,
}) => {
  return (
    <article className={`experience-card brutal-card experience-card--${accent}`}>
      <div className="experience-card__top">
        <span className="education-pill education-pill--dark">{period}</span>
        <span className="education-pill education-pill--score">Present</span>
      </div>
      <h3>{company}</h3>
      <p className="experience-role">{role}</p>
      <p className="experience-project">{project}</p>
      <p className="experience-summary">{summary}</p>
    </article>
  )
}

export default ExperienceCard
