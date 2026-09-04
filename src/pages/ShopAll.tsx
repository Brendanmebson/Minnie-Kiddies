import { useState, type CSSProperties } from 'react'
import { shopAllProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import MeetSection from '../components/MeetSection'
import ReviewPopup from '../components/ReviewPopup'

const PAGE_SIZE = 12

export default function ShopAll() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(shopAllProducts.length / PAGE_SIZE) || 1

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: 30, margin: '32px 0' }}>ALL PRODUCTS</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 24,
          marginBottom: 32,
          flexWrap: 'wrap',
        }}
      >
        <label style={{ fontSize: 14 }}>
          Filter By{' '}
          <select style={selectStyle}>
            <option>Type, Color, Size, Price Range</option>
          </select>
        </label>
        <label style={{ fontSize: 14 }}>
          Sort By{' '}
          <select style={selectStyle}>
            <option>Relevance, Price Low to High, Price High to Low</option>
          </select>
        </label>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 32px 40px',
        }}
        className="mk-product-grid"
      >
        {shopAllProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            style={{
              width: 30,
              height: 30,
              borderRadius: 6,
              border: 'none',
              background: n === page ? 'var(--mk-purple)' : 'transparent',
              color: n === page ? '#fff' : 'var(--mk-ink)',
              fontWeight: 600,
            }}
          >
            {n}
          </button>
        ))}
        <span style={{ display: 'flex', alignItems: 'center' }}>→</span>
      </div>

      <MeetSection />
      <ReviewPopup />

      <style>{`
        @media (max-width: 760px) {
          .mk-product-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}

const selectStyle: CSSProperties = {
  border: '1px solid var(--mk-border)',
  borderRadius: 6,
  padding: '8px 10px',
  fontSize: 13,
  color: 'var(--mk-grey)',
}
