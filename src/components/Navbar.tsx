import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import Logo from './Logo'
import { useCart } from '../context/cart'
import { formatNaira, site } from '../data/site'

const links = [
  { to: '/shop', label: 'Shop all' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function SearchField({ id, onDone }: { id: string; onDone?: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const clean = query.trim()
    navigate(clean ? `/shop?q=${encodeURIComponent(clean)}` : '/shop')
    onDone?.()
  }

  return (
    <form className="nav-search" role="search" onSubmit={submit}>
      <label className="sr-only" htmlFor={id}>Search products</label>
      <FiSearch size={16} aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
    </form>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const close = () => setOpen(false)

  return (
    <>
      <p className="announce">
        Delivery to {site.deliveryStates.length} states for {formatNaira(site.deliveryFee)} · Order on WhatsApp
      </p>

      <header className="site-header">
        <div className="wrap nav-inner">
          <Link to="/" className="nav-logo" aria-label="Minnie Kiddies home" onClick={close}><Logo /></Link>

          <nav className="nav-links" aria-label="Main">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-end">
            <div className="nav-search-wrap"><SearchField id="nav-search" /></div>
            <Link to="/checkout" className="nav-bag" onClick={close} aria-label={`Your bag, ${count} ${count === 1 ? 'item' : 'items'}`}>
              <FiShoppingBag size={20} aria-hidden="true" />
              {count > 0 && <span key={count} className="nav-bag-count">{count}</span>}
            </Link>
            <button
              type="button"
              className="nav-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="nav-sheet" aria-label="Mobile">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className="nav-sheet-link" onClick={close}>{l.label}</NavLink>
            ))}
          </nav>
        )}
      </header>

      <div className="wrap mobile-search"><SearchField id="mobile-search" /></div>
    </>
  )
}
