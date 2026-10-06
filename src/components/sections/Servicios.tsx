import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { IconArrowRight } from '@/components/ui/icons'
import { services } from '@/data/site'
import buttons from '@/styles/buttons.module.css'
import styles from './Servicios.module.css'

export function Servicios() {
  return (
    <Section id="servicios" labelledBy="servicios-title">
      <Eyebrow>Qué hacemos</Eyebrow>
      <h2 id="servicios-title" className={styles.title}>
        Servicios para toda la cadena de suministro de salud.
      </h2>

      <ul className={styles.grid}>
        {services
          .filter((service) => service.showOnHome !== false)
          .map(({ id, title, description, Icon }) => (
          <li key={id} className={styles.card}>
            <Icon className={styles.icon} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardText}>{description}</p>
          </li>
        ))}
      </ul>

      <div className={styles.more}>
        <Link className={buttons.btnOutline} to="/servicios">
          Ver más
          <IconArrowRight />
        </Link>
      </div>
    </Section>
  )
}
