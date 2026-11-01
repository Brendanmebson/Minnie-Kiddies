import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/baloo-2/700.css'
import '@fontsource/baloo-2/800.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
