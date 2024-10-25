import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Circle } from 'react-preloaders'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Circle background="white" color="yellow" time={2000} />
    <App />
  </StrictMode>,
)
