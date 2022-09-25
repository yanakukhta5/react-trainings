import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { theme, ThemeContext } from './ThemeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeContext.Provider value={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContext.Provider>
)
