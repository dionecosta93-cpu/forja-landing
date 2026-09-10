import { problem } from '../content/copy.js'
import styles from './Problem.module.css'

export default function Problem() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <p className="eyebrow reveal">{problem.eyebrow}</p>
        <h2 className="section-title reveal">{problem.title}</h2>

        <ul className={styles.grid}>
          {problem.items.map((item, i) => (
            <li key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              <span className={styles.mark} aria-hidden="true">✕</span>
              <div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
