export const themes = {
  light: {
    label: 'Light',
    bg: '#ffffff',
    text: '#111111',
    primary: '#2563eb',
  },
  dark: {
    label: 'Dark',
    bg: '#0f172a',
    text: '#f8fafc',
    primary: '#8b5cf6',
  },
  coffee: {
    label: 'Coffee',
    bg: '#2d2424',
    text: '#f5e6ca',
    primary: '#c68b59',
  },
  dream: {
    label: 'Dream',
    bg: '#f3e8ff',
    text: '#4c1d95',
    primary: '#a855f7',
  },
}

export const themeOptions = Object.entries(themes).map(([value, theme]) => ({
  value,
  label: theme.label,
}))

export const THEME_STORAGE_KEY = 'portfolio-theme'
