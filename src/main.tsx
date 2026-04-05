import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import ThemeToggle from './components/ThemeToggle.tsx'
import NavBar from './components/navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <NavBar />
    <App />
  </StrictMode>,
)
