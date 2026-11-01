import { Link } from 'react-router-dom'
import Logo from './Logo'
import { formatNaira, site, whatsappLink } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>{site.tagline}</p>
          <p>{site.location}</p>
        </div>

        <nav aria-label="Shop">
          <h2>Shop</h2>
          <Link to="/shop">Shop all</Link>
          <Link to="/collections">Collections</Link>
          <Link to="/shop?category=New%20Arrivals">New arrivals</Link>
        </nav>

        <nav aria-label="Help">
          <h2>Help</h2>
          <Link to="/checkout">Your bag</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div>
          <h2>Talk to us</h2>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a>
        </div>
      </div>

      <div className="wrap footer-legal">
        <span>© {new Date().getFullYear()} Minnie Kiddies</span>
        <span>Delivery from {formatNaira(site.deliveryFee)}</span>
      </div>
    </footer>
  )
}
