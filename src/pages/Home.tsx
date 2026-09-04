import { Link } from 'react-router-dom'
import { shopAllProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import MeetSection from '../components/MeetSection'
import ReviewPopup from '../components/ReviewPopup'
import BentoSpotlight from '../components/BentoSpotlight'

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
  { Icon: ReviewBadgeIcon, label: 'Best Sellers' },
]

export default function Home() {
  const featuredBento = [
    {
      title: 'Back to School Essentials',
      subtitle: 'Trending now',
      description: 'Bright backpacks, matching lunch sets, and everyday favourites for a stress-free term.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&h=1200&fit=crop&q=80',
      accent: 'linear-gradient(135deg,#5B2C8F,#9B5DE5)',
      to: '/shop?category=Back%202%20School',
    },
    {
      title: 'New In',
      subtitle: 'Fresh arrivals',
      description: 'Explore this week’s must-have accessories and standout gift-ready bundles.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=900&fit=crop&q=80',
      accent: 'linear-gradient(135deg,#154A67,#54A0FF)',
      to: '/shop?category=New%20Arrivals',
    },
    {
      title: 'Girls Edit',
      subtitle: 'Made to sparkle',
      description: 'Princess-inspired, pastel-coloured picks for confident little creatives.',
      image: 'https://images.unsplash.com/photo-1600359756070-f9e7a3ed9aa9?w=900&h=900&fit=crop&q=80',
      accent: 'linear-gradient(135deg,#D64E8A,#FF9AA2)',
      to: '/shop?category=Girls',
    },
    {
      title: 'School Shoes',
      subtitle: 'Step ready',
      description: 'Smart, flexible, and durable options for comfort from morning bell to home time.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=900&fit=crop&q=80',
      accent: 'linear-gradient(135deg,#1B1B1F,#5C6478)',
      to: '/shop?category=Shoes',
    },
  ]

  const bestSellers = shopAllProducts.slice(0, 8)

  return (
    <div>
      <section className="mk-hero">
        <div className="mk-hero-text">
          <span className="mk-hero-badge">School-ready essentials</span>
          <h1>
            YOUR GO-TO VENDOR<br />
            FOR EVERYTHING BACK TO<br />
            SCHOOL IN LAGOS ✨
          </h1>
          <p>Backpacks, lunch kits, stationery, shoes, and gifting favourites designed for kids who love to move, play, and learn.</p>
          <div className="mk-hero-actions">
            <Link to="/shop" className="mk-shop-btn">SHOP NOW</Link>
            <Link to="/collections" className="mk-secondary-btn">See collections</Link>
          </div>
        </div>
        <div className="mk-hero-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&h=700&fit=crop&q=90"
            alt="Happy child with school backpack"
            className="mk-hero-img"
          />
        </div>
      </section>

      <section className="mk-collections">
        <h2>Featured Collections</h2>
        <div className="mk-collections-row">
          {collections.map(({ Icon, label }) => (
            <Link key={label} to={label === 'Reviews' ? '/about' : '/shop'} className="mk-collection-item">
              <div className="mk-collection-icon">
                <Icon />
              </div>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <BentoSpotlight items={featuredBento} />

      <section className="mk-top-products">
        <div className="mk-section-head">
          <h2>Top Products</h2>
          <Link to="/shop" className="mk-link-btn">View all</Link>
        </div>

        <div className="mk-horizontal-rail" aria-label="Featured products">
          {bestSellers.map((p) => (
            <div key={p.id} className="mk-rail-item">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      <section className="mk-story-band">
        <div className="mk-story-copy">
          <span className="mk-kicker">Why families shop with us</span>
          <h3>Comfort, quality and fun in every choice.</h3>
        </div>
        <div className="mk-story-metrics">
          <div><strong>1,200+</strong><span>happy students</span></div>
          <div><strong>4.9/5</strong><span>average rating</span></div>
          <div><strong>48h</strong><span>fast dispatch</span></div>
        </div>
      </section>

      <MeetSection />
      <ReviewPopup />

      <style>{`
        .mk-hero {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          min-height: 360px;
          overflow: hidden;
          background: #fff;
        }
        .mk-hero-text {
          background: linear-gradient(135deg, #f7f0ff 0%, #f3ebff 100%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 40px;
        }
        .mk-hero-badge {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(91,44,143,0.1);
          color: var(--mk-purple);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.1px;
          text-transform: uppercase;
          width: fit-content;
          margin-bottom: 14px;
        }
        .mk-hero-text h1 {
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 800;
          line-height: 1.18;
          margin: 0 0 16px;
          color: var(--mk-ink);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }
        .mk-hero-text p {
          margin: 0 0 22px;
          max-width: 560px;
          color: var(--mk-grey);
          font-size: 15px;
          line-height: 1.7;
        }
        .mk-hero-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .mk-shop-btn, .mk-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          padding: 14px 24px;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.8px;
          text-decoration: none;
          transition: transform 0.15s ease;
        }
        .mk-shop-btn {
          background: var(--mk-purple);
          color: #fff;
        }
        .mk-secondary-btn {
          background: #fff;
          color: var(--mk-purple);
          border: 1.5px solid rgba(91,44,143,0.4);
        }
        .mk-shop-btn:hover, .mk-secondary-btn:hover { transform: translateY(-1px); }
        .mk-hero-img-wrap {
          height: 100%;
          min-height: 360px;
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

        .mk-collections {
          padding: 44px 32px 18px;
          text-align: center;
          border-bottom: 1px solid var(--mk-border);
        }
        .mk-collections h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 28px;
        }
        .mk-collections-row {
          display: flex;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
        }
        .mk-collection-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          text-decoration: none;
          color: var(--mk-ink);
          transition: transform 0.15s ease;
        }
        .mk-collection-item:hover { transform: translateY(-2px); }
        .mk-collection-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          border: 1.5px solid var(--mk-purple);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          transition: background 0.2s;
        }
        .mk-collection-item:hover .mk-collection-icon {
          background: var(--mk-purple-light);
        }
        .mk-collection-item span {
          font-size: 14px;
          font-weight: 600;
          color: var(--mk-ink);
        }

        .mk-top-products {
          padding: 30px 32px 52px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mk-section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 22px;
        }
        .mk-section-head h2 {
          margin: 0;
          font-size: 28px;
          font-weight: 800;
        }
        .mk-link-btn {
          color: var(--mk-purple);
          text-decoration: none;
          font-weight: 700;
        }
        .mk-horizontal-rail {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(180px, 1fr);
          gap: 18px;
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: thin;
        }
        .mk-rail-item {
          min-width: 0;
        }

        .mk-story-band {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto 24px;
          padding: 28px 32px;
          border-radius: 22px;
          background: linear-gradient(135deg, #f8f3ff, #f6f6ff);
        }
        .mk-story-copy h3 {
          margin: 0;
          font-size: clamp(22px, 2vw, 30px);
          font-weight: 800;
        }
        .mk-story-metrics {
          display: flex;
          gap: 28px;
          flex-wrap: wrap;
        }
        .mk-story-metrics div {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 110px;
        }
        .mk-story-metrics strong {
          font-size: 24px;
          color: var(--mk-purple);
        }
        .mk-story-metrics span {
          font-size: 12px;
          color: var(--mk-grey);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

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
          .mk-story-band {
            flex-direction: column;
            align-items: flex-start;
            padding: 22px 20px;
          }
          .mk-story-metrics {
            width: 100%;
            justify-content: space-between;
            gap: 12px;
          }
          .mk-top-products {
            padding-left: 20px;
            padding-right: 20px;
          }
          .mk-horizontal-rail {
            grid-auto-columns: minmax(150px, 1fr);
          }
        }

        @media (max-width: 560px) {
          .mk-collections-row {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px 12px;
          }
          .mk-collection-item span {
            font-size: 12px;
          }
          .mk-product-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .mk-section-head {
            margin-bottom: 12px;
          }
          .mk-section-head h2 {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  )
}
