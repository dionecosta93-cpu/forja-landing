import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource-variable/space-grotesk'
import '@fontsource-variable/inter'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'

import './styles/tokens.css'
import './styles/global.css'
import App from './App.jsx'
import { track } from './lib/analytics.js'

track('page_view', { path: window.location.pathname })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
