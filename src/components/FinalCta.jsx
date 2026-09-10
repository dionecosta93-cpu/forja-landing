import { finalCta } from '../content/copy.js'
import DownloadCta from './DownloadCta.jsx'
import styles from './FinalCta.module.css'

export default function FinalCta() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.glow} aria-hidden="true" />
        <p className={`eyebrow ${styles.eyebrow} reveal`}>{finalCta.eyebrow}</p>
        <h2 className={`${styles.title} reveal`}>
          {finalCta.title.split('\n').map((l, i) => (
            <span key={i}>{l}<br /></span>
          ))}
        </h2>
        <p className={`${styles.body} reveal`}>{finalCta.body}</p>
        <p className={`${styles.kicker} reveal`}>{finalCta.kicker}</p>
        <div className={`${styles.cta} reveal`}>
          <DownloadCta source="final_cta" align="center" note={finalCta.note} />
        </div>
      </div>
    </section>
  )
}
