import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import ProfileCard from '../ui/ProfileCard'

const typingText = 'Frontend Developer & React Developer'
const MotionDiv = motion.div

const Hero = () => {
  const [typedRole, setTypedRole] = useState('')

  useEffect(() => {
    let index = 0
    const interval = window.setInterval(() => {
      index += 1
      setTypedRole(typingText.slice(0, index))

      if (index >= typingText.length) {
        window.clearInterval(interval)
      }
    }, 55)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="section hero-section">
      <div className="container hero-layout">
        <MotionDiv
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
        >
          <div className="hero-pill">Hi, I'm JohnPathish</div>
          <h1 className="hero-title">
            <span>Modern</span>
            <span className="hero-title__accent">React</span>
            <span>Developer</span>
          </h1>
          <p className="hero-role" aria-label={typingText}>
            {typedRole}
            <span aria-hidden="true" className="typing-caret" />
          </p>
          <p className="hero-copy__body">
            I build modern, responsive, and user-friendly web applications using
            React, JavaScript, HTML, CSS, and REST APIs.
          </p>
          <div className="button-row hero-actions">
            <Button href="#projects">View Projects</Button>
            <Button
              href="/resume.pdf"
              variant="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </MotionDiv>

        <MotionDiv
          className="hero-visuals"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <ProfileCard
            image="/profile_v2.jpg"
            tags={['React Dev', 'Web Dev']}
            availability="Available for freelance"
          />
        </MotionDiv>
      </div>
    </section>
  )
}

export default Hero
