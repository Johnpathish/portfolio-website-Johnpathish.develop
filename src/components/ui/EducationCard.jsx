const EducationCard = ({ degree, school, period, location, accent }) => {
  return (
    <article className={`education-card brutal-card education-card--${accent}`}>
      <div className="education-card__top">
        <span className="education-pill education-pill--dark">{period}</span>
      </div>
      <h3>{degree}</h3>
      <p className="education-school">{school}</p>
      <p className="education-location">{location}</p>
    </article>
  )
}

export default EducationCard
