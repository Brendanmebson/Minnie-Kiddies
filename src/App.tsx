import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import ShopAll from './pages/ShopAll'
import AboutUs from './pages/AboutUs'

export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/collections" element={<ShopAll />} />
          <Route path="/contact" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
