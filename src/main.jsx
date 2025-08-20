import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from '../pages/HHome/Index.jsx'
import CardsAdd from '../pages/CardsAdd/index.jsx'
import Rotas from '../pages/Rotas/index.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
  
  </StrictMode>,
)
