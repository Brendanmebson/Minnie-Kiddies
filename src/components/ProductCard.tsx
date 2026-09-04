import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { useState } from 'react'

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link to={`/product/${product.id}`} className="mk-product-card">
      <div className="mk-product-img-wrap">
        {!imgError && product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: product.gradient ?? 'linear-gradient(135deg,#C9BEEC,#5B2C8F)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 44,
            }}
          >
            <span role="img" aria-label={product.name}>{product.emoji}</span>
          </div>
        )}
      </div>
      <div className="mk-product-info">
        <div className="mk-product-name">{product.name}</div>
        <div className="mk-product-price">{product.price}</div>
      </div>

      <style>{`
        .mk-product-card {
          display: block;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        .mk-product-img-wrap {
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          overflow: hidden;
          background: #f5f5f5;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .mk-product-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .mk-product-card:hover .mk-product-img-wrap {
          box-shadow: 0 6px 22px rgba(91,44,143,0.18);
          transform: translateY(-2px);
        }
        .mk-product-card:hover .mk-product-img-wrap img {
          transform: scale(1.04);
        }
        .mk-product-info {
          padding: 8px 2px 0;
          text-align: center;
        }
        .mk-product-name {
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 3px;
          line-height: 1.4;
        }
        .mk-product-price {
          font-size: 14px;
          font-weight: 700;
          color: var(--mk-ink);
        }
      `}</style>
    </Link>
  )
}
