import { brand, nav } from '../content/copy.js'
import { CONTACT_EMAIL } from '../content/links.js'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo} aria-label={brand.name}>
            <img src="/forja-mark.png" alt="" width="34" height="34" />
            <span>{brand.name}</span>
          </a>
          <p>{brand.tagline}. Feito no Brasil.</p>
        </div>

        <nav className={styles.links}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <a href={`mailto:${CONTACT_EMAIL}`}>Contato</a>
        </nav>
      </div>

      <div className={`container ${styles.legal}`}>
        <span>© {year} {brand.name}</span>
        <span>Android e Web</span>
      </div>
    </footer>
  )
}
