import { useEffect, useMemo, useState } from 'react'
import { THEME_STORAGE_KEY, themes } from './theme-config'
import { ThemeContext } from './theme-context'

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
    return themes[savedTheme] ? savedTheme : 'light'
  })

  useEffect(() => {
    const themeConfig = themes[theme]
    const root = document.documentElement

    root.dataset.theme = theme
    root.style.setProperty('--bg', themeConfig.bg)
    root.style.setProperty('--text', themeConfig.text)
    root.style.setProperty('--primary', themeConfig.primary)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const value = useMemo(
    () => ({
      theme,
      themes,
      setTheme: (nextTheme) => {
        if (themes[nextTheme]) {
          setThemeState(nextTheme)
        }
      },
    }),
    [theme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
