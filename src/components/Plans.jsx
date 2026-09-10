import { useEffect, useRef } from 'react'
import { plans, demoNote } from '../content/plans.js'
import { IconCheck } from './icons.jsx'
import DownloadCta from './DownloadCta.jsx'
import { track } from '../lib/analytics.js'
import styles from './Plans.module.css'

export default function Plans() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('pricing_view')
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className={`section ${styles.wrap}`} id="planos" ref={ref}>
      <div className="container">
        <p className="eyebrow reveal">Planos</p>
        <h2 className="section-title reveal">Comece grátis. Suba quando fizer sentido.</h2>

        <div className={`${styles.demo} reveal`}>
          <strong>{demoNote.label}</strong>
          <span>{demoNote.text}</span>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${styles.card} ${plan.highlight ? styles.highlight : ''} reveal`}
            >
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
              <h3 className={styles.name}>{plan.name}</h3>
              <p className={styles.price}>
                {plan.price}
                {plan.period && <span>{plan.period}</span>}
              </p>
              <p className={styles.summary}>{plan.summary}</p>
              <ul className={styles.features}>
                {plan.features.map((f, i) => (
                  <li key={i}>
                    <IconCheck width={17} height={17} className={styles.check} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`btn ${plan.highlight ? 'btn-primary' : 'btn-ghost'} ${styles.cta}`}
                onClick={() => track('download_click', { source: 'plans', plan: plan.id })}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className={styles.foot} id="download">
          <p>Android e navegador · sincroniza na nuvem</p>
          <DownloadCta source="plans" align="center" />
        </div>
      </div>
    </section>
  )
}
