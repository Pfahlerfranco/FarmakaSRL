import { Link } from 'react-router-dom'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { IconArrowRight } from '@/components/ui/icons'
import { serviciosPage } from '@/data/pages'
import { services } from '@/data/site'
import buttons from '@/styles/buttons.module.css'
import styles from './pages.module.css'

/** Mapa id de servicio → ícono, para reutilizar los mismos de la home. */
const iconById = new Map(services.map((service) => [service.id, service.Icon]))

export default function ServiciosPage() {
  return (
    <>
      <Section id="servicios-detalle" labelledBy="servicios-page-title">
        <div className={styles.pageHead}>
          <Link className={styles.back} to="/#servicios">
            <IconArrowRight />
            Volver al inicio
          </Link>
          <Eyebrow>{serviciosPage.eyebrow}</Eyebrow>
          <h1 id="servicios-page-title" className={styles.pageTitle}>
            {serviciosPage.title}
          </h1>
          <p className={styles.pageIntro}>{serviciosPage.intro}</p>
        </div>

        <ul className={styles.blocks}>
          {serviciosPage.detalle.map((item) => {
            const Icon = iconById.get(item.id)

            return (
              <li key={item.id} className={styles.block}>
                <div className={styles.blockHead}>
                  {Icon && <Icon className={styles.blockIcon} width={24} height={24} />}
                  <h2 className={styles.blockTitle}>{item.title}</h2>
                </div>

                <div>
                  <p className={styles.blockText}>{item.description}</p>
                  <ul className={styles.bullets}>
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className={styles.bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </Section>

      <Section id="proceso" raised labelledBy="proceso-title">
        <Eyebrow>{serviciosPage.proceso.eyebrow}</Eyebrow>
        <h2 id="proceso-title" className={styles.sectionTitle}>
          {serviciosPage.proceso.title}
        </h2>

        <ol className={styles.steps}>
          {serviciosPage.proceso.steps.map((step) => (
            <li key={step.index} className={styles.step}>
              <span className={styles.stepIndex}>{step.index}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="servicios-cta">
        <div className={styles.closing}>
          <p className={styles.closingText}>
            ¿Querés saber si llegamos a tu zona o pedir tu alta como cliente?
          </p>
          <Link className={buttons.cta} to="/#contacto">
            Hacer una consulta
            <IconArrowRight />
          </Link>
        </div>
      </Section>
    </>
  )
}
