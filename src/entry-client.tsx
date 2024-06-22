import './styles/index.css'
import ReactDOM from 'react-dom/client'
import App from './App'
import './i18n/i18n.ts'

ReactDOM.hydrateRoot(document.getElementById('root') as HTMLElement, <App />)
