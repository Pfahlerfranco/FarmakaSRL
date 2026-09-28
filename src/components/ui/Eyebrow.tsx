import type { ReactNode } from 'react'
import styles from './Eyebrow.module.css'

/** Antetítulo monoespaciado con guion verde, usado en todas las secciones. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>
}
