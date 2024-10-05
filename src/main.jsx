import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <BrowserRouter>
  <Toaster/>
      <App />
  </BrowserRouter>
  </Provider>
)
