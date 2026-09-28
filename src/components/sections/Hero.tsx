import { Eyebrow } from '@/components/ui/Eyebrow'
import { Section } from '@/components/ui/Section'
import { hero, stats } from '@/data/site'
import buttons from '@/styles/buttons.module.css'
import styles from './Hero.module.css'

/** Molécula decorativa del fondo del hero. */
function MoleculeBackdrop() {
  return (
    <svg
      className={styles.moleculeBg}
      width="100%"
      height="100%"
      preserveAspectRatio="xMaxYMin slice"
      viewBox="0 0 500 400"
      aria-hidden
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <line x1="380" y1="60" x2="430" y2="110" />
        <line x1="430" y1="110" x2="470" y2="80" />
        <line x1="380" y1="60" x2="360" y2="130" />
        <line x1="360" y1="130" x2="410" y2="180" />
        <line x1="410" y1="180" x2="470" y2="160" />
      </g>
      <g fill="var(--green)">
        <circle cx="380" cy="60" r="9" />
        <circle cx="360" cy="130" r="6" />
        <circle cx="470" cy="160" r="7" />
      </g>
      <g fill="currentColor">
        <circle cx="430" cy="110" r="10" />
        <circle cx="470" cy="80" r="5" />
        <circle cx="410" cy="180" r="6" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <Section id="inicio" className={styles.hero} labelledBy="hero-title">
      <MoleculeBackdrop />

      <div className={styles.content}>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 id="hero-title" className={styles.title}>
          {hero.title}
        </h1>
        <p className={styles.lead}>{hero.lead}</p>

        <div className={styles.actions}>
          <a className={buttons.cta} href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a className={buttons.btnOutline} href={hero.secondaryCta.href}>
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      <div className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <p className={styles.statNum}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
