import { useEffect, useId, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { IconClose, IconMenu, IconWhatsApp } from '@/components/ui/icons'
import { navItems, whatsappUrl } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import type { SectionId } from '@/types'
import buttons from '@/styles/buttons.module.css'
import styles from './Header.module.css'

const SECTION_IDS: SectionId[] = navItems.map((item) => item.id)

export function Header() {
  const [open, setOpen] = useState(false)
  const navId = useId()
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const scrolledSection = useActiveSection(SECTION_IDS, 'inicio', isHome)
  const active: SectionId | null = isHome
    ? scrolledSection
    : pathname.startsWith('/servicios')
      ? 'servicios'
      : pathname.startsWith('/nosotros')
        ? 'nosotros'
        : null

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Logo />

        <nav
          id={navId}
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Navegación principal"
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={`/${item.href}`}
              className={`${styles.link} ${active === item.id ? styles.active : ''}`}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />

          <a
            className={`${buttons.cta} ${styles.cta}`}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            <span className={styles.ctaLong}>Hablemos por WhatsApp</span>
            <span className={styles.ctaShort}>WhatsApp</span>
          </a>

          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={navId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <IconClose /> : <IconMenu />}
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
    </header>
  )
}
