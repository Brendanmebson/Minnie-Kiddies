import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'
import { useCart } from '../context/cart'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop All' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  return (
    <header className="mk-header">
      <div className="mk-top-bar" />

      <div className="mk-nav-inner">
        <NavLink to="/" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        {/* Desktop nav */}
        <nav className="mk-desktop-nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                isActive ? 'mk-navlink mk-navlink--active' : 'mk-navlink'
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="mk-nav-actions">
          <Link to="/checkout" className="mk-cart-btn" aria-label="Cart">
            <FiShoppingCart size={20} />
            {count > 0 && <span className="mk-cart-badge">{count}</span>}
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="mk-mobile-toggle"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="mk-mobile-nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'mk-mobile-link mk-mobile-link--active' : 'mk-mobile-link'
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/checkout"
            onClick={() => setOpen(false)}
            className="mk-mobile-link"
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <FiShoppingCart size={16} />
            Cart {count > 0 && `(${count})`}
          </Link>
        </nav>
      )}

      <style>{`
        .mk-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          box-shadow: 0 1px 0 var(--mk-border);
        }
        .mk-top-bar {
          height: 5px;
          background: var(--mk-lavender-bar);
        }
        .mk-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 40px;
          gap: 16px;
        }
        .mk-desktop-nav {
          display: flex;
          gap: 28px;
          font-size: 14.5px;
          font-weight: 500;
        }
        .mk-navlink {
          padding-bottom: 4px;
          color: var(--mk-ink);
          border-bottom: 2px solid transparent;
          transition: color 0.15s, border-color 0.15s;
        }
        .mk-navlink:hover {
          color: var(--mk-purple);
        }
        .mk-navlink--active {
          color: var(--mk-purple);
          border-bottom-color: var(--mk-purple);
        }
        .mk-nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .mk-cart-btn {
          position: relative;
          display: flex;
          align-items: center;
          color: var(--mk-ink);
          transition: color 0.15s;
        }
        .mk-cart-btn:hover {
          color: var(--mk-purple);
        }
        .mk-cart-badge {
          position: absolute;
          top: -7px;
          right: -8px;
          background: var(--mk-purple);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          width: 17px;
          height: 17px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }
        .mk-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--mk-ink);
          cursor: pointer;
          padding: 4px;
        }
        .mk-mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 8px 24px 16px;
          border-top: 1px solid var(--mk-border);
          gap: 0;
          background: #fff;
        }
        .mk-mobile-link {
          padding: 12px 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--mk-ink);
          border-bottom: 1px solid var(--mk-border);
        }
        .mk-mobile-link--active {
          color: var(--mk-purple);
        }
        @media (max-width: 860px) {
          .mk-desktop-nav { display: none; }
          .mk-cart-btn { display: none; }
          .mk-mobile-toggle { display: block; }
          .mk-nav-inner { padding: 12px 20px; }
        }
      `}</style>
    </header>
  )
}
