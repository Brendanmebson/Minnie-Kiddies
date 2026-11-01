import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiPlus } from 'react-icons/fi'
import ProductArt from './ProductArt'
import { useCart } from '../context/cart'
import type { Product } from '../data/products'

const ADDED_FEEDBACK_MS = 1200

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addToCart(product)
    setAdded(true)
    window.setTimeout(() => setAdded(false), ADDED_FEEDBACK_MS)
  }

  return (
    <article className="product">
      <div className="product-media">
        <Link to={`/product/${product.id}`} className="product-plate" tabIndex={-1} aria-hidden="true">
          <ProductArt product={product} decorative />
        </Link>
        {product.isNew && <span className="product-new">New</span>}
        <button
          type="button"
          className={`product-add${added ? ' is-added' : ''}`}
          onClick={handleAdd}
          aria-label={`Add ${product.name} to bag`}
        >
          {added ? <FiCheck size={18} strokeWidth={3} aria-hidden="true" /> : <FiPlus size={18} aria-hidden="true" />}
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
      <p className="product-price">{product.price}</p>
    </article>
  )
}
