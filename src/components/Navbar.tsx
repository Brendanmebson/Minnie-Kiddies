import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop All' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <div style={{ height: 6, background: 'var(--mk-lavender-bar)' }} />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 32px',
          borderBottom: '1px solid var(--mk-border)',
        }}
      >
        <NavLink to="/">
          <Logo />
        </NavLink>

        <nav
          style={{
            display: 'flex',
            gap: 32,
            fontSize: 15,
            fontWeight: 500,
          }}
          className="mk-desktop-nav"
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                paddingBottom: 6,
                color: isActive ? 'var(--mk-purple)' : 'var(--mk-ink)',
                borderBottom: isActive ? '2px solid var(--mk-purple)' : '2px solid transparent',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <FiShoppingCart size={20} className="mk-desktop-nav" />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="mk-mobile-toggle"
            style={{ background: 'none', border: 'none', display: 'none' }}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '8px 32px 16px',
            borderBottom: '1px solid var(--mk-border)',
            gap: 14,
          }}
        >
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ fontWeight: 500 }}>
              {l.label}
            </NavLink>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <FiShoppingCart size={18} /> Cart
          </div>
        </nav>
      )}

      <style>{`
        @media (max-width: 860px) {
          .mk-desktop-nav { display: none !important; }
          .mk-mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  )
}
