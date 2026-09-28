import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { WhatsAppFab } from '@/components/ui/WhatsAppFab'
import Home from '@/pages/Home'
import NosotrosPage from '@/pages/NosotrosPage'
import NotFound from '@/pages/NotFound'
import ServiciosPage from '@/pages/ServiciosPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />

      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppFab />
    </BrowserRouter>
  )
}
