import { differentiators } from '../content/copy.js'
import styles from './Differentiators.module.css'

export default function Differentiators() {
  return (
    <section className={`section ${styles.wrap}`} id="diferenciais">
      <div className="container">
        <p className="eyebrow reveal">{differentiators.eyebrow}</p>
        <h2 className="section-title reveal">{differentiators.title}</h2>

        <div className={styles.grid}>
          {differentiators.items.map((item, i) => (
            <div key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className={styles.bar} aria-hidden="true" />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
