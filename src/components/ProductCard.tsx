import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import ProductArt from './ProductArt'
import { useCart } from '../context/cart'
import type { Product } from '../data/products'

const TONES = ['lilac', 'pink', 'yellow', 'green', 'blue']

const toneFor = (id: string) => TONES[[...id].reduce((sum, c) => sum + c.charCodeAt(0), 0) % TONES.length]

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()

  return (
    <article className="product">
      <Link to={`/product/${product.id}`} className={`product-plate tone-${toneFor(product.id)}`}>
        <ProductArt product={product} />
        {product.isNew && <span className="product-new">New</span>}
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`} className="product-name">{product.name}</Link>
        <span className="product-price">{product.price}</span>
      </div>
      <button
        type="button"
        className="product-add"
        onClick={() => addToCart(product)}
        aria-label={`Add ${product.name} to bag`}
      >
        <FiPlus size={20} aria-hidden="true" />
      </button>
    </article>
  )
}
