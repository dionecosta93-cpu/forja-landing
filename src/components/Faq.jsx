import { useState } from 'react'
import { faq } from '../content/faq.js'
import { IconChevron } from './icons.jsx'
import { track } from '../lib/analytics.js'
import styles from './Faq.module.css'

export default function Faq() {
  const [open, setOpen] = useState(0)

  const toggle = (i) => {
    setOpen((cur) => {
      const next = cur === i ? -1 : i
      if (next === i) track('faq_open', { index: i, question: faq[i].q })
      return next
    })
  }

  return (
    <section className="section" id="faq">
      <div className="container">
        <p className="eyebrow reveal">FAQ</p>
        <h2 className="section-title reveal">Ainda com dúvida?</h2>

        <div className={styles.list}>
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.open : ''} reveal`}>
                <button
                  className={styles.q}
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  <span>{item.q}</span>
                  <IconChevron width={20} height={20} className={styles.chev} />
                </button>
                <div className={styles.aWrap} hidden={!isOpen}>
                  <p className={styles.a}>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
