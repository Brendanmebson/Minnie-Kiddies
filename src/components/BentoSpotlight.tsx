import { Link } from 'react-router-dom'

type BentoItem = {
  title: string
  subtitle: string
  description: string
  image: string
  accent: string
  to: string
}

export default function BentoSpotlight({ items }: { items: BentoItem[] }) {
  return (
    <section className="mk-bento-section">
      <div className="mk-bento-header">
        <div>
          <span className="mk-kicker">Curated picks</span>
          <h2>From first-day essentials to after-school favourites</h2>
        </div>
        <Link to="/shop" className="mk-link-btn">Browse all</Link>
      </div>

      <div className="mk-bento-grid">
        {items.map((item, index) => (
          <Link
            key={item.title}
            to={item.to}
            className={`mk-bento-card mk-bento-card--${index + 1}`}
            style={{ background: item.accent }}
          >
            <div className="mk-bento-image-wrap">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="mk-bento-copy">
              <span>{item.subtitle}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .mk-bento-section {
          padding: 48px 32px 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mk-bento-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .mk-kicker {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--mk-purple);
          margin-bottom: 10px;
        }
        .mk-bento-header h2 {
          margin: 0;
          font-size: clamp(24px, 2vw, 34px);
          font-weight: 800;
          line-height: 1.1;
        }
        .mk-link-btn {
          color: var(--mk-purple);
          text-decoration: none;
          font-weight: 700;
        }
        .mk-bento-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 18px;
        }
        .mk-bento-card {
          position: relative;
          min-height: 260px;
          border-radius: 22px;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: 0 18px 40px rgba(56, 35, 89, 0.12);
        }
        .mk-bento-card--1 {
          grid-row: span 2;
          min-height: 540px;
        }
        .mk-bento-card--2,
        .mk-bento-card--3,
        .mk-bento-card--4 {
          min-height: 260px;
        }
        .mk-bento-image-wrap {
          position: absolute;
          inset: 0;
        }
        .mk-bento-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.75;
        }
        .mk-bento-copy {
          position: relative;
          z-index: 1;
          padding: 22px 20px;
          background: linear-gradient(180deg, transparent 0%, rgba(21, 14, 29, 0.72) 100%);
        }
        .mk-bento-copy span {
          display: block;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 8px;
          opacity: 0.8;
        }
        .mk-bento-copy h3 {
          margin: 0 0 8px;
          font-size: clamp(22px, 2vw, 30px);
          line-height: 1.1;
        }
        .mk-bento-copy p {
          margin: 0;
          font-size: 13px;
          line-height: 1.55;
          opacity: 0.9;
          max-width: 420px;
        }

        @media (max-width: 900px) {
          .mk-bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .mk-bento-card--1 {
            grid-column: span 2;
            min-height: 390px;
          }
        }

        @media (max-width: 560px) {
          .mk-bento-section {
            padding: 36px 16px 20px;
          }
          .mk-bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .mk-bento-card,
          .mk-bento-card--1,
          .mk-bento-card--2,
          .mk-bento-card--3,
          .mk-bento-card--4 {
            min-height: 200px;
          }
          .mk-bento-card--1 {
            grid-column: span 2;
            min-height: 260px;
          }
          .mk-bento-copy {
            padding: 16px 14px;
          }
          .mk-bento-copy h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  )
}
