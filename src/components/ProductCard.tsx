import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductArt from './ProductArt'
import { useCart } from '../context/cart'
import type { Product } from '../data/products'

const ADDED_FEEDBACK_MS = 1600

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!added) return
    const timer = window.setTimeout(() => setAdded(false), ADDED_FEEDBACK_MS)
    return () => window.clearTimeout(timer)
  }, [added])

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
  }

  return (
    <article className="product">
      <Link to={`/product/${product.id}`} className="product-plate" tabIndex={-1} aria-hidden="true">
        <ProductArt product={product} decorative />
      </Link>
      {product.isNew && <span className="product-tag">New</span>}
      <p className="product-cat">{product.category}</p>
      <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
      <div className="product-foot">
        <p className="product-price">{product.price}</p>
        <button
          type="button"
          className={`product-add${added ? ' is-added' : ''}`}
          onClick={handleAdd}
          aria-label={added ? `${product.name} added to bag` : `Add ${product.name} to bag`}
        >
          {added ? 'Added' : 'Add to bag'}
        </button>
      </div>
    </article>
  )
}
