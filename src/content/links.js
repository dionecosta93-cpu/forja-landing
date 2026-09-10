// -----------------------------------------------------------------------------
// O app Forja é empacotado para Android (Capacitor) e roda também no navegador
// (TanStack Start SSR + PWA). Não há projeto iOS no código-fonte.
//
// PENDÊNCIA: preencher com as URLs reais quando publicado.
//   - PLAY_STORE_URL: link da ficha na Google Play
//   - WEB_APP_URL: domínio onde o app web estará hospedado
// Enquanto forem "#", os CTAs rolam até a seção de planos.
// -----------------------------------------------------------------------------
export const PLAY_STORE_URL = '#'
export const WEB_APP_URL = '#'

export const CONTACT_EMAIL = 'contato@forja.app' // PENDÊNCIA: e-mail real

// Analytics: mesma camada do app (src/lib/track.ts). Desligada sem estes valores.
// Defina no .env: VITE_APP_ID e VITE_ANALYTICS_API_URL
export const hasStoreLinks = PLAY_STORE_URL !== '#'
