import { useEffect, useState } from 'react'

export const useScrollSpy = (sectionIds, offset = 120) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const handleScroll = () => {
      const currentSection =
        sectionIds.find((id) => {
          const element = document.getElementById(id)

          if (!element) {
            return false
          }

          const rect = element.getBoundingClientRect()
          return rect.top <= offset && rect.bottom >= offset
        }) ?? sectionIds[0]

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [offset, sectionIds])

  return activeSection
}
