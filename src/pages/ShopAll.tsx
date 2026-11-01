import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight, FiSearch, FiX } from 'react-icons/fi'
import PageHead from '../components/PageHead'
import ProductCard from '../components/ProductCard'
import { inCollection, NEW_ARRIVALS, shopAllProducts } from '../data/products'
import { usePageTitle } from '../hooks/usePageTitle'

const ALL = 'All'
const CATEGORIES = [ALL, 'Back 2 School', NEW_ARRIVALS, 'Girls', 'Shoes', 'Lunch & Drinks', 'Art & Stationery']
const PAGE_SIZE = 12

const SORTS = [
  { key: 'default', label: 'Relevance' },
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
  { key: 'name', label: 'Name A to Z' },
] as const

type SortKey = (typeof SORTS)[number]['key']

const countFor = (category: string) =>
  category === ALL ? shopAllProducts.length : shopAllProducts.filter((p) => inCollection(p, category)).length

export default function ShopAll() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlCategory = searchParams.get('category') ?? ALL
  const activeCategory = CATEGORIES.includes(urlCategory) ? urlCategory : ALL
  const searchTerm = searchParams.get('q') ?? ''

  const [sort, setSort] = useState<SortKey>('default')
  const [paging, setPaging] = useState({ filterKey: '', page: 1 })

  usePageTitle(activeCategory === ALL ? 'Shop all' : activeCategory)

  const filterKey = `${activeCategory}|${searchTerm}|${sort}`
  const page = paging.filterKey === filterKey ? paging.page : 1

  const setParam = (key: string, value: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true },
    )
  }

  const filtered = useMemo(() => {
    let list = activeCategory === ALL
      ? shopAllProducts
      : shopAllProducts.filter((p) => inCollection(p, activeCategory))

    const query = searchTerm.trim().toLowerCase()
    if (query) {
      list = list.filter((p) =>
        [p.name, p.category, p.description, p.features.join(' '), p.colors.join(' ')]
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
    }

    if (sort === 'price-asc') return [...list].sort((a, b) => a.priceNum - b.priceNum)
    if (sort === 'price-desc') return [...list].sort((a, b) => b.priceNum - a.priceNum)
    if (sort === 'name') return [...list].sort((a, b) => a.name.localeCompare(b.name))
    return list
  }, [activeCategory, searchTerm, sort])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const goToPage = (next: number) => {
    setPaging({ filterKey, page: next })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const clearFilters = () => setSearchParams({}, { replace: true })

  return (
    <>
      <PageHead title={activeCategory === ALL ? 'Shop everything for school' : activeCategory}>
        <p>{filtered.length} {filtered.length === 1 ? 'item' : 'items'}{searchTerm ? ` matching “${searchTerm}”` : ''}</p>
      </PageHead>

      <div className="shop-tools">
        <div className="chips" role="group" aria-label="Filter by category">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              className="chip"
              aria-pressed={activeCategory === category}
              onClick={() => setParam('category', category === ALL ? '' : category)}
            >
              {category} <span>{countFor(category)}</span>
            </button>
          ))}
        </div>

        <div className="shop-controls">
          <div className="shop-search">
            <FiSearch size={17} aria-hidden="true" />
            <label className="sr-only" htmlFor="shop-search">Search products</label>
            <input
              id="shop-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setParam('q', e.target.value)}
              placeholder="Search backpacks, shoes, lunch kits..."
            />
            {searchTerm && (
              <button type="button" onClick={() => setParam('q', '')} aria-label="Clear search"><FiX size={16} /></button>
            )}
          </div>
          <label className="sr-only" htmlFor="shop-sort">Sort by</label>
          <select id="shop-sort" className="shop-sort" value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
            {SORTS.map(({ key, label }) => <option key={key} value={key}>{label}</option>)}
          </select>
        </div>
      </div>

      <section className="shop-results" aria-label="Products">
        {pageItems.length > 0 ? (
          <div className="product-grid">
            {pageItems.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        ) : (
          <div className="empty-state">
            <h2>Nothing on that shelf yet.</h2>
            <p>Try a shorter word, or clear your filters and look around.</p>
            <button type="button" className="btn btn-solid" onClick={clearFilters}>Clear filters</button>
          </div>
        )}

        {totalPages > 1 && (
          <nav className="pager" aria-label="Pages">
            <button type="button" disabled={page === 1} onClick={() => goToPage(page - 1)} aria-label="Previous page">
              <FiChevronLeft size={20} />
            </button>
            <span>Page {page} of {totalPages}</span>
            <button type="button" disabled={page === totalPages} onClick={() => goToPage(page + 1)} aria-label="Next page">
              <FiChevronRight size={20} />
            </button>
          </nav>
        )}
      </section>
    </>
  )
}
