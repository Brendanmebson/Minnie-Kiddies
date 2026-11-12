import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { FiMenu, FiSearch, FiShoppingBag, FiX } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Logo from './Logo'
import { useCart } from '../context/cart'
import { formatNaira, site, whatsappLink } from '../data/site'

const LEFT_LINKS = [
  { to: '/shop', label: 'Shop' },
  { to: '/collections', label: 'Collections' },
]

const RIGHT_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const navClass = ({ isActive }: { isActive: boolean }) => `nav-link${isActive ? ' is-active' : ''}`

function SearchField({ id, autoFocus, onDone }: { id: string; autoFocus?: boolean; onDone?: () => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const clean = query.trim()
    navigate(clean ? `/shop?q=${encodeURIComponent(clean)}` : '/shop')
    setQuery('')
    onDone?.()
  }

  return (
    <form className="nav-search" role="search" onSubmit={submit}>
      <label className="sr-only" htmlFor={id}>Search products</label>
      <FiSearch size={18} aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={query}
        autoFocus={autoFocus}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && onDone?.()}
        placeholder="Search bags, shoes, bottles…"
      />
      <button type="submit" className="nav-search-go">Search</button>
    </form>
  )
}

export default function Navbar() {
  const { count, total } = useCart()
  const { pathname } = useLocation()
  // Panels remember the page they were opened on, so navigating closes them.
  const [menuPath, setMenuPath] = useState<string | null>(null)
  const [searchPath, setSearchPath] = useState<string | null>(null)
  const menuOpen = menuPath === pathname
  const searchOpen = searchPath === pathname
  const setMenuOpen = (open: boolean) => setMenuPath(open ? pathname : null)
  const setSearchOpen = (open: boolean) => setSearchPath(open ? pathname : null)

  const bagLabel = `Your bag, ${count} ${count === 1 ? 'item' : 'items'}`

  return (
    <>
      <p className="announce">
        Delivery to {site.deliveryStates.length} states for {formatNaira(site.deliveryFee)} · Order on WhatsApp
      </p>

      <header className="site-header">
        <div className="wrap nav-inner">
          <div className="nav-start">
            <button
              type="button"
              className="nav-icon nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="nav-sheet"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
            <a className="nav-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer">
              <FaWhatsapp size={16} aria-hidden="true" /> Order on WhatsApp
            </a>
          </div>

          <nav className="nav-center" aria-label="Main">
            <ul className="nav-group">
              {LEFT_LINKS.map((l) => <li key={l.to}><NavLink to={l.to} className={navClass}>{l.label}</NavLink></li>)}
            </ul>
            <Link to="/" className="nav-logo" aria-label="Minnie Kiddies home"><Logo /></Link>
            <ul className="nav-group">
              {RIGHT_LINKS.map((l) => <li key={l.to}><NavLink to={l.to} className={navClass}>{l.label}</NavLink></li>)}
            </ul>
          </nav>

          <div className="nav-end">
            <button
              type="button"
              className="nav-icon nav-search-toggle"
              aria-label={searchOpen ? 'Close search' : 'Search'}
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              {searchOpen ? <FiX size={20} /> : <FiSearch size={20} />}
            </button>
            <Link to="/checkout" className="nav-bag" aria-label={bagLabel}>
              <span className="nav-bag-icon">
                <FiShoppingBag size={20} aria-hidden="true" />
                {count > 0 && <span key={count} className="nav-bag-count">{count}</span>}
              </span>
              <span className="nav-bag-total" aria-hidden="true">Bag {formatNaira(total)}</span>
            </Link>
          </div>
        </div>

        {searchOpen && (
          <div className="nav-searchbar">
            <div className="wrap"><SearchField id="nav-search" autoFocus onDone={() => setSearchOpen(false)} /></div>
          </div>
        )}

        {menuOpen && (
          <nav className="nav-sheet" id="nav-sheet" aria-label="Mobile">
            <div className="wrap">
              <SearchField id="mobile-search" onDone={() => setMenuOpen(false)} />
              <ul>
                <li><NavLink to="/" end className={navClass}>Home</NavLink></li>
                {[...LEFT_LINKS, ...RIGHT_LINKS].map((l) => (
                  <li key={l.to}><NavLink to={l.to} className={navClass}>{l.label}</NavLink></li>
                ))}
              </ul>
              <a className="btn btn-sage btn-wide" href={whatsappLink()} target="_blank" rel="noreferrer">
                <FaWhatsapp size={16} aria-hidden="true" /> Order on WhatsApp
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
