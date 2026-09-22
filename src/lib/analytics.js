// Camada de analytics alinhada com src/lib/track.ts do app Forja e com o
// contrato do Codane Analytics (POST /api/events).
// Desligada por padrão: só envia se VITE_APP_ID, VITE_ANALYTICS_API_URL e
// VITE_ANALYTICS_INGEST_KEY estiverem no .env. Fire-and-forget, nunca lança,
// sem dados pessoais.
// Envelope: { app_id, ingest_key, event, user_id, timestamp, platform, properties }
// -> POST <URL>/api/events
//
// Mesmo app_id do app Forja: a landing e o app compartilham um único
// "aplicativo" no painel, para medir o funil completo (visita → clique em
// baixar → uso no app) num só lugar.
//
// Eventos da landing: page_view · hero_cta_click · demo_view · pricing_view ·
//                     download_click ({ store: 'apk' | 'web' }) · apk_help_open ·
//                     social_proof_view · faq_open

const APP_ID = (import.meta.env.VITE_APP_ID || '').trim()
const API_URL = (import.meta.env.VITE_ANALYTICS_API_URL || '').trim()
const INGEST_KEY = (import.meta.env.VITE_ANALYTICS_INGEST_KEY || '').trim()
const ENABLED = Boolean(APP_ID && API_URL && INGEST_KEY && typeof window !== 'undefined')

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
      ingest_key: INGEST_KEY,
      event,
      user_id: null,
      timestamp: new Date().toISOString(),
      platform: 'web',
      properties: { session_id: sessionId(), ...props },
    })
    const url = `${API_URL.replace(/\/$/, '')}/api/events`
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, new Blob([body], { type: 'application/json' }))
    } else {
      void fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, keepalive: true }).catch(() => {})
    }
  } catch {
    /* analytics nunca quebra a página */
  }
}
