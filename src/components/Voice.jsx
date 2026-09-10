import { voice } from '../content/copy.js'
import { IconMic, IconArrow, IconCheck } from './icons.jsx'
import styles from './Voice.module.css'

export default function Voice() {
  return (
    <section className={`section ${styles.wrap}`} id="voz">
      <div className="container">
        <p className="eyebrow reveal">{voice.eyebrow}</p>
        <h2 className="section-title reveal">{voice.title}</h2>
        <p className="section-lead reveal">{voice.subtitle}</p>

        <div className={styles.examples}>
          {voice.examples.map((ex, i) => (
            <div key={i} className={`${styles.row} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              <p className={styles.say}>
                <span className={styles.mic} aria-hidden="true">
                  <IconMic width={16} height={16} />
                </span>
                <span>&ldquo;{ex.say}&rdquo;</span>
              </p>
              <IconArrow className={styles.arrow} width={22} height={22} aria-hidden="true" />
              <p className={styles.result}>{ex.result}</p>
            </div>
          ))}
        </div>

        <ul className={styles.bullets}>
          {voice.bullets.map((b, i) => (
            <li key={i} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <IconCheck width={18} height={18} className={styles.check} />
              {b}
            </li>
          ))}
        </ul>

        <div className={styles.limits}>
          {voice.limits.map((l, i) => (
            <div
              key={i}
              className={`${styles.limit} ${l.highlight ? styles.limitHi : ''} reveal`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className={styles.limitPlan}>{l.plan}</span>
              <p className={styles.limitText}>{l.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
