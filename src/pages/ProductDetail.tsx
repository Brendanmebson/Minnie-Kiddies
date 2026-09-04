import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FiShoppingCart, FiChevronLeft, FiCheck, FiMinus, FiPlus } from 'react-icons/fi'
import { getProductById, shopAllProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/cart'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const product = getProductById(id ?? '')
  const [qty, setQty] = useState(1)
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product?.colors?.[0] ?? null
  )
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="mk-notfound">
        <h1>Product not found</h1>
        <Link to="/shop" className="mk-btn-primary">Back to Shop</Link>
      </div>
    )
  }

  const images = product.images ?? [product.image]
  const related = shopAllProducts.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3)

  const handleAddToCart = () => {
    addToCart(product, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mk-breadcrumb">
        <button onClick={() => navigate(-1)} className="mk-back-btn">
          <FiChevronLeft size={16} /> Back
        </button>
        <span>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / {product.name}
        </span>
      </div>

      {/* Main product layout */}
      <section className="mk-pd-grid">
        {/* Image column */}
        <div className="mk-pd-images">
          <div className="mk-pd-main-img">
            <img
              src={images[activeImg] ?? product.image}
              alt={product.name}
            />
          </div>
          {images.length > 1 && (
            <div className="mk-pd-thumbs">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`mk-thumb${activeImg === i ? ' mk-thumb--active' : ''}`}
                >
                  <img src={src} alt={`${product.name} view ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details column */}
        <div className="mk-pd-details">
          <span className="mk-pd-category">{product.category}</span>
          <h1 className="mk-pd-name">{product.name}</h1>
          <div className="mk-pd-price">{product.price}</div>

          <p className="mk-pd-desc">{product.description}</p>

          {/* Color selector */}
          {product.colors && product.colors.length > 0 && (
            <div className="mk-pd-option">
              <div className="mk-pd-option-label">
                Colour: <strong>{selectedColor}</strong>
              </div>
              <div className="mk-pd-colors">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`mk-color-pill${selectedColor === c ? ' mk-color-pill--active' : ''}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="mk-pd-option">
            <div className="mk-pd-option-label">Quantity</div>
            <div className="mk-qty-row">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="mk-qty-btn"
                aria-label="Decrease"
              >
                <FiMinus size={14} />
              </button>
              <span className="mk-qty-val">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="mk-qty-btn"
                aria-label="Increase"
              >
                <FiPlus size={14} />
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mk-pd-cta">
            <button
              onClick={handleAddToCart}
              className={`mk-btn-primary mk-btn-cart${added ? ' mk-btn-cart--added' : ''}`}
            >
              {added ? (
                <><FiCheck size={17} /> Added to Cart!</>
              ) : (
                <><FiShoppingCart size={17} /> Add to Cart</>
              )}
            </button>
            <Link to="/checkout" className="mk-btn-secondary">
              Buy Now
            </Link>
          </div>

          {/* Features */}
          <div className="mk-pd-features">
            <div className="mk-pd-features-title">What's included</div>
            <ul>
              {product.features.map((f) => (
                <li key={f}>
                  <FiCheck size={14} className="mk-feature-check" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="mk-related">
          <h2>You may also like</h2>
          <div className="mk-related-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      <style>{`
        .mk-notfound {
          text-align: center;
          padding: 80px 24px;
        }

        /* Breadcrumb */
        .mk-breadcrumb {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 40px;
          font-size: 13px;
          color: var(--mk-grey);
          border-bottom: 1px solid var(--mk-border);
          flex-wrap: wrap;
        }
        .mk-breadcrumb a {
          color: var(--mk-grey);
          transition: color 0.15s;
        }
        .mk-breadcrumb a:hover { color: var(--mk-purple); }
        .mk-back-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: 1px solid var(--mk-border);
          border-radius: 6px;
          padding: 5px 12px;
          font-size: 13px;
          font-family: inherit;
          cursor: pointer;
          color: var(--mk-grey);
          transition: all 0.15s;
        }
        .mk-back-btn:hover { border-color: var(--mk-purple); color: var(--mk-purple); }

        /* Main grid */
        .mk-pd-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 40px 60px;
        }

        /* Images */
        .mk-pd-images { display: flex; flex-direction: column; gap: 12px; }
        .mk-pd-main-img {
          aspect-ratio: 1 / 1;
          border-radius: 12px;
          overflow: hidden;
          background: #f5f5f5;
        }
        .mk-pd-main-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .mk-pd-thumbs {
          display: flex;
          gap: 10px;
        }
        .mk-thumb {
          width: 72px;
          height: 72px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid transparent;
          padding: 0;
          cursor: pointer;
          background: #f5f5f5;
          transition: border-color 0.15s;
          flex-shrink: 0;
        }
        .mk-thumb--active { border-color: var(--mk-purple); }
        .mk-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Details */
        .mk-pd-details { display: flex; flex-direction: column; gap: 0; }
        .mk-pd-category {
          display: inline-block;
          background: var(--mk-purple-light);
          color: var(--mk-purple);
          font-size: 12px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 12px;
          align-self: flex-start;
        }
        .mk-pd-name {
          font-size: 28px;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 12px;
        }
        .mk-pd-price {
          font-size: 26px;
          font-weight: 800;
          color: var(--mk-purple);
          margin-bottom: 18px;
        }
        .mk-pd-desc {
          font-size: 14px;
          color: var(--mk-grey);
          line-height: 1.7;
          margin: 0 0 24px;
        }

        /* Options */
        .mk-pd-option { margin-bottom: 20px; }
        .mk-pd-option-label {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--mk-ink);
        }
        .mk-pd-colors { display: flex; flex-wrap: wrap; gap: 8px; }
        .mk-color-pill {
          padding: 5px 14px;
          border-radius: 20px;
          border: 1.5px solid var(--mk-border);
          background: #fff;
          font-size: 12px;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.15s;
          color: var(--mk-ink);
        }
        .mk-color-pill:hover { border-color: var(--mk-purple); }
        .mk-color-pill--active {
          border-color: var(--mk-purple);
          background: var(--mk-purple-light);
          color: var(--mk-purple);
          font-weight: 600;
        }

        /* Quantity */
        .mk-qty-row {
          display: flex;
          align-items: center;
          gap: 0;
          border: 1.5px solid var(--mk-border);
          border-radius: 8px;
          width: fit-content;
          overflow: hidden;
        }
        .mk-qty-btn {
          background: none;
          border: none;
          padding: 10px 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          color: var(--mk-ink);
          transition: background 0.15s;
        }
        .mk-qty-btn:hover { background: var(--mk-purple-light); }
        .mk-qty-val {
          min-width: 40px;
          text-align: center;
          font-weight: 600;
          font-size: 15px;
          border-left: 1px solid var(--mk-border);
          border-right: 1px solid var(--mk-border);
          padding: 10px 0;
        }

        /* CTA buttons */
        .mk-pd-cta {
          display: flex;
          gap: 12px;
          margin: 4px 0 24px;
          flex-wrap: wrap;
        }
        .mk-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--mk-purple);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.1s;
          white-space: nowrap;
        }
        .mk-btn-primary:hover { background: var(--mk-purple-dark); }
        .mk-btn-primary:active { transform: scale(0.98); }
        .mk-btn-cart--added { background: #2a9d5c; }
        .mk-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--mk-purple);
          border: 2px solid var(--mk-purple);
          border-radius: 8px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 700;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .mk-btn-secondary:hover {
          background: var(--mk-purple);
          color: #fff;
        }

        /* Features */
        .mk-pd-features {
          background: var(--mk-purple-light);
          border-radius: 10px;
          padding: 16px 20px;
        }
        .mk-pd-features-title {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--mk-ink);
        }
        .mk-pd-features ul {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .mk-pd-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--mk-grey);
        }
        .mk-feature-check { color: var(--mk-purple); flex-shrink: 0; }

        /* Related */
        .mk-related {
          padding: 0 40px 60px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .mk-related h2 {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 24px;
        }
        .mk-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* Responsive */
        @media (max-width: 760px) {
          .mk-pd-grid {
            grid-template-columns: 1fr;
            padding: 24px 20px 40px;
            gap: 28px;
          }
          .mk-pd-name { font-size: 22px; }
          .mk-pd-price { font-size: 22px; }
          .mk-breadcrumb { padding: 12px 20px; }
          .mk-related { padding: 0 20px 40px; }
          .mk-related-grid { grid-template-columns: repeat(2, 1fr); }
          .mk-pd-cta { flex-direction: column; }
          .mk-btn-primary, .mk-btn-secondary { width: 100%; justify-content: center; }
        }
      `}</style>
    </div>
  )
}
