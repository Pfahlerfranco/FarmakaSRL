import { Link } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { company, contact, navItems } from '@/data/site'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Logo compact />

        <nav className={styles.links} aria-label="Navegación del pie">
          {navItems.map((item) => (
            <Link key={item.id} to={`/${item.href}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.legal}>
          <span>
            © {year} {company.legalName} — {company.tagline}
          </span>
          <span>{contact.address}</span>
        </div>
      </div>
    </footer>
  )
}
