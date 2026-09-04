import { Link } from 'react-router-dom'
import { FiBookOpen, FiRadio, FiThumbsUp } from 'react-icons/fi'
import { topProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import MeetSection from '../components/MeetSection'
import ReviewPopup from '../components/ReviewPopup'

const collections = [
  { icon: FiBookOpen, label: 'Back 2 School' },
  { icon: FiRadio, label: 'New Arrivals' },
  { icon: FiThumbsUp, label: 'Reviews' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          background: 'var(--mk-purple-light)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          minHeight: 340,
        }}
        className="mk-hero"
      >
        <div style={{ padding: '0 40px' }}>
          <h1 style={{ fontSize: 34, lineHeight: 1.25, margin: '0 0 20px' }}>
            Your go-to vendor for everything back to school in Lagos ✨
          </h1>
          <Link
            to="/shop"
            style={{
              display: 'inline-block',
              background: 'var(--mk-purple)',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: 0.5,
            }}
          >
            SHOP NOW
          </Link>
        </div>
        <div
          style={{
            height: '100%',
            minHeight: 340,
            background: 'linear-gradient(160deg,#3E1C63,#8F6FCF)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontSize: 90,
          }}
        >
          🎒
        </div>
      </section>

      {/* Featured Collections */}
      <section style={{ padding: '48px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, marginBottom: 32 }}>Featured Collections</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
          {collections.map(({ icon: Icon, label }) => (
            <div key={label}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  border: '1.5px solid var(--mk-purple)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px',
                  color: 'var(--mk-purple)',
                }}
              >
                <Icon size={26} />
              </div>
              <div style={{ fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Products */}
      <section style={{ padding: '0 32px 48px' }}>
        <h2 style={{ fontSize: 24, textAlign: 'center', marginBottom: 32 }}>Top Products</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            maxWidth: 1000,
            margin: '0 auto',
          }}
          className="mk-product-grid"
        >
          {topProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <MeetSection />
      <ReviewPopup />

      <style>{`
        @media (max-width: 760px) {
          .mk-hero { grid-template-columns: 1fr !important; }
          .mk-product-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
