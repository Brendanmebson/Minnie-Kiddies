import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiCreditCard, FiMinus, FiPlus, FiShoppingBag, FiTruck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ProductArt from '../components/ProductArt'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/cart'
import { getProductById, shopAllProducts, type Product } from '../data/products'
import { formatNaira, site, whatsappLink } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import { usePageTitle } from '../hooks/usePageTitle'
import NotFound from './NotFound'

const ADDED_FEEDBACK_MS = 2000

function ProductView({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [color, setColor] = useState(product.colors[0])
  const [added, setAdded] = useState(false)

  usePageTitle(product.name)

  const related = shopAllProducts
    .filter((p, i, all) => p.id !== product.id
      && p.motif !== product.motif
      && all.findIndex((other) => other.motif === p.motif) === i)
    .filter((p) => p.category === product.category || p.category === 'Lunch & Drinks')
    .slice(0, 4)

  const handleAdd = () => {
    addToCart(product, qty, color)
    setAdded(true)
    window.setTimeout(() => setAdded(false), ADDED_FEEDBACK_MS)
  }

  return (
    <>
      <nav className="wrap crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link><span aria-hidden="true">/</span>
        <Link to="/shop">Shop</Link><span aria-hidden="true">/</span>
        <Link to={`/shop?category=${encodeURIComponent(product.category)}`}>{product.category}</Link>
      </nav>

      <section className="wrap pd">
        <figure className="pd-plate">
          <ProductArt key={color} product={product} color={color} className="pd-art" />
          <figcaption className="pd-ask">
            This is a drawing.{' '}
            <a href={whatsappLink(`Hello Minnie Kiddies! Please send me photos of the ${product.name} in ${color}.`)} target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" /> Ask us for real photos
            </a>
          </figcaption>
        </figure>

        <div className="pd-info">
          <p className="eyebrow">{product.category}{product.isNew ? ' · New' : ''}</p>
          <h1>{product.name}</h1>
          <p className="pd-price">{product.price}</p>
          <p className="pd-desc">{product.description}</p>

          <fieldset className="pd-option">
            <legend>Colour: <strong>{color}</strong></legend>
            <div className="chips">
              {product.colors.map((c) => (
                <button key={c} type="button" className="chip" aria-pressed={color === c} onClick={() => setColor(c)}>{c}</button>
              ))}
            </div>
          </fieldset>

          <div className="pd-buy">
            <div className="qty" role="group" aria-label="Quantity">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Reduce quantity"><FiMinus size={18} /></button>
              <span aria-live="polite">{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity"><FiPlus size={18} /></button>
            </div>
            <button type="button" className="btn btn-clay btn-grow" onClick={handleAdd}>
              {added ? <FiCheck size={20} aria-hidden="true" /> : <FiShoppingBag size={20} aria-hidden="true" />}
              {added ? 'In your bag' : 'Add to bag'}
            </button>
          </div>

          <ul className="pd-perks">
            <li><FiTruck aria-hidden="true" /> {formatNaira(site.deliveryFee)} delivery to {site.deliveryStates.length} states</li>
            <li><FiCreditCard aria-hidden="true" /> Pay by transfer or on delivery</li>
          </ul>

          <h2>What you get</h2>
          <ul className="pd-features">
            {product.features.map((feature) => (
              <li key={feature}><FiCheck aria-hidden="true" /> {feature}</li>
            ))}
          </ul>
        </div>
      </section>

      {related.length > 0 && (
        <section className="wrap section related">
          <SectionHeading ornament eyebrow="Complete the set" title="Goes well with" />
          <div className="product-grid">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </>
  )
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const product = getProductById(id ?? '')

  if (!product) return <NotFound />
  return <ProductView key={product.id} product={product} />
}
