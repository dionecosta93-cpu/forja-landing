# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

High-conversion landing page for **Forja**, a gamified discipline/productivity app.
The app itself is a separate project at the sibling path `../app forja` (TanStack Start +
React + Supabase + Capacitor/Android). This repo is only the marketing site.

## Commands

```sh
npm install
npm run dev      # Vite dev server, http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the build, http://localhost:4173
```

No test runner, linter, or formatter is configured. No TypeScript (plain `.jsx`).

## Source of truth for content

Product facts come from the real app code at `../app forja`, not from guesses:

- Plans / prices / feature lists: `../app forja/src/lib/plans.ts` (`DEMO_MODE = true`)
- Brand palette: `../app forja/src/styles.css` (`--discipline #22c55e`, bg `#050505`, etc.)
- Quotes / mindset copy: `../app forja/src/lib/quotes.ts`
- Analytics contract: `../app forja/src/lib/track.ts`

The Forja app screens shown on the page are **faithful HTML/CSS recreations**, not
screenshots. Never invent app data (numbers, screens, buttons, reviews, user counts).
The app targets **Android + web PWA only** — there is no iOS/App Store, so don't add
those references.

## Architecture

- **Vite + React (JSX)**, CSS Modules (`*.module.css` next to each component), one design-
  system file `src/styles/tokens.css` (CSS custom properties) + `src/styles/global.css`
  (reset, `.container`/`.section`/`.btn`/`.reveal` helpers). Fonts self-hosted via
  `@fontsource` (imported in `src/main.jsx`).

- **`src/content/` is the content layer** — edit copy here, not in components:
  - `copy.js` — every headline, subhead, CTA label, and section body. A/B variants =
    change one line here.
  - `plans.js`, `faq.js` — section data.
  - `links.js` — `PLAY_STORE_URL`, `WEB_APP_URL`, `CONTACT_EMAIL`. These are `"#"`
    placeholders; when `"#"`, download CTAs fall back to scrolling to `#planos`.
  - Section **order** lives in `src/App.jsx` → `SECTION_ORDER` (array of keys into
    `SECTIONS`). Reordering the funnel is a one-line change there.

- **`src/components/screens/`** — the in-phone app recreations. `index.jsx` exports a
  `<Screen name="Home" | "AgendaWeek" | ... />` dispatcher; `screen.module.css` +
  `parts.jsx` are shared primitives. Each screen root (`.app` → `.scale`) sets
  `font-size` in **container-query units (`cqw`)** so all inner sizing is in `em` and the
  whole screen scales with its frame. Add a new screen: write the component in
  `index.jsx`, register it in the `SCREENS` map.

- **`PhoneFrame.jsx`** wraps a screen in the device bezel. Control size with the `width`
  prop (`<PhoneFrame width="clamp(220px, 70vw, 286px)">`), which sets `--phone-w` inline.
  Do not try to size it via `.visual > div { --phone-w }` in a parent module — that path
  proved fragile; the inline prop is the supported way.

- **`src/lib/analytics.js`** — `track(event, props)`. Mirrors the app's `track.ts`:
  env-gated by `VITE_APP_ID` + `VITE_ANALYTICS_API_URL` (see `.env.example`), otherwise
  no-op (logs in dev). Sends `{ app_id, event, ts, session_id, user_id, props }` via
  `sendBeacon` to `<API_URL>/events`. Landing events: `page_view`, `hero_cta_click`,
  `demo_view`, `pricing_view`, `download_click`, `faq_open`.

- **`src/lib/useReveal.js`** — one `IntersectionObserver` that adds `.is-visible` to
  `.reveal` elements on scroll. Elements must exist at mount (they all do); respects
  `prefers-reduced-motion` via CSS.

## CSS Modules gotcha

CSS Modules hashes **every** class selector, including ones that refer to global helpers.
To style a global class (`.btn`, `.row`, `.reveal`) from inside a `*.module.css`, wrap it:
`.actions :global(.btn) { ... }`. A plain `.actions .btn` silently never matches.

## Theming

Dark theme only, by design (the app is dark). `tokens.css` defines the palette on
`:root`; `body` sets an explicit background. No light-mode blocks.
