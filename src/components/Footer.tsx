import { Link } from 'react-router-dom'
import { FiArrowUp } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Logo from './Logo'
import { CloudEdge } from './Decor'
import { CoffeeButton, MadeByCredit } from './MadeBy'
import { allPhotos } from '../data/photos'
import { site, whatsappLink } from '../data/site'
import { scrollToTop } from '../hooks/motion'

export default function Footer() {
  return (
    <footer className="site-footer">
      <CloudEdge className="footer-clouds" />

      <div className="footer-gallery">
        <ul aria-hidden="true">
          {allPhotos.map((photo) => (
            <li key={photo.src}><img src={photo.src} width={photo.width} height={photo.height} alt="" loading="lazy" /></li>
          ))}
        </ul>
        <a className="footer-follow" href={site.instagramUrl} target="_blank" rel="noreferrer">
          <FaInstagram size={18} aria-hidden="true" /> Follow {site.instagramHandle}
        </a>
      </div>

      <div className="wrap footer-grid">
        <nav aria-label="Shop">
          <h2>Shop</h2>
          <Link to="/shop">Shop all</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/shop?category=New%20Arrivals">New arrivals</Link>
          <Link to="/#school-list">School list</Link>
        </nav>

        <nav aria-label="Help">
          <h2>Help</h2>
          <Link to="/checkout">Your bag</Link>
          <Link to="/#faq">Questions</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div>
          <h2>Follow</h2>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer"><FaInstagram aria-hidden="true" /> Instagram</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer"><FaWhatsapp aria-hidden="true" /> WhatsApp</a>
        </div>

        <div>
          <h2>Talk to us</h2>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">Chat on WhatsApp</a>
          <p>{site.location}</p>
        </div>
      </div>

      <div className="wrap footer-legal">
        <Link to="/" aria-label="Minnie Kiddies home"><Logo /></Link>
        <span>© {new Date().getFullYear()} Minnie Kiddies. Pay by bank transfer or on delivery.</span>
        <CoffeeButton />
        <MadeByCredit />
        <button type="button" className="to-top" onClick={scrollToTop}>
          <FiArrowUp size={16} aria-hidden="true" /> Top
        </button>
      </div>
    </footer>
  )
}
