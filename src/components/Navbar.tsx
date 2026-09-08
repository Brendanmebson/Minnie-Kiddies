import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX, FiSearch } from 'react-icons/fi'
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
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { count } = useCart()

  const handleSearch = (value: string) => {
    const clean = value.trim()
    setQuery(clean)
    if (clean) {
      navigate(`/shop?q=${encodeURIComponent(clean)}`)
    } else {
      navigate('/shop')
    }
  }

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

        <div className="mk-nav-search">
          <FiSearch size={15} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch(query)
            }}
            placeholder="Search products..."
            aria-label="Search products"
          />
        </div>

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
          <div className="mk-mobile-search">
            <FiSearch size={15} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setOpen(false)
                  handleSearch(query)
                }
              }}
              placeholder="Search products..."
              aria-label="Search mobile products"
            />
          </div>
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
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          box-shadow: 0 1px 0 var(--mk-border), 0 2px 16px rgba(91,44,143,0.06);
          transition: box-shadow var(--mk-transition-base);
        }
        .mk-top-bar {
          height: 4px;
          background: linear-gradient(90deg, var(--mk-purple-dark) 0%, var(--mk-purple-mid) 50%, var(--mk-pink) 100%);
          background-size: 200% 100%;
        }
        .mk-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 40px;
          gap: 16px;
        }
        .mk-nav-search {
          width: min(38vw, 360px);
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--mk-purple-faint);
          border: 1.5px solid transparent;
          border-radius: 999px;
          padding: 8px 16px;
          color: var(--mk-grey);
          transition: border-color var(--mk-transition-fast), box-shadow var(--mk-transition-fast);
        }
        .mk-nav-search:focus-within {
          border-color: var(--mk-purple);
          box-shadow: 0 0 0 3px rgba(91,44,143,0.12);
        }
        .mk-nav-search input,
        .mk-mobile-search input {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          font-family: inherit;
          color: var(--mk-ink);
        }
        .mk-nav-search input::placeholder,
        .mk-mobile-search input::placeholder {
          color: #9a8dab;
        }
        .mk-desktop-nav {
          display: flex;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
        }
        .mk-navlink {
          position: relative;
          padding: 6px 12px;
          border-radius: 8px;
          color: var(--mk-ink);
          transition: color var(--mk-transition-fast), background var(--mk-transition-fast);
        }
        .mk-navlink::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 12px;
          right: 12px;
          height: 2px;
          background: var(--mk-purple);
          border-radius: 99px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.2s var(--mk-ease-spring);
        }
        .mk-navlink:hover {
          color: var(--mk-purple);
          background: var(--mk-purple-faint);
        }
        .mk-navlink--active {
          color: var(--mk-purple);
          background: var(--mk-purple-faint);
        }
        .mk-navlink--active::after,
        .mk-navlink:hover::after {
          transform: scaleX(1);
        }
        .mk-nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mk-cart-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          color: var(--mk-ink);
          transition: color var(--mk-transition-fast), background var(--mk-transition-fast);
        }
        .mk-cart-btn:hover {
          color: var(--mk-purple);
          background: var(--mk-purple-faint);
        }
        .mk-cart-badge {
          position: absolute;
          top: 4px;
          right: 4px;
          background: linear-gradient(135deg, var(--mk-purple), var(--mk-purple-mid));
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          border: 1.5px solid #fff;
          animation: mk-pop-in 0.25s var(--mk-ease-spring);
        }
        .mk-mobile-toggle {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: none;
          border: 1.5px solid var(--mk-border);
          border-radius: 10px;
          color: var(--mk-ink);
          cursor: pointer;
          transition: border-color var(--mk-transition-fast), background var(--mk-transition-fast);
        }
        .mk-mobile-toggle:hover {
          border-color: var(--mk-purple);
          background: var(--mk-purple-faint);
          color: var(--mk-purple);
        }
        .mk-mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 12px 20px 20px;
          border-top: 1px solid var(--mk-border);
          gap: 0;
          background: #fff;
          animation: mk-slide-down 0.22s var(--mk-ease-out) both;
        }
        .mk-mobile-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--mk-purple-faint);
          border: 1.5px solid transparent;
          border-radius: 999px;
          padding: 9px 14px;
          margin: 4px 0 14px;
          color: var(--mk-grey);
          transition: border-color var(--mk-transition-fast);
        }
        .mk-mobile-search:focus-within {
          border-color: var(--mk-purple);
        }
        .mk-mobile-link {
          padding: 13px 0;
          font-size: 15px;
          font-weight: 500;
          color: var(--mk-ink);
          border-bottom: 1px solid var(--mk-border);
          transition: color var(--mk-transition-fast), padding-left var(--mk-transition-fast);
        }
        .mk-mobile-link:hover {
          color: var(--mk-purple);
          padding-left: 6px;
        }
        .mk-mobile-link--active {
          color: var(--mk-purple);
          font-weight: 600;
        }
        @media (max-width: 860px) {
          .mk-desktop-nav { display: none; }
          .mk-mobile-toggle { display: flex; }
          .mk-nav-inner { padding: 10px 20px; }
          .mk-nav-search { display: none; }
        }
      `}</style>
    </header>
  )
}
