import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ThemeSelect from '../ui/ThemeSelect'

const MotionDiv = motion.div
const MotionAside = motion.aside

const Navbar = ({ items, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-shell brutal-card">
          <a className="brand-mark" href="#hero" aria-label="Go to home section">
            <span className="window-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-divider" />
            <span>JOHNPATHISH</span>
          </a>

          <nav className="nav-links" aria-label="Primary navigation">
            {items.map((item) => (
              <a
                key={item.id}
                className={activeSection === item.id ? 'is-active' : ''}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="desktop-theme">
            <ThemeSelect compact />
          </div>

          <a className="nav-cta" href="#contact">
            Hire Me
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <MotionDiv
            className="mobile-drawer-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="mobile-drawer-backdrop"
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
            />
            <MotionAside
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
              aria-label="Mobile navigation"
            >
              <div className="mobile-drawer__top">
                <h2>Portfolio</h2>
                <button
                  className="mobile-drawer__close"
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <nav className="mobile-drawer__links">
                {items.map((item) => (
                  <a
                    key={item.id}
                    className={activeSection === item.id ? 'is-active' : ''}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <ThemeSelect />
            </MotionAside>
          </MotionDiv>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
