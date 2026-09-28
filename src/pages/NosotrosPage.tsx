import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { IconArrowRight } from '@/components/ui/icons'
import { nosotrosPage } from '@/data/pages'
import buttons from '@/styles/buttons.module.css'
import styles from './pages.module.css'

export default function NosotrosPage() {
  return (
    <>
      <Section id="nosotros-detalle" labelledBy="nosotros-page-title">
        <div className={styles.pageHead}>
          <Link className={styles.back} to="/#nosotros">
            <IconArrowRight />
            Volver al inicio
          </Link>
          <Eyebrow>{nosotrosPage.eyebrow}</Eyebrow>
          <h1 id="nosotros-page-title" className={styles.pageTitle}>
            {nosotrosPage.title}
          </h1>
          <p className={styles.pageIntro}>{nosotrosPage.intro}</p>
        </div>

        <div className={styles.prose}>
          {nosotrosPage.historia.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="valores" raised labelledBy="valores-title">
        <Eyebrow>Cómo trabajamos</Eyebrow>
        <h2 id="valores-title" className={styles.sectionTitle}>
          Tres cosas que no negociamos.
        </h2>

        <ol className={styles.steps}>
          {nosotrosPage.valores.map((valor) => (
            <li key={valor.index} className={styles.step}>
              <span className={styles.stepIndex}>{valor.index}</span>
              <h3 className={styles.stepTitle}>{valor.title}</h3>
              <p className={styles.stepText}>{valor.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="cumplimiento" labelledBy="cumplimiento-title">
        <Eyebrow>{nosotrosPage.cumplimiento.eyebrow}</Eyebrow>
        <h2 id="cumplimiento-title" className={styles.sectionTitle}>
          {nosotrosPage.cumplimiento.title}
        </h2>
        <p className={styles.pageIntro}>{nosotrosPage.cumplimiento.intro}</p>

        <ul className={styles.compliance}>
          {nosotrosPage.cumplimiento.items.map((item) => (
            <li key={item.title} className={styles.complianceItem}>
              <h3 className={styles.complianceTitle}>{item.title}</h3>
              <p className={styles.complianceText}>{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="nosotros-cta" raised>
        <div className={styles.closing}>
          <p className={styles.closingText}>
            Si querés trabajar con nosotros, el primer paso es una consulta.
          </p>
          <Link className={buttons.cta} to="/#contacto">
            Pedir el alta como cliente
            <IconArrowRight />
          </Link>
        </div>
      </Section>
    </>
  )
}
