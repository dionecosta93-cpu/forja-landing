import { howItWorks } from '../content/copy.js'
import styles from './HowItWorks.module.css'

export default function HowItWorks() {
  return (
    <section className={`section ${styles.wrap}`} id="como-funciona">
      <div className="container">
        <p className="eyebrow reveal">{howItWorks.eyebrow}</p>
        <h2 className="section-title reveal">{howItWorks.title}</h2>

        <ol className={styles.steps}>
          {howItWorks.steps.map((step, i) => (
            <li key={step.n} className={`${styles.step} reveal`} style={{ transitionDelay: `${i * 70}ms` }}>
              <span className={styles.n}>{step.n}</span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.body}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
