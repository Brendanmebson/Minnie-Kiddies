import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import Logo from './Logo'
import { useCart } from '../context/cart'

const links = [
  { to: '/shop', label: 'Shop All' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About Us' },
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
      <FiSearch size={17} aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search bags, shoes..."
      />
    </form>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="nav-inner">
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
            <span>Bag</span>
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
          <SearchField id="sheet-search" onDone={close} />
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-sheet-link" onClick={close}>{l.label}</NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
