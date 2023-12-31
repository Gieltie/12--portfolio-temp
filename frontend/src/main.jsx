import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import global_en from './locales/en/global.json'
import global_fr from './locales/fr/global.json'
import global_nl from './locales/nl/global.json'
import App from './App.jsx'
import './index.scss'

i18next.init({
  interpolation: { escapeValue: false },
   lng: 'auto',
   fallbackLng: 'fr',
  resources: {
   en: {
    global: global_en,
   },
   fr: {
    global: global_fr,
   },
   nl: {
    global: global_nl,
   },
  },
 })

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
)

  {/* <React.StrictMode>
  </React.StrictMode> */}