# Landing page — Forja

Landing page de alta conversão para o app **Forja** (disciplina e produtividade
gamificada). Feita para receber tráfego pago e levar o visitante ao download.

- **Stack:** Vite + React (JSX), CSS puro com CSS Modules, fontes self-hosted (`@fontsource`).
- **Fonte de conteúdo:** código-fonte do app em `../app forja` (planos, paleta, textos,
  citações) + os screenshots enviados. As telas do app são **recriações fiéis em HTML/CSS**
  (mesmos dados e layout), não imagens.

## Rodar

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # http://localhost:4173
```

## Estrutura

- `src/content/` — toda a copy sensível a conversão (`copy.js`), planos (`plans.js`),
  FAQ (`faq.js`), depoimentos (`testimonials.js`), links (`links.js`).
  **Variações de A/B = trocar uma linha aqui.** A ordem das seções fica em
  `src/App.jsx` (`SECTION_ORDER`).
- `src/components/` — seções da página. `screens/` = recriações das telas do app.
- `src/lib/analytics.js` — `track()` com o mesmo contrato do app, falando com o painel
  Codane Analytics (`/api/events`, `sendBeacon`).
- `src/lib/useReveal.js` — reveal on scroll via IntersectionObserver.

## Seções (funil de conversão)

Header → Hero → Problema → Solução → Demonstração (Funcionalidade → Benefício, 8 telas) →
Como funciona → Benefícios → Depoimentos → Diferenciais → Confiança → Comando de voz →
Planos → FAQ → CTA final → Footer. CTA fixo no rodapé no mobile.

## Pendências (preencher antes de publicar)

| Item | Onde | Situação |
|---|---|---|
| Instalador Android | `public/downloads/forja.apk` | não existe — gerar e commitar (deploy vem do push) |
| Tamanho / versão do APK | `src/content/links.js` → `APK_SIZE`, `APK_VERSION` | valores de exemplo (`12 MB` · `v1.0.0`) |
| URL do app web (PWA) | `src/content/links.js` → `WEB_APP_URL` | `"#"` — link "Usar no navegador" rola até os planos |
| Analytics | `.env` → `VITE_APP_ID`, `VITE_ANALYTICS_API_URL`, `VITE_ANALYTICS_INGEST_KEY` | desligado sem os valores |
| E-mail de contato | `src/content/links.js` → `CONTACT_EMAIL` | placeholder |
| Responsável legal / CNPJ | `src/content/links.js` → `LEGAL_NOTICE` | vazio — footer não exibe até preencher |
| Imagem Open Graph | `public/og-image.png` | existe |
| Depoimentos | `src/content/testimonials.js` | 5 relatos reais de beta testers; adicionar mais conforme a base cresce |
| iOS | — | o app só tem projeto Android + web; nenhuma menção a App Store/iOS foi feita |
| Google Play | — | removido: distribuição é APK direto pelo site + PWA |

## Observações de fidelidade

- Preços e recursos dos planos vêm de `../app forja/src/lib/plans.ts` (modo demonstração).
- Paleta = `../app forja/src/styles.css` (`--discipline #22c55e`, fundo `#050505`, etc.).
- Citações = `../app forja/src/lib/quotes.ts`. Nenhum número, tela ou depoimento inventado.
