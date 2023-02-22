import React from 'react'

import { ThemeProvider } from '@mui/material'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { store } from './store/store'

import { blackTheme } from 'common/styles/muiTheme'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={blackTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()