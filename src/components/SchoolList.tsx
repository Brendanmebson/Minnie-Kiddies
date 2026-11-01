import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ProductArt from './ProductArt'
import Stripe from './Stripe'
import { schoolLists } from '../data/products'
import { formatNaira, whatsappLink } from '../data/site'
import { useCart } from '../context/cart'

const firstTicks = (stageIndex: number) =>
  new Set(Array.from({ length: schoolLists[stageIndex].preticked }, (_, i) => i))

export default function SchoolList() {
  const [stageIndex, setStageIndex] = useState(1)
  const [ticked, setTicked] = useState(() => firstTicks(1))
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const stage = schoolLists[stageIndex]
  const chosen = useMemo(() => stage.lines.filter((_, i) => ticked.has(i)), [stage, ticked])
  const total = chosen.reduce((sum, line) => sum + line.product.priceNum, 0)

  const chooseStage = (index: number) => {
    setStageIndex(index)
    setTicked(firstTicks(index))
  }

  const toggle = (index: number) => {
    setTicked((prev) => {
      const next = new Set(prev)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  const addAll = () => {
    chosen.forEach((line) => addToCart(line.product))
    navigate('/checkout')
  }

  const whatsappMessage = [
    `Hello Minnie Kiddies! Here is my ${stage.label} school list:`,
    ...chosen.map((line) => `- ${line.product.name} (${line.product.price})`),
    `Total before delivery: ${formatNaira(total)}`,
  ].join('\n')

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-card">
        <Stripe />
        <div className="hero-card-body">
          <h1 id="hero-title">Everything on the school list.</h1>
          <p className="hero-lead">
            Bags, shoes, lunch kits and stationery from our Lagos Island shop. Tick what your child
            needs and watch the bag fill up.
          </p>

          <div className="stage-tabs" role="group" aria-label="Choose a class">
            {schoolLists.map((s, i) => (
              <button key={s.id} type="button" aria-pressed={i === stageIndex} onClick={() => chooseStage(i)}>
                {s.label}
              </button>
            ))}
          </div>

          <ul className="list-lines">
            {stage.lines.map((line, i) => (
              <li key={`${stage.id}-${line.label}`}>
                <label className="list-line">
                  <input type="checkbox" checked={ticked.has(i)} onChange={() => toggle(i)} />
                  <span className="list-box" aria-hidden="true"><FiCheck size={18} strokeWidth={3.5} /></span>
                  <span className="list-text">
                    <span className="list-label">{line.label}</span>
                    <span className="list-product">{line.product.name}</span>
                  </span>
                  <span className="list-price">{line.product.price}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-foot">
          <button type="button" className="btn btn-solid btn-wide" disabled={chosen.length === 0} onClick={addAll}>
            {chosen.length === 0
              ? 'Tick an item to start'
              : `Add ${chosen.length} ${chosen.length === 1 ? 'item' : 'items'} to bag · ${formatNaira(total)}`}
          </button>
          {chosen.length > 0 && (
            <a className="hero-whatsapp" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer">
              <FaWhatsapp size={18} aria-hidden="true" /> Or send this list on WhatsApp
            </a>
          )}
        </div>
      </div>

      <div className="hero-stage">
        <div className="bag-scene">
          <div className="bag-items" aria-hidden="true">
            {stage.lines.map((line, i) => (
              <div key={`${stage.id}-${i}`} className={`bag-item slot-${i}${ticked.has(i) ? ' is-packed' : ''}`}>
                <ProductArt product={line.product} decorative />
              </div>
            ))}
          </div>
          <svg className="bag-body" viewBox="0 0 600 470" aria-hidden="true">
            <circle cx="84" cy="84" r="84" className="bag-ear" />
            <circle cx="516" cy="84" r="84" className="bag-ear" />
            <path d="M40 92h520v288c0 50-34 84-84 84H124c-50 0-84-34-84-84z" className="bag-front" />
            <rect x="96" y="176" width="408" height="238" rx="44" className="bag-pocket" />
            <path d="M40 92h520v46H40z" className="bag-rim" />
          </svg>
          <p className="bag-total" aria-live="polite">
            <strong>{formatNaira(total)}</strong>
            <span>{chosen.length} {chosen.length === 1 ? 'item' : 'items'} packed</span>
          </p>
        </div>
      </div>
    </section>
  )
}
