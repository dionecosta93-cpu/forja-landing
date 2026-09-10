import { hero } from '../content/copy.js'
import { track } from '../lib/analytics.js'
import PhoneFrame from './PhoneFrame.jsx'
import Screen from './screens/index.jsx'
import StoreBadges from './StoreBadges.jsx'
import { IconArrow } from './icons.jsx'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className={styles.headline}>
            {hero.headline.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className={styles.sub}>{hero.subheadline}</p>

          <div className={styles.ctas}>
            <a href="#planos" className="btn btn-primary" onClick={() => track('hero_cta_click', { source: 'hero' })}>
              {hero.primaryCta}
            </a>
            <a href="#recursos" className="btn btn-ghost" onClick={() => track('demo_view', { source: 'hero_secondary' })}>
              {hero.secondaryCta} <IconArrow width={18} height={18} />
            </a>
          </div>

          <div className={styles.badges}>
            <StoreBadges source="hero" size="sm" />
          </div>

          <p className={styles.trust}>{hero.trust}</p>
        </div>

        <div className={styles.visual}>
          <PhoneFrame width="clamp(230px, 72vw, 322px)">
            <Screen name="Home" />
          </PhoneFrame>
        </div>
      </div>
    </section>
  )
}
