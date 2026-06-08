import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import MOLegalSuitePage from './pages/MOLegalSuitePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mo-legal-suite" element={<MOLegalSuitePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
