import { createRoot } from 'react-dom/client'
import './index.css'
import './shared/styles/index.scss'
import App from './App.tsx'

const appContainer = document.getElementById('root')
if (!appContainer) {
  throw new Error("App container is not found");
}

createRoot(appContainer).render(<App />)