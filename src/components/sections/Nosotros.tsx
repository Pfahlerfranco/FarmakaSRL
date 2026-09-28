import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { IconArrowRight } from '@/components/ui/icons'
import { about, values } from '@/data/site'
import buttons from '@/styles/buttons.module.css'
import styles from './Nosotros.module.css'

export function Nosotros() {
  return (
    <Section id="nosotros" raised labelledBy="nosotros-title">
      <div className={styles.layout}>
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 id="nosotros-title" className={styles.title}>
            {about.title}
          </h2>

          <div className={styles.copy}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <ul className={styles.badges}>
            {about.badges.map((badge) => (
              <li key={badge} className={styles.badge}>
                {badge}
              </li>
            ))}
          </ul>

          <div className={styles.more}>
            <Link className={buttons.btnOutline} to="/nosotros">
              Ver más
              <IconArrowRight />
            </Link>
          </div>
        </div>

        <ul className={styles.values}>
          {values.map((value) => (
            <li key={value.index} className={styles.value}>
              <span className={styles.valueIndex} aria-hidden>
                {value.index}
              </span>
              <div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
