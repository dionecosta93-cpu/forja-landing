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
  FAQ (`faq.js`), links (`links.js`). **Variações de A/B = trocar uma linha aqui.**
  A ordem das seções fica em `src/App.jsx` (`SECTION_ORDER`).
- `src/components/` — seções da página. `screens/` = recriações das telas do app.
- `src/lib/analytics.js` — `track()` com o mesmo contrato do app (`/events`, `sendBeacon`).
- `src/lib/useReveal.js` — reveal on scroll via IntersectionObserver.

## Seções (funil de conversão)

Header → Hero → Problema → Solução → Demonstração (Funcionalidade → Benefício, 8 telas) →
Como funciona → Benefícios → Diferenciais → Confiança → Planos → FAQ → CTA final → Footer.
CTA fixo no rodapé no mobile.

## Pendências (preencher antes de publicar)

| Item | Onde | Situação |
|---|---|---|
| Link da Google Play | `src/content/links.js` → `PLAY_STORE_URL` | `"#"` — CTAs rolam até os planos |
| URL do app web (PWA) | `src/content/links.js` → `WEB_APP_URL` | `"#"` |
| Analytics | `.env` → `VITE_APP_ID`, `VITE_ANALYTICS_API_URL` | desligado sem os valores |
| E-mail de contato | `src/content/links.js` → `CONTACT_EMAIL` | placeholder |
| Imagem Open Graph | `public/og-image.png` | não existe — gerar |
| Prova social | seção "Confiança" (`Trust.jsx` / `copy.js`) | sem dados falsos; adicionar avaliações reais da Play Store e nº de usuários quando existirem |
| iOS | — | o app só tem projeto Android + web; nenhuma menção a App Store/iOS foi feita |

## Observações de fidelidade

- Preços e recursos dos planos vêm de `../app forja/src/lib/plans.ts` (modo demonstração).
- Paleta = `../app forja/src/styles.css` (`--discipline #22c55e`, fundo `#050505`, etc.).
- Citações = `../app forja/src/lib/quotes.ts`. Nenhum número, tela ou depoimento inventado.
