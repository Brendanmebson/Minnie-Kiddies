import { Link } from 'react-router-dom'
import { topProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import MeetSection from '../components/MeetSection'
import ReviewPopup from '../components/ReviewPopup'

/* ── SVG Icons matching the screenshot ── */
const BackpackIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="16" height="20" rx="4" stroke="#5B2C8F" strokeWidth="1.8" fill="none"/>
    <path d="M13 10V8a5 5 0 0110 0v2" stroke="#5B2C8F" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M14 20h8M18 17v6" stroke="#5B2C8F" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M13 15h10" stroke="#5B2C8F" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
)

const MegaphoneIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 14v8h4l10 6V8L12 14H8z" stroke="#5B2C8F" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    <path d="M26 14s2 2 2 4-2 4-2 4" stroke="#5B2C8F" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path d="M12 22v4" stroke="#5B2C8F" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
)

const ReviewBadgeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="10" stroke="#5B2C8F" strokeWidth="1.8" fill="none"/>
    <path d="M13 18l3.5 3.5L23 14" stroke="#5B2C8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="26" cy="10" r="5" fill="#5B2C8F"/>
    <path d="M23.5 10l1.5 1.5L27.5 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const collections = [
  { Icon: BackpackIcon, label: 'Back 2 School' },
  { Icon: MegaphoneIcon, label: 'New Arrivals' },
  { Icon: ReviewBadgeIcon, label: 'Reviews' },
]

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="mk-hero">
        <div className="mk-hero-text">
          <h1>
            YOUR GO-TO VENDOR<br />
            FOR EVERYTHING BACK TO<br />
            SCHOOL IN LAGOS ✨
          </h1>
          <Link to="/shop" className="mk-shop-btn">
            SHOP NOW
          </Link>
        </div>
        <div className="mk-hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&h=700&fit=crop&q=90"
            alt="Happy child with school backpack"
            className="mk-hero-img"
          />
        </div>
      </section>

      {/* ── Featured Collections ── */}
      <section className="mk-collections">
        <h2>Featured Collections</h2>
        <div className="mk-collections-row">
          {collections.map(({ Icon, label }) => (
            <div key={label} className="mk-collection-item">
              <div className="mk-collection-icon">
                <Icon />
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Top Products ── */}
      <section className="mk-top-products">
        <h2>Top Products</h2>
        <div className="mk-product-grid">
          {topProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <MeetSection />
      <ReviewPopup />

      <style>{`
        /* ── Hero ── */
        .mk-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 340px;
          overflow: hidden;
        }
        .mk-hero-text {
          background: var(--mk-purple-light);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 48px 40px;
        }
        .mk-hero-text h1 {
          font-size: 26px;
          font-weight: 800;
          line-height: 1.3;
          margin: 0 0 24px;
          color: var(--mk-ink);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .mk-shop-btn {
          display: inline-block;
          background: var(--mk-purple);
          color: #fff;
          padding: 13px 30px;
          border-radius: 5px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 1px;
          align-self: flex-start;
          transition: background 0.2s;
        }
        .mk-shop-btn:hover {
          background: var(--mk-purple-dark);
        }
        .mk-hero-img-wrap {
          height: 100%;
          min-height: 340px;
          overflow: hidden;
          position: relative;
        }
        .mk-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* ── Featured Collections ── */
        .mk-collections {
          padding: 44px 32px;
          text-align: center;
          border-bottom: 1px solid var(--mk-border);
        }
        .mk-collections h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 32px;
        }
        .mk-collections-row {
          display: flex;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
        }
        .mk-collection-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        .mk-collection-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          border: 1.5px solid var(--mk-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .mk-collection-item:hover .mk-collection-icon {
          background: var(--mk-purple-light);
        }
        .mk-collection-item span {
          font-size: 14px;
          font-weight: 500;
          color: var(--mk-ink);
        }

        /* ── Top Products ── */
        .mk-top-products {
          padding: 40px 32px 52px;
        }
        .mk-top-products h2 {
          font-size: 22px;
          font-weight: 700;
          text-align: center;
          margin: 0 0 28px;
        }
        .mk-product-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          max-width: 860px;
          margin: 0 auto;
        }

        /* ── Responsive ── */
        @media (max-width: 760px) {
          .mk-hero {
            grid-template-columns: 1fr;
          }
          .mk-hero-img-wrap {
            min-height: 260px;
            order: -1;
          }
          .mk-hero-text {
            padding: 32px 24px;
          }
          .mk-hero-text h1 {
            font-size: 20px;
          }
          .mk-product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .mk-collections-row {
            gap: 40px;
          }
        }
      `}</style>
    </div>
  )
}
