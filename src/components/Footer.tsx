import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiPhone, FiMessageCircle, FiTruck } from 'react-icons/fi'
import { SiVisa, SiMastercard } from 'react-icons/si'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="mk-footer-inner">
        {/* Brand column */}
        <div className="mk-footer-brand">
          <Logo />
          <p className="mk-footer-tagline">
            Your go-to vendor for everything back to school in Lagos.
            Every child's need, all in one place.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mk-footer-heading">Contact</h4>
          <a href="tel:+2348023247757" className="mk-footer-link">
            <FiPhone size={13} /> +234 802 324 7757
          </a>
          <a href="https://wa.me/2348023247757" target="_blank" rel="noreferrer" className="mk-footer-link">
            <FiMessageCircle size={13} /> WhatsApp Us
          </a>
        </div>

        {/* Social */}
        <div>
          <h4 className="mk-footer-heading">Social Media</h4>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mk-footer-link">
            <FiInstagram size={13} /> Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mk-footer-link">
            <FiFacebook size={13} /> Facebook
          </a>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mk-footer-heading">Quick Links</h4>
          <Link to="/shop" className="mk-footer-link">Shop All</Link>
          <Link to="/collections" className="mk-footer-link">Collections</Link>
          <Link to="/about" className="mk-footer-link">About Us</Link>
          <Link to="/contact" className="mk-footer-link">Contact</Link>
        </div>

        {/* Payments */}
        <div>
          <h4 className="mk-footer-heading">Payments</h4>
          <div className="mk-footer-payments">
            <SiVisa size={28} style={{ color: '#1a1f71' }} />
            <SiMastercard size={28} style={{ color: '#eb001b' }} />
          </div>
          <div className="mk-footer-link" style={{ marginTop: 8 }}>
            <FiTruck size={13} /> Delivery available
          </div>
        </div>
      </div>

      <div className="mk-footer-bottom">
        <span>© {new Date().getFullYear()} Minnie Kiddies. All rights reserved.</span>
        <span>Lagos Island, Lagos, Nigeria</span>
      </div>

      <style>{`
        footer {
          background: var(--mk-purple-light);
          border-top: 1px solid var(--mk-lavender-bar);
        }
        .mk-footer-inner {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          padding: 40px 40px 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mk-footer-tagline {
          font-size: 13px;
          color: var(--mk-grey);
          line-height: 1.6;
          margin: 14px 0 0;
          max-width: 220px;
        }
        .mk-footer-heading {
          font-size: 13px;
          font-weight: 700;
          margin: 0 0 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .mk-footer-link {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 13.5px;
          color: var(--mk-grey);
          text-decoration: none;
          margin-bottom: 9px;
          transition: color 0.15s;
        }
        .mk-footer-link:hover { color: var(--mk-purple); }
        .mk-footer-payments {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .mk-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 40px;
          border-top: 1px solid var(--mk-lavender-bar);
          font-size: 12px;
          color: var(--mk-grey);
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 6px;
        }
        @media (max-width: 900px) {
          .mk-footer-inner {
            grid-template-columns: 1fr 1fr;
            padding: 32px 24px 20px;
            gap: 24px;
          }
          .mk-footer-brand { grid-column: 1 / -1; }
          .mk-footer-bottom { padding: 12px 24px; }
        }
        @media (max-width: 480px) {
          .mk-footer-inner { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
