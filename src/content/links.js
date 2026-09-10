// -----------------------------------------------------------------------------
// O app Forja é distribuído como APK direto pelo site (sem loja) e roda também
// no navegador (TanStack Start SSR + PWA). Não há projeto iOS no código-fonte.
//
// PENDÊNCIAS: preencher com os valores reais antes de publicar.
//   - APK_URL: caminho do .apk. O arquivo vai em `public/downloads/forja.apk`
//     e é servido em `/downloads/forja.apk` no build.
//   - APK_SIZE / APK_VERSION: tamanho e versão exibidos ao lado do botão.
//   - WEB_APP_URL: domínio onde o app web estará hospedado ("#" -> rola até planos).
//   - CONTACT_EMAIL: e-mail real de contato/suporte.
//   - LEGAL_NOTICE: razão social + CNPJ do responsável, se houver. Vazio = não exibe.
// -----------------------------------------------------------------------------

export const APK_URL = '/downloads/forja.apk'
export const APK_SIZE = '12 MB'
export const APK_VERSION = 'v1.0.0'

export const WEB_APP_URL = '#'

export const CONTACT_EMAIL = 'contato@forja.app' // PENDÊNCIA: e-mail real
export const PRIVACY_URL = '/privacidade.html'

// PENDÊNCIA: ex. "Fulano de Tal ME · CNPJ 00.000.000/0001-00". Vazio enquanto não houver.
export const LEGAL_NOTICE = ''

// Analytics: mesma camada do app (src/lib/track.ts). Desligada sem VITE_APP_ID
// e VITE_ANALYTICS_API_URL no .env.
