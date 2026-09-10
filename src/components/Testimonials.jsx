import { useEffect, useRef } from 'react'
import { testimonials, testimonialsMeta } from '../content/testimonials.js'
import { IconShield } from './icons.jsx'
import { track } from '../lib/analytics.js'
import styles from './Testimonials.module.css'

// Paleta de avatar — escolhida de forma determinística pelo nome.
const AVATARS = [
  { fg: 'var(--green)', bg: 'var(--green-dim)' },
  { fg: 'var(--blue)', bg: 'var(--blue-dim)' },
  { fg: 'var(--purple)', bg: 'rgba(167, 139, 250, 0.14)' },
  { fg: 'var(--orange)', bg: 'var(--orange-dim)' },
]

function initials(nome) {
  return nome
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function avatarStyle(nome) {
  const sum = [...nome].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  const { fg, bg } = AVATARS[sum % AVATARS.length]
  return { color: fg, background: bg }
}

export default function Testimonials() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('social_proof_view')
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="section" id="depoimentos" ref={ref}>
      <div className="container">
        <span className={`${styles.badge} reveal`}>
          <IconShield width={16} height={16} />
          {testimonialsMeta.badge}
        </span>
        <p className="eyebrow reveal">{testimonialsMeta.eyebrow}</p>
        <h2 className="section-title reveal">{testimonialsMeta.title}</h2>
        <p className="section-lead reveal">{testimonialsMeta.lead}</p>

        <ul className={styles.track}>
          {testimonials.map((t, i) => (
            <li key={i} className={`${styles.card} reveal`} style={{ transitionDelay: `${(i % 3) * 60}ms` }}>
              <div className={styles.head}>
                <span className={styles.avatar} style={avatarStyle(t.nome)} aria-hidden="true">
                  {initials(t.nome)}
                </span>
                <span className={styles.who}>
                  <strong>{t.nome}</strong>
                  <span className={styles.local}>{t.local}</span>
                </span>
              </div>
              <blockquote className={styles.quote}>{t.depoimento}</blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
