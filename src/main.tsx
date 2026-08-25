import { createRoot } from 'react-dom/client'
import './index.css'
import './shared/styles/index.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store/store.ts'

const appContainer = document.getElementById('root')
if (!appContainer) {
  throw new Error("App container is not found");
}

createRoot(appContainer).render(
  <Provider store={store}>
    <App />
  </Provider>
)