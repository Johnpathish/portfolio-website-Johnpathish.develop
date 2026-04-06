import EducationCard from '../ui/EducationCard'
import ExperienceCard from '../ui/ExperienceCard'
import CodeWidget from '../ui/CodeWidget'
import { education } from '../../data/education'
import { experience } from '../../data/experience'

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container about-stack">
        <div className="about-copy">
          <h2 className="split-title">
            <span>About My</span>
            <span className="split-title__accent">Craft</span>
          </h2>
          <p className="about-lead">
            I&apos;m a frontend developer who believes that the web should be a
            place of <strong>bold expression</strong> and{' '}
            <strong>seamless functionality</strong>.
          </p>
          <p className="section-copy">
            My approach combines technical precision with creative flair,
            turning complex problems into elegant, user-friendly digital
            solutions. I don&apos;t just write code; I craft experiences that
            leave a lasting impression.
          </p>
        </div>

        <div className="section-subhead">
          <h3>Education</h3>
          <span className="section-subhead__line" />
        </div>

        <div className="education-list">
          {education.map((item) => (
            <EducationCard key={item.degree} {...item} />
          ))}
        </div>

        <div className="section-subhead">
          <h3>Experience</h3>
          <span className="section-subhead__line" />
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <ExperienceCard key={item.company} {...item} />
          ))}
        </div>

        <div className="code-widget-wrap">
          <CodeWidget />
        </div>
      </div>
    </section>
  )
}

export default About
