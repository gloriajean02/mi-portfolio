import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import LandingPage from './pages/LandingPage'
import MOLegalSuitePage from './pages/MOLegalSuitePage'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mo-legal-suite" element={<MOLegalSuitePage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
