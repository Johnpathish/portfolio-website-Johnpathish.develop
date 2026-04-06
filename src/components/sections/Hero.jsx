import Button from '../ui/Button'
import ProfileCard from '../ui/ProfileCard'

const Hero = () => {
  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-layout">
        <div className="hero-copy">
          <div className="hero-pill">👋 Welcome to my workspace</div>
          <h1 className="hero-title">
            <span>Crafting</span>
            <span className="hero-title__accent">Digital</span>
            <span>Magic</span>
          </h1>
          <p className="hero-copy__body">
            Frontend developer specializing in building interfaces that are as
            bold as they are functional.
          </p>
          <div className="button-row hero-actions">
            <Button href="#projects">Explore Projects</Button>
            <Button
              href="/resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Check Resume
            </Button>
          </div>
        </div>

        <div className="hero-visuals">
          <ProfileCard
            image="/profile_v2.jpg"
            tags={['React Dev', 'Web Dev']}
            availability="Available for freelance"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
