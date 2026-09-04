import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import './index.css'
import App from './App'

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  headings: { fontFamily: 'Poppins, sans-serif', fontWeight: '700' },
  primaryColor: 'grape',
  colors: {
    grape: [
      '#F2ECFB',
      '#E4DEF5',
      '#C9BEEC',
      '#AC96DE',
      '#8F6FCF',
      '#7550B8',
      '#5B2C8F',
      '#4A2374',
      '#3E1C63',
      '#301552',
    ],
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
)
