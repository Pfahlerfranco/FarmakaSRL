import { IconWhatsApp } from './icons'
import { whatsappUrl } from '@/data/site'
import styles from './WhatsAppFab.module.css'

/** Botón flotante de contacto rápido, siempre visible. */
export function WhatsAppFab() {
  return (
    <a
      className={styles.fab}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      title="Escribinos por WhatsApp"
    >
      <IconWhatsApp width={26} height={26} />
    </a>
  )
}
