// Camada de analytics alinhada com src/lib/track.ts do app Forja.
// Desligada por padrão: só envia se VITE_APP_ID e VITE_ANALYTICS_API_URL
// estiverem no .env. Fire-and-forget, nunca lança, sem dados pessoais.
// Envelope: { app_id, event, ts, session_id, user_id, props } -> POST <URL>/events
//
// Eventos da landing: page_view · hero_cta_click · demo_view · pricing_view ·
//                     download_click ({ store: 'apk' | 'web' }) · apk_help_open ·
//                     social_proof_view · faq_open

const APP_ID = (import.meta.env.VITE_APP_ID || '').trim()
const API_URL = (import.meta.env.VITE_ANALYTICS_API_URL || '').trim()
const ENABLED = Boolean(APP_ID && API_URL && typeof window !== 'undefined')

const SESSION_KEY = 'forja-landing-session'

function sessionId() {
  try {
    let id = sessionStorage.getItem(SESSION_KEY)
    if (!id) {
      id = crypto.randomUUID?.() || Math.random().toString(36).slice(2) + Date.now().toString(36)
      sessionStorage.setItem(SESSION_KEY, id)
    }
    return id
  } catch {
    return 'no-session'
  }
}

export function track(event, props = {}) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[track]', event, props)
  }
  if (!ENABLED) return
  try {
    const body = JSON.stringify({
      app_id: APP_ID,
      event,
      ts: Date.now(),
      session_id: sessionId(),
      user_id: null,
      props,
    })
    const url = `${API_URL.replace(/\/$/, '')}/events`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }))
    } else {
      void fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
    }
  } catch {
    /* analytics nunca quebra a página */
  }
}
