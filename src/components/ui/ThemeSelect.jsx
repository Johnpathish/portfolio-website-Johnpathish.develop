import { useId } from 'react'
import { themeOptions } from '../../context/theme-config'
import { useTheme } from '../../hooks/useTheme'

const ThemeSelect = ({ compact = false }) => {
  const { theme, setTheme } = useTheme()
  const selectId = useId()

  if (!compact) {
    return (
      <div className="theme-select" aria-label="Theme selector">
        <p>Theme</p>
        <div className="theme-select__list" role="listbox" aria-label="Theme">
          {themeOptions
            .slice()
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((option) => (
              <button
                key={option.value}
                className={theme === option.value ? 'is-selected' : ''}
                type="button"
                role="option"
                aria-selected={theme === option.value}
                onClick={() => setTheme(option.value)}
              >
                {option.label}
              </button>
            ))}
        </div>
      </div>
    )
  }

  return (
    <label className={`theme-select${compact ? ' theme-select--compact' : ''}`}>
      <span>Theme</span>
      <select
        id={selectId}
        value={theme}
        onChange={(event) => setTheme(event.target.value)}
        aria-label="Select theme"
      >
        {themeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default ThemeSelect
