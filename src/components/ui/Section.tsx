import type { ReactNode } from 'react'
import styles from './Section.module.css'

interface SectionProps {
  id: string
  children: ReactNode
  /** Usa el fondo elevado para alternar el ritmo visual entre secciones. */
  raised?: boolean
  /** Clases extra aplicadas al <section>. */
  className?: string
  /** Id del elemento que titula la sección, para aria-labelledby. */
  labelledBy?: string
}

/** Contenedor estándar de sección: padding, borde inferior y ancho máximo. */
export function Section({ id, children, raised, className, labelledBy }: SectionProps) {
  const classes = [styles.section, raised && styles.raised, className].filter(Boolean).join(' ')

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}
