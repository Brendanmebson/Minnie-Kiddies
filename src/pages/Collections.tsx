import { Link } from 'react-router-dom'
import { shopAllProducts } from '../data/products'

const innerCategoryLinks = [
  { label: 'All Products', to: '/shop' },
  { label: 'Backpacks', to: '/shop?category=Back%202%20School' },
  { label: 'Lunch & Drinks', to: '/shop?category=Lunch%20%26%20Drinks' },
  { label: 'Stationery', to: '/shop?category=Art%20%26%20Stationery' },
  { label: 'Shoes', to: '/shop?category=Shoes' },
  { label: 'Girls', to: '/shop?category=Girls' },
]

const categories = [
  {
    id: 'back-2-school',
    label: 'Back 2 School',
    description: 'Everything your child needs to start the term in style',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=700&fit=crop&q=85',
    filter: 'Back 2 School',
    color: '#5B2C8F',
  },
  {
    id: 'new-arrivals',
    label: 'New Arrivals',
    description: 'The latest backpack sets and accessories just landed',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=700&fit=crop&q=85',
    filter: 'New Arrivals',
    color: '#3E1C63',
  },
  {
    id: 'girls',
    label: "Girls' Collection",
    description: 'Pretty, vibrant sets built for every girl\'s personality',
    image: 'https://images.unsplash.com/photo-1600359756070-f9e7a3ed9aa9?w=600&h=700&fit=crop&q=85',
    filter: 'Girls',
    color: '#D64E8A',
  },
  {
    id: 'shoes',
    label: 'School Shoes',
    description: 'Comfortable, durable shoes from first day to last bell',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=700&fit=crop&q=85',
    filter: 'Shoes',
    color: '#1B1B1F',
  },
  {
    id: 'lunch-drinks',
    label: 'Lunch & Drinks',
    description: 'Fresh, fun food containers and bottles for every school day',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&h=700&fit=crop&q=85',
    filter: 'Lunch & Drinks',
    color: '#D9781E',
  },
  {
    id: 'art-stationery',
    label: 'Art & Stationery',
    description: 'Creative kits and classroom essentials for curious minds',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=700&fit=crop&q=85',
    filter: 'Art & Stationery',
    color: '#2A7F62',
  },
]

export default function Collections() {
  return (
    <div>
      {/* Hero */}
      <section className="mk-coll-hero">
        <h1>Collections</h1>
        <p>Shop by category and find exactly what your child needs.</p>
      </section>

      <div className="mk-coll-subnav">
        {innerCategoryLinks.map((item) => (
          <Link key={item.label} to={item.to} className="mk-coll-subnav-link">
            {item.label}
          </Link>
        ))}
      </div>

      {/* Category grid */}
      <section className="mk-coll-grid-section">
        <div className="mk-coll-grid">
          {categories.map((cat) => {
            const count = shopAllProducts.filter((p) => p.category === cat.filter).length
            return (
              <Link
                key={cat.id}
                to={`/shop?category=${encodeURIComponent(cat.filter)}`}
                className="mk-coll-card"
              >
                <div className="mk-coll-img-wrap">
                  <img src={cat.image} alt={cat.label} />
                  <div className="mk-coll-card-content">
                    <div className="mk-coll-count">{count} items</div>
                    <h2 className="mk-coll-name">{cat.label}</h2>
                    <p className="mk-coll-desc">{cat.description}</p>
                    <span className="mk-coll-cta">Shop Now →</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* All products CTA */}
      <section className="mk-coll-all">
        <h2>Can't decide? Browse Everything</h2>
        <p>View all {shopAllProducts.length} products in our catalogue</p>
        <Link to="/shop" className="mk-btn-primary">Shop All Products</Link>
      </section>

      <style>{`
        .mk-coll-hero {
          background: var(--mk-purple-light);
          text-align: center;
          padding: 56px 24px 48px;
        }
        .mk-coll-hero h1 {
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .mk-coll-hero p {
          font-size: 16px;
          color: var(--mk-grey);
          margin: 0;
        }

        .mk-coll-subnav {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          padding: 28px 20px 0;
          max-width: 1100px;
          margin: 0 auto;
        }
        .mk-coll-subnav-link {
          text-decoration: none;
          color: var(--mk-ink);
          background: #fff;
          border: 1px solid var(--mk-border);
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 12px;
          font-weight: 600;
          transition: all 0.15s ease;
        }
        .mk-coll-subnav-link:hover {
          border-color: var(--mk-purple);
          color: var(--mk-purple);
          background: var(--mk-purple-light);
        }
        .mk-coll-grid-section {
          padding: 48px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .mk-coll-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .mk-coll-card {
          display: block;
          border-radius: 14px;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
        }
        .mk-coll-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
        }
        .mk-coll-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .mk-coll-card:hover .mk-coll-img-wrap img {
          transform: scale(1.06);
        }
        .mk-coll-card-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
          background: linear-gradient(180deg, rgba(18, 12, 24, 0.08) 0%, rgba(18, 12, 24, 0.68) 100%);
        }
        .mk-coll-count {
          font-size: 12px;
          font-weight: 600;
          opacity: 0.8;
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .mk-coll-name {
          font-size: 22px;
          font-weight: 800;
          margin: 0 0 6px;
        }
        .mk-coll-desc {
          font-size: 13px;
          opacity: 0.85;
          margin: 0 0 14px;
          line-height: 1.5;
        }
        .mk-coll-cta {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          border: 1px solid rgba(255,255,255,0.4);
          padding: 7px 18px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
          backdrop-filter: blur(4px);
          transition: background 0.2s;
        }
        .mk-coll-card:hover .mk-coll-cta {
          background: rgba(255,255,255,0.35);
        }

        .mk-coll-all {
          text-align: center;
          padding: 0 24px 60px;
        }
        .mk-coll-all h2 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 10px;
        }
        .mk-coll-all p {
          color: var(--mk-grey);
          margin: 0 0 24px;
        }
        .mk-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--mk-purple);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
        }
        .mk-btn-primary:hover { background: var(--mk-purple-dark); }

        @media (max-width: 640px) {
          .mk-coll-grid { grid-template-columns: 1fr; }
          .mk-coll-grid-section { padding: 32px 20px; }
          .mk-coll-hero h1 { font-size: 28px; }
        }
      `}</style>
    </div>
  )
}
