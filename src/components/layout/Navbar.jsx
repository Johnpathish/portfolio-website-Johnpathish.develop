const Navbar = ({ items, activeSection }) => {
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

          <a className="nav-cta" href="#contact">
            Hire Me
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
