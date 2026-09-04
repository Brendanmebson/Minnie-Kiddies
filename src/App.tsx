import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'
import Home from './pages/Home'
import ShopAll from './pages/ShopAll'
import AboutUs from './pages/AboutUs'
import ProductDetail from './pages/ProductDetail'
import Checkout from './pages/Checkout'
import Collections from './pages/Collections'
import Contact from './pages/Contact'

export default function App() {
  return (
    <CartProvider>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopAll />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
    </CartProvider>
  )
}
