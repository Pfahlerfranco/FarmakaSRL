import { IconMoon, IconSun } from './icons'
import { useTheme } from '@/hooks/useTheme'
import styles from './ThemeToggle.module.css'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  const label = isDark ? 'Activar modo claro' : 'Activar modo noche'

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
    >
      {isDark ? <IconSun /> : <IconMoon />}
    </button>
  )
}
