import { trust } from '../content/copy.js'
import { IconShield } from './icons.jsx'
import styles from './Trust.module.css'

export default function Trust() {
  return (
    <section className="section" id="confianca">
      <div className="container">
        <div className={`${styles.panel} reveal`}>
          <span className={styles.badge}>
            <IconShield width={18} height={18} />
            {trust.eyebrow}
          </span>
          <h2 className={styles.title}>{trust.title}</h2>
          <p className={styles.body}>{trust.body}</p>
        </div>

        <p className={`${styles.philLabel} reveal`}>{trust.philosophyLabel}</p>
        <div className={styles.phil}>
          {trust.philosophy.map((q, i) => (
            <blockquote key={i} className={`${styles.quote} reveal`} style={{ transitionDelay: `${i * 60}ms` }}>
              {q}
            </blockquote>
          ))}
        </div>
        <p className={styles.note}>{trust.note}</p>
      </div>
    </section>
  )
}
