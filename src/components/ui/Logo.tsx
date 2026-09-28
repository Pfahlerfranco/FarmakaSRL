import { Link } from 'react-router-dom'
import styles from './Logo.module.css'

interface LogoProps {
  size?: number
  compact?: boolean
  href?: string
}

export function Logo({ size = 34, compact = false, href = '/' }: LogoProps) {
  const content = (
    <>
      <svg
        className={styles.mark}
        width={size}
        height={size}
        viewBox="0 0 34 34"
        aria-hidden
        focusable="false"
      >
        <g fill="none" strokeLinecap="round">
          <line x1="9" y1="21" x2="17" y2="13" stroke="var(--ink)" strokeWidth="1.4" />
          <line x1="17" y1="13" x2="25" y2="19" stroke="var(--ink)" strokeWidth="1.4" />
          <line x1="9" y1="21" x2="14" y2="27" stroke="var(--ink)" strokeWidth="1.4" />
          <line x1="17" y1="13" x2="23" y2="9" stroke="var(--ink)" strokeWidth="1.4" />
          <circle cx="9" cy="21" r="3" fill="var(--ink)" />
          <circle cx="17" cy="13" r="3.6" fill="var(--green)" />
          <circle cx="25" cy="19" r="2.6" fill="var(--ink)" />
          <circle cx="14" cy="27" r="2.2" fill="var(--green)" />
          <circle cx="23" cy="9" r="2" fill="var(--green)" />
        </g>
      </svg>
      <span className={styles.word}>
        <span className={styles.name}>
          FARM<b>A</b>KA
        </span>
        {!compact && <span className={styles.sub}>Droguería</span>}
      </span>
    </>
  )

  const className = compact ? `${styles.brand} ${styles.compact}` : styles.brand

  if (!href) {
    return (
      <span className={className}>
        <span className="sr-only">Farmaka SRL — Droguería</span>
        {content}
      </span>
    )
  }

  return (
    <Link className={className} to={href} aria-label="Farmaka SRL — Ir al inicio">
      {content}
    </Link>
  )
}
