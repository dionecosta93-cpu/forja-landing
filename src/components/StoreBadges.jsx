import { PLAY_STORE_URL, WEB_APP_URL } from '../content/links.js'
import { track } from '../lib/analytics.js'
import styles from './StoreBadges.module.css'

const fallback = (url) => (url && url !== '#' ? url : '#planos')

export default function StoreBadges({ source = 'unknown', size = 'md' }) {
  return (
    <div className={`${styles.row} ${styles[size]}`}>
      <a
        className={styles.badge}
        href={fallback(PLAY_STORE_URL)}
        onClick={() => track('download_click', { store: 'play', source })}
        aria-label="Baixar na Google Play"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.ic}>
          <path fill="#22c55e" d="M3.6 2.2c-.3.3-.5.7-.5 1.3v17c0 .6.2 1 .5 1.3l10-10.6-10-9Z" />
          <path fill="#16a34a" d="M17.5 8.4 5.4 1.6 15 11.2l2.5-2.8Z" />
          <path fill="#15803d" d="M17.5 15 15 12.2l-9.6 9.6 12.1-6.8Z" />
          <path fill="#4ade80" d="m21 10.6-3-1.7-2.7 3 2.7 3 3-1.7c.8-.5.8-2 0-2.6Z" />
        </svg>
        <span>
          <small>Baixar na</small>
          <strong>Google Play</strong>
        </span>
      </a>

      <a
        className={`${styles.badge} ${styles.web}`}
        href={fallback(WEB_APP_URL)}
        onClick={() => track('download_click', { store: 'web', source })}
        aria-label="Abrir a Forja no navegador"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.ic} fill="none" stroke="currentColor" strokeWidth="1.7">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
        </svg>
        <span>
          <small>Ou use direto no</small>
          <strong>Navegador</strong>
        </span>
      </a>
    </div>
  )
}
