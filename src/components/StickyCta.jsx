import { useEffect, useState } from 'react'
import { hero } from '../content/copy.js'
import { IconBolt } from './icons.jsx'
import { track } from '../lib/analytics.js'
import styles from './StickyCta.module.css'

export default function StickyCta() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`${styles.bar} ${show ? styles.show : ''}`} aria-hidden={!show}>
      <a
        href="#planos"
        className="btn btn-primary"
        tabIndex={show ? 0 : -1}
        onClick={() => track('hero_cta_click', { source: 'sticky_mobile' })}
      >
        <IconBolt width={18} height={18} />
        {hero.primaryCta}
      </a>
    </div>
  )
}
