import { benefits } from '../content/copy.js'
import { IconClock, IconFlame, IconChart, IconTarget, IconLayers, IconSparkle } from './icons.jsx'
import styles from './Benefits.module.css'

const ICONS = [IconTarget, IconFlame, IconChart, IconClock, IconSparkle, IconLayers]

export default function Benefits() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <p className="eyebrow reveal">{benefits.eyebrow}</p>
        <h2 className="section-title reveal">{benefits.title}</h2>

        <div className={styles.grid}>
          {benefits.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 50}ms` }}>
                <span className={styles.icon}>
                  <Icon width={20} height={20} />
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.body}>{item.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
