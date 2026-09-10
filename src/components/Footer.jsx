import { brand, nav } from '../content/copy.js'
import { CONTACT_EMAIL, PRIVACY_URL, LEGAL_NOTICE } from '../content/links.js'
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
          <a href={`mailto:${CONTACT_EMAIL}?subject=Suporte%20Forja`}>Suporte</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contato</a>
          <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">Política de privacidade</a>
        </nav>
      </div>

      <div className={`container ${styles.legal}`}>
        <span>© {year} {brand.name}{LEGAL_NOTICE ? ` · ${LEGAL_NOTICE}` : ''}</span>
        <span>
          Android e Web · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </span>
      </div>
    </footer>
  )
}
