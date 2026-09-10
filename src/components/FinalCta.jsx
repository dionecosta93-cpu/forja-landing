import { finalCta } from '../content/copy.js'
import StoreBadges from './StoreBadges.jsx'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.glow} aria-hidden="true" />
        <h2 className={`${styles.title} reveal`}>
          {finalCta.title.split('\n').map((l, i) => (
            <span key={i}>{l}<br /></span>
          ))}
        </h2>
        <p className={`${styles.body} reveal`}>{finalCta.body}</p>
        <div className={`${styles.badges} reveal`}>
          <StoreBadges source="final_cta" />
        </div>
      </div>
    </section>
  )
}
