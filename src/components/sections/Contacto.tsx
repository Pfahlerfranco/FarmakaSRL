import { ContactForm } from './ContactForm'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { IconWhatsApp } from '@/components/ui/icons'
import { contact, contactSection, whatsappUrl } from '@/data/site'
import buttons from '@/styles/buttons.module.css'
import styles from './Contacto.module.css'

/** Convierte "(011) 4687-3488" en un href tel: usable. */
function telHref(phone: string): string {
  return `tel:+54${phone.replace(/\D/g, '').replace(/^0/, '')}`
}

// z=14 encuadra el barrio completo: se ubica la zona sin exponer la puerta del depósito.
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  contact.mapQuery,
)}&z=14&output=embed`

export function Contacto() {
  return (
    <Section id="contacto" labelledBy="contacto-title">
      <div className={styles.layout}>
        <div>
          <Eyebrow>{contactSection.eyebrow}</Eyebrow>
          <h2 id="contacto-title" className={styles.title}>
            {contactSection.title}
          </h2>
          <ContactForm />
        </div>

        <div className={styles.aside}>
          <dl className={styles.infoCard}>
            <div className={styles.infoRow}>
              <dt>Dirección</dt>
              <dd>{contact.address}</dd>
            </div>
            <div className={styles.infoRow}>
              <dt>Teléfono / Fax</dt>
              <dd>
                <span className={styles.phones}>
                  {contact.phones.map((phone) => (
                    <a key={phone} href={telHref(phone)}>
                      {phone}
                    </a>
                  ))}
                </span>
              </dd>
            </div>
            <div className={styles.infoRow}>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
            <div className={styles.infoRow}>
              <dt>Horarios</dt>
              <dd>{contact.hours}</dd>
            </div>
          </dl>

          <iframe
            className={styles.map}
            src={mapSrc}
            title={`Mapa de la zona: ${contact.address}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className={styles.whatsBlock}>
            <a
              className={buttons.cta}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp />
              Escribinos por WhatsApp
            </a>
            <p className={styles.whatsNote}>
              Para pedidos urgentes, el canal de WhatsApp tiene respuesta más rápida en horario
              comercial.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
