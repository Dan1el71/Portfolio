import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n/i18n.ts'

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
