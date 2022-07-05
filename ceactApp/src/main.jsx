import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/App'
import './style/global.css';// ./ is for a diferent directore



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
