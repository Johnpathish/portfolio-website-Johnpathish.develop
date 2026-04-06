import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { useScrollSpy } from './hooks/useScrollSpy'

const navigationItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const activeSection = useScrollSpy(
    navigationItems.map((item) => item.id),
    140,
  )

  return (
    <div className="app-shell">
      <Navbar items={navigationItems} activeSection={activeSection} />
      <main className="page">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
