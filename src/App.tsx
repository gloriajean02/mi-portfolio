import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import LandingPage from './pages/LandingPage'
import MOLegalSuitePage from './pages/MOLegalSuitePage'
import YnalaPage from './pages/YnalaPage'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mo-legal-suite" element={<MOLegalSuitePage />} />
          <Route path="/ynala" element={<YnalaPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
