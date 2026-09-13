import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PhotoTourPage from './features/listing/components/PhotoTourPage/PhotoTourPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photo-tour" element={<PhotoTourPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
