import React from 'react'
import ReactDOM from 'react-dom'
import { ToastProvider } from 'react-toast-notifications'
import App from './App'
import { DishProvider } from './context/dishContext'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider placement="top-right">
      <DishProvider>
        <App />
      </DishProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
