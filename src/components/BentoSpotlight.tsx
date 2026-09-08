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
        <Link to="/shop" className="mk-bento-browse-btn">Browse all →</Link>
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
              <div className="mk-bento-cta">Shop Now →</div>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .mk-bento-section {
          padding: 56px 32px 36px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mk-bento-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }
        .mk-kicker {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--mk-purple);
          margin-bottom: 8px;
          background: var(--mk-purple-faint);
          padding: 4px 10px;
          border-radius: 999px;
        }
        .mk-bento-header h2 {
          margin: 0;
          font-size: clamp(22px, 2vw, 32px);
          font-weight: 800;
          line-height: 1.15;
          max-width: 500px;
        }
        .mk-bento-browse-btn {
          color: var(--mk-purple);
          text-decoration: none;
          font-weight: 700;
          font-size: 14px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 8px 18px;
          border-radius: 8px;
          border: 1.5px solid var(--mk-purple);
          transition: background var(--mk-transition-fast), color var(--mk-transition-fast);
          white-space: nowrap;
        }
        .mk-bento-browse-btn:hover {
          background: var(--mk-purple);
          color: #fff;
        }
        .mk-bento-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 20px;
        }
        .mk-bento-card {
          position: relative;
          min-height: 260px;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: var(--mk-shadow-lg);
          transition: transform 0.3s var(--mk-ease-spring), box-shadow 0.3s var(--mk-ease);
        }
        .mk-bento-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: var(--mk-shadow-xl);
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
          transition: transform 0.4s var(--mk-ease);
        }
        .mk-bento-card:hover .mk-bento-image-wrap {
          transform: scale(1.04);
        }
        .mk-bento-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.72;
          transition: opacity 0.3s var(--mk-ease);
        }
        .mk-bento-card:hover .mk-bento-image-wrap img {
          opacity: 0.62;
        }
        .mk-bento-copy {
          position: relative;
          z-index: 1;
          padding: 26px 22px;
          background: linear-gradient(180deg, transparent 0%, rgba(14, 8, 22, 0.82) 100%);
        }
        .mk-bento-copy span {
          display: block;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 6px;
          opacity: 0.75;
        }
        .mk-bento-copy h3 {
          margin: 0 0 8px;
          font-size: clamp(20px, 2vw, 28px);
          line-height: 1.15;
          font-weight: 800;
        }
        .mk-bento-copy p {
          margin: 0 0 14px;
          font-size: 13px;
          line-height: 1.55;
          opacity: 0.85;
          max-width: 420px;
        }
        .mk-bento-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.35);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 14px;
          border-radius: 999px;
          letter-spacing: 0.3px;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s var(--mk-ease), transform 0.25s var(--mk-ease-spring);
        }
        .mk-bento-card:hover .mk-bento-cta {
          opacity: 1;
          transform: translateY(0);
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
            padding: 36px 16px 24px;
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
