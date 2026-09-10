import { hero } from '../content/copy.js'
import PhoneFrame from './PhoneFrame.jsx'
import Screen from './screens/index.jsx'
import DownloadCta from './DownloadCta.jsx'
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
          <p className={styles.scope}>{hero.scope}</p>

          <div className={styles.ctas}>
            <DownloadCta
              source="hero"
              centerOnMobile
              secondary={{ label: hero.secondaryCta, href: '#recursos', event: 'demo_view' }}
            />
          </div>
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
