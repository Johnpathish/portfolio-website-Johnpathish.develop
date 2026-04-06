import SkillCard from '../ui/SkillCard'
import { learningCards, skillCards } from '../../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container skills-section">
        <h2 className="skills-title">
          My <span>Skills</span>
        </h2>

        <div className="skills-icon-grid">
          {skillCards.map((skill) => (
            <SkillCard key={skill.label} {...skill} />
          ))}
        </div>

        <div className="learning-grid">
          {learningCards.map((card) => (
            <article
              key={card.title}
              className={`learning-card learning-card--${card.variant}`}
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
