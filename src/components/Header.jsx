import { useEffect, useState } from 'react'
import { brand, hero, nav } from '../content/copy.js'
import { track } from '../lib/analytics.js'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.logo} aria-label={brand.name}>
          <img src="/forja-mark.png" alt="" width="30" height="30" />
          <span>{brand.name}</span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            href="#planos"
            className="btn btn-primary"
            onClick={() => track('hero_cta_click', { source: 'header' })}
          >
            {hero.primaryCta}
          </a>
          <button
            className={styles.burger}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
