import { useEffect, useState } from 'react'
import { download } from '../content/copy.js'
import { APK_URL, APK_SIZE, APK_VERSION, WEB_APP_URL } from '../content/links.js'
import { track } from '../lib/analytics.js'
import { IconArrow, IconDownload, IconGlobe, IconLock } from './icons.jsx'
import styles from './DownloadCta.module.css'

const webHref = WEB_APP_URL && WEB_APP_URL !== '#' ? WEB_APP_URL : '#planos'

// Fluxo de download direto do APK (sem loja) + elementos de confiança.
// `secondary` = { label, href, event } opcional; `note` = texto que varia por seção.
export default function DownloadCta({
  source = 'unknown',
  align = 'start',
  centerOnMobile = false,
  note,
  secondary,
}) {
  const [helpOpen, setHelpOpen] = useState(false)

  const cls = [
    styles.root,
    align === 'center' ? styles.center : '',
    centerOnMobile ? styles.centerMobile : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls}>
      {note && <p className={styles.note}>{note}</p>}

      <div className={styles.actions}>
        <a
          className={`btn btn-primary ${styles.primary}`}
          href={APK_URL}
          download
          onClick={() => track('download_click', { store: 'apk', source })}
        >
          <IconDownload width={18} height={18} />
          {download.primaryCta}
        </a>
        {secondary && (
          <a
            className={`btn btn-ghost ${styles.secondary}`}
            href={secondary.href}
            onClick={() => secondary.event && track(secondary.event, { source })}
          >
            {secondary.label} <IconArrow width={18} height={18} />
          </a>
        )}
      </div>

      <div className={styles.assurance}>
        <span className={styles.secure}>
          <IconLock width={14} height={14} />
          {download.secure}
        </span>
        <span aria-hidden="true">·</span>
        <span className={styles.meta}>{APK_SIZE} · {APK_VERSION}</span>
        <span aria-hidden="true">·</span>
        <a
          className={styles.browser}
          href={webHref}
          onClick={() => track('download_click', { store: 'web', source })}
        >
          <IconGlobe width={14} height={14} />
          {download.browserCta}
        </a>
      </div>

      <p className={styles.help}>
        {download.helpIntro}{' '}
        <button
          type="button"
          className={styles.helpBtn}
          onClick={() => {
            setHelpOpen(true)
            track('apk_help_open', { source })
          }}
        >
          {download.helpCta}
        </button>
      </p>

      <p className={styles.trust}>{download.trust}</p>

      {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
    </div>
  )
}

function HelpModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const h = download.help
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label={h.title}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHead}>
          <h3>{h.title}</h3>
          <button type="button" className={styles.close} aria-label="Fechar" onClick={onClose}>
            ×
          </button>
        </div>
        <p className={styles.modalIntro}>{h.intro}</p>
        <ol className={styles.steps}>
          {h.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className={styles.modalNote}>
          <IconLock width={14} height={14} />
          {h.note}
        </p>
      </div>
    </div>
  )
}
