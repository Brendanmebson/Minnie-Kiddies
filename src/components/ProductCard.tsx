import { Link } from 'react-router-dom'
import type { Product } from '../data/products'
import { useState } from 'react'
import { FiShoppingBag, FiHeart, FiStar } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

export default function ProductCard({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false)
  const [liked, setLiked] = useState(false)

  // Generate a plausible rating & review count based on ID
  const rating = (4.7 + ((product.id.charCodeAt(0) % 4) * 0.1)).toFixed(1)
  const reviewsCount = 12 + (product.id.charCodeAt(0) * 3) % 40

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setLiked(!liked)
  }

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
        
        {/* Wishlist Button */}
        <button
          className={`mk-wishlist-btn ${liked ? 'mk-wishlist-btn--liked' : ''}`}
          onClick={toggleLike}
          aria-label="Add to wishlist"
          type="button"
        >
          {liked ? <FaHeart size={14} color="#E63946" /> : <FiHeart size={14} />}
        </button>

        {/* Overlay CTA */}
        <div className="mk-product-overlay">
          <span className="mk-quick-add-btn">
            <FiShoppingBag size={13} />
            Quick View
          </span>
        </div>
      </div>
      
      <div className="mk-product-info">
        <div className="mk-product-meta-row">
          <span className="mk-product-cat">{product.category}</span>
          <span className="mk-product-rating">
            <FiStar size={11} className="mk-star-icon" />
            <span>{rating}</span>
            <span className="mk-reviews-cnt">({reviewsCount})</span>
          </span>
        </div>
        <div className="mk-product-name">{product.name}</div>
        <div className="mk-product-price">{product.price}</div>
      </div>

      <style>{`
        .mk-product-card {
          display: block;
          width: 100%;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }
        .mk-product-img-wrap {
          aspect-ratio: 1 / 1;
          border-radius: 16px;
          overflow: hidden;
          background: #f7f7fa;
          position: relative;
          transition: box-shadow 0.25s var(--mk-ease), transform 0.25s var(--mk-ease-spring);
          width: 100%;
        }
        .mk-product-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s var(--mk-ease);
        }
        .mk-wishlist-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mk-ink);
          cursor: pointer;
          transition: transform 0.2s var(--mk-ease-spring), background 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .mk-wishlist-btn:hover {
          transform: scale(1.12);
          background: #fff;
        }
        .mk-wishlist-btn--liked {
          background: #fff;
        }
        .mk-product-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 14px;
          background: linear-gradient(to top, rgba(15, 10, 25, 0.5) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.25s var(--mk-ease);
        }
        .mk-quick-add-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #fff;
          color: var(--mk-purple);
          font-size: 12px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 999px;
          letter-spacing: 0.3px;
          transform: translateY(8px);
          transition: transform 0.22s var(--mk-ease-spring), box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(0,0,0,0.15);
        }
        .mk-product-card:hover .mk-product-img-wrap {
          box-shadow: 0 12px 28px rgba(91, 44, 143, 0.14);
          transform: translateY(-4px);
        }
        .mk-product-card:hover .mk-product-img-wrap img {
          transform: scale(1.06);
        }
        .mk-product-card:hover .mk-product-overlay {
          opacity: 1;
        }
        .mk-product-card:hover .mk-quick-add-btn {
          transform: translateY(0);
        }
        .mk-product-info {
          padding: 12px 2px 0;
          text-align: left;
        }
        .mk-product-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .mk-product-cat {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--mk-purple);
          opacity: 0.85;
        }
        .mk-product-rating {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 11px;
          font-weight: 700;
          color: var(--mk-ink);
        }
        .mk-star-icon {
          fill: #FFB800;
          color: #FFB800;
        }
        .mk-reviews-cnt {
          font-size: 10px;
          color: var(--mk-grey);
          font-weight: 500;
        }
        .mk-product-name {
          font-size: 13.5px;
          font-weight: 600;
          margin-bottom: 4px;
          line-height: 1.35;
          color: var(--mk-ink);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .mk-product-price {
          font-size: 15px;
          font-weight: 800;
          color: var(--mk-ink);
        }
      `}</style>
    </Link>
  )
}
