import { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { shopAllProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import ReviewPopup from '../components/ReviewPopup'
import { FiFilter, FiSearch, FiX } from 'react-icons/fi'

const CATEGORIES = ['All', 'Back 2 School', 'New Arrivals', 'Girls', 'Shoes', 'Lunch & Drinks', 'Art & Stationery']
const PAGE_SIZE = 12

type SortKey = 'default' | 'price-asc' | 'price-desc' | 'name'

export default function ShopAll() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlCategory = searchParams.get('category') ?? 'All'
  const initialQuery = searchParams.get('q') ?? ''

  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.includes(urlCategory) ? urlCategory : 'All'
  )
  const [searchTerm, setSearchTerm] = useState(initialQuery)
  const [sort, setSort] = useState<SortKey>('default')
  const [page, setPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    setSearchTerm(initialQuery)
  }, [initialQuery])

  useEffect(() => {
    setPage(1)
  }, [activeCategory, searchTerm, sort])

  const updateSearch = (value: string) => {
    const clean = value.trim()
    setSearchTerm(clean)
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (clean) next.set('q', clean)
      else next.delete('q')
      return next
    })
  }

  const filtered = useMemo(() => {
    let list = activeCategory === 'All'
      ? shopAllProducts
      : shopAllProducts.filter((p) => p.category === activeCategory)

    const query = searchTerm.trim().toLowerCase()
    if (query) {
      list = list.filter((p) => {
        const haystack = [
          p.name,
          p.category,
          p.description,
          p.features.join(' '),
          p.colors?.join(' ') ?? '',
        ].join(' ').toLowerCase()
        return haystack.includes(query)
      })
    }

    if (sort === 'price-asc') list = [...list].sort((a, b) => a.priceNum - b.priceNum)
    else if (sort === 'price-desc') list = [...list].sort((a, b) => b.priceNum - a.priceNum)
    else if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name))

    return list
  }, [activeCategory, searchTerm, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
    setPage(1)
  }

  return (
    <div>
      {/* Page header */}
      <section className="mk-shop-header">
        <div>
          <h1>All Products</h1>
          <p>{filtered.length} items{activeCategory !== 'All' ? ` in "${activeCategory}"` : ''}</p>
        </div>
        <Link to="/collections" className="mk-view-collections-link">View Collections →</Link>
      </section>

      <div className="mk-shop-toolbar">
        <div className="mk-search-box">
          <FiSearch size={15} />
          <input
            value={searchTerm}
            onChange={(event) => updateSearch(event.target.value)}
            placeholder="Search backpacks, shoes, lunch kits..."
            aria-label="Search products"
          />
          {searchTerm && (
            <button type="button" className="mk-search-clear" onClick={() => updateSearch('')} aria-label="Clear search">
              <FiX size={14} />
            </button>
          )}
        </div>
      </div>

      <div className="mk-shop-layout">
        {/* Sidebar filters — desktop */}
        <aside className="mk-shop-sidebar">
          <div className="mk-sidebar-section">
            <div className="mk-sidebar-title">Category</div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`mk-cat-btn${activeCategory === cat ? ' mk-cat-btn--active' : ''}`}
              >
                {cat}
                <span className="mk-cat-count">
                  ({cat === 'All' ? shopAllProducts.length : shopAllProducts.filter(p => p.category === cat).length})
                </span>
              </button>
            ))}
          </div>

          <div className="mk-sidebar-section">
            <div className="mk-sidebar-title">Sort By</div>
            {[
              { key: 'default', label: 'Relevance' },
              { key: 'price-asc', label: 'Price: Low to High' },
              { key: 'price-desc', label: 'Price: High to Low' },
              { key: 'name', label: 'Name A–Z' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSort(key as SortKey)}
                className={`mk-cat-btn${sort === key ? ' mk-cat-btn--active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>
        </aside>

        {/* Products area */}
        <div className="mk-shop-products">
          {/* Mobile filter bar */}
          <div className="mk-mobile-filter-bar">
            <button
              className="mk-mobile-filter-toggle"
              onClick={() => setMobileFiltersOpen((o) => !o)}
            >
              <FiFilter size={15} /> Filters & Sort
            </button>
            <span className="mk-result-count">{filtered.length} products</span>
          </div>

          {/* Mobile filter panel */}
          {mobileFiltersOpen && (
            <div className="mk-mobile-filter-panel">
              <div className="mk-mobile-filter-group">
                <div className="mk-sidebar-title">Category</div>
                <div className="mk-mobile-filter-chips">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { handleCategory(cat); setMobileFiltersOpen(false) }}
                      className={`mk-chip${activeCategory === cat ? ' mk-chip--active' : ''}`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mk-mobile-filter-group">
                <div className="mk-sidebar-title">Sort By</div>
                <div className="mk-mobile-filter-chips">
                  {[
                    { key: 'default', label: 'Relevance' },
                    { key: 'price-asc', label: 'Price ↑' },
                    { key: 'price-desc', label: 'Price ↓' },
                    { key: 'name', label: 'A–Z' },
                  ].map(({ key, label }) => (
                    <button
                      key={key}
                      onClick={() => { setSort(key as SortKey); setMobileFiltersOpen(false) }}
                      className={`mk-chip${sort === key ? ' mk-chip--active' : ''}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product grid */}
          {pageItems.length === 0 ? (
            <div className="mk-no-results">No products found in this category.</div>
          ) : (
            <div className="mk-shop-grid">
              {pageItems.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mk-pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => { setPage(n); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className={`mk-page-btn${n === page ? ' mk-page-btn--active' : ''}`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <ReviewPopup />

      <style>{`
        .mk-shop-toolbar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 40px 0;
        }
        .mk-search-box {
          display: flex;
          align-items: center;
          gap: 10px;
          width: min(100%, 560px);
          background: #f8f4ff;
          border: 1px solid var(--mk-border);
          border-radius: 999px;
          padding: 10px 14px;
          color: var(--mk-grey);
        }
        .mk-search-box input {
          flex: 1;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          font-family: inherit;
          color: var(--mk-ink);
        }
        .mk-search-box input::placeholder {
          color: #8a7d99;
        }
        .mk-search-clear {
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          color: var(--mk-grey);
          cursor: pointer;
          padding: 4px;
        }
        .mk-shop-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 32px 40px 20px;
          border-bottom: 1px solid var(--mk-border);
          flex-wrap: wrap;
          gap: 12px;
        }
        .mk-shop-header h1 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 4px;
          text-transform: uppercase;
        }
        .mk-shop-header p {
          font-size: 13px;
          color: var(--mk-grey);
          margin: 0;
        }
        .mk-view-collections-link {
          font-size: 14px;
          font-weight: 600;
          color: var(--mk-purple);
          text-decoration: none;
        }
        .mk-view-collections-link:hover { text-decoration: underline; }

        .mk-shop-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px 60px;
          align-items: start;
        }

        /* Sidebar */
        .mk-shop-sidebar {
          padding: 28px 28px 28px 0;
          position: sticky;
          top: 80px;
          border-right: 1px solid var(--mk-border);
        }
        .mk-sidebar-section { margin-bottom: 28px; }
        .mk-sidebar-title {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--mk-grey);
          margin-bottom: 10px;
        }
        .mk-cat-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          text-align: left;
          padding: 8px 10px;
          border-radius: 6px;
          border: none;
          background: transparent;
          font-size: 14px;
          font-family: inherit;
          cursor: pointer;
          color: var(--mk-ink);
          transition: background 0.15s, color 0.15s;
          margin-bottom: 2px;
        }
        .mk-cat-btn:hover { background: var(--mk-purple-light); color: var(--mk-purple); }
        .mk-cat-btn--active {
          background: var(--mk-purple-light);
          color: var(--mk-purple);
          font-weight: 600;
        }
        .mk-cat-count { font-size: 12px; color: var(--mk-grey); }
        .mk-cat-btn--active .mk-cat-count { color: var(--mk-purple); }

        /* Products area */
        .mk-shop-products { padding: 28px 0 0 32px; }
        .mk-shop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }
        .mk-no-results {
          text-align: center;
          color: var(--mk-grey);
          padding: 60px 0;
          font-size: 15px;
        }

        /* Mobile filter bar */
        .mk-mobile-filter-bar {
          display: none;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .mk-mobile-filter-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1.5px solid var(--mk-border);
          background: #fff;
          border-radius: 8px;
          padding: 9px 16px;
          font-size: 13px;
          font-family: inherit;
          cursor: pointer;
          font-weight: 600;
          color: var(--mk-ink);
        }
        .mk-result-count { font-size: 13px; color: var(--mk-grey); }

        .mk-mobile-filter-panel {
          background: #fafafa;
          border: 1px solid var(--mk-border);
          border-radius: 10px;
          padding: 16px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mk-mobile-filter-group {}
        .mk-mobile-filter-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }
        .mk-chip {
          padding: 6px 14px;
          border-radius: 20px;
          border: 1.5px solid var(--mk-border);
          background: #fff;
          font-size: 13px;
          font-family: inherit;
          cursor: pointer;
          color: var(--mk-ink);
          transition: all 0.15s;
        }
        .mk-chip--active {
          border-color: var(--mk-purple);
          background: var(--mk-purple-light);
          color: var(--mk-purple);
          font-weight: 600;
        }

        /* Pagination */
        .mk-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding-bottom: 20px;
        }
        .mk-page-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1.5px solid var(--mk-border);
          background: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          color: var(--mk-ink);
          transition: all 0.15s;
        }
        .mk-page-btn:hover { border-color: var(--mk-purple); color: var(--mk-purple); }
        .mk-page-btn--active {
          background: var(--mk-purple);
          border-color: var(--mk-purple);
          color: #fff;
        }

        @media (max-width: 900px) {
          .mk-shop-sidebar { display: none; }
          .mk-shop-layout { grid-template-columns: 1fr; padding: 0 20px 48px; }
          .mk-shop-products { padding: 20px 0 0; }
          .mk-shop-header { padding: 24px 20px 16px; }
          .mk-mobile-filter-bar { display: flex; }
          .mk-shop-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 480px) {
          .mk-shop-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
          .mk-shop-layout { padding-left: 12px; padding-right: 12px; }
          .mk-shop-products { padding-left: 0; }
          .mk-product-name { font-size: 12px; }
          .mk-product-price { font-size: 13px; }
        }
      `}</style>
    </div>
  )
}
