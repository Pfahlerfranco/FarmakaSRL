import { Link } from 'react-router-dom'
import { Section } from '@/components/ui/Section'
import buttons from '@/styles/buttons.module.css'
import styles from './pages.module.css'

export default function NotFound() {
  return (
    <Section id="no-encontrado" labelledBy="not-found-title">
      <div className={styles.notFound}>
        <p className={styles.notFoundCode}>ERROR 404</p>
        <h1 id="not-found-title" className={styles.pageTitle}>
          Esta página no existe.
        </h1>
        <div className={styles.notFoundActions}>
          <Link className={buttons.cta} to="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </Section>
  )
}
