import { Link } from 'react-router-dom'
import Stripe from './Stripe'
import { site, whatsappLink } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Stripe />
      <div className="footer-body">
        <p className="footer-name" aria-label={site.name}>Minnie Kiddies</p>

        <div className="footer-row">
          <ul className="footer-places">
            <li><a href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp us</a></li>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a></li>
          </ul>

          <nav className="footer-links" aria-label="Footer">
            <div>
              <h2>Shop</h2>
              <Link to="/shop">Shop all</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/shop?category=New%20Arrivals">New arrivals</Link>
            </div>
            <div>
              <h2>Help</h2>
              <Link to="/contact">Contact</Link>
              <Link to="/checkout">Your bag</Link>
              <Link to="/about">About us</Link>
            </div>
            <div>
              <h2>Find us</h2>
              <p>{site.location}</p>
              <p>Delivery from ₦{site.deliveryFee.toLocaleString('en-NG')}</p>
            </div>
          </nav>
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Minnie Kiddies. All rights reserved.</span>
          <a href="#main">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
