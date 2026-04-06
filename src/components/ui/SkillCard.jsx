const SkillCard = ({ label, icon, color }) => {
  return (
    <article className="skill-tile brutal-card">
      <div className="skill-icon" style={{ color }}>
        {icon}
      </div>
      <p>{label}</p>
    </article>
  )
}

export default SkillCard
