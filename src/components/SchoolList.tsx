import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ProductArt from './ProductArt'
import SectionHeading from './SectionHeading'
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
    <section className="school-list" id="school-list" aria-labelledby="school-list-title">
      <div className="wrap list-layout">
        <div>
          <SectionHeading
            id="school-list-title"
            align="start"
            eyebrow="The school list"
            title="Got the list? Tick it off"
            lead="Choose a class, tick what your child needs and add it all in one go."
          />

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
                  <span className="tick-box" aria-hidden="true"><FiCheck size={14} strokeWidth={3.5} /></span>
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

        <aside className="list-summary" aria-label="Your list">
          <div className="bag-scene" aria-hidden="true">
            <div className="bag-items">
              {stage.lines.map((line, i) => (
                <div key={`${stage.id}-${i}`} className={`bag-item slot-${i}${ticked.has(i) ? ' is-packed' : ''}`}>
                  <ProductArt product={line.product} decorative />
                </div>
              ))}
            </div>
            <svg className="bag-body" viewBox="0 0 600 470">
              <circle cx="84" cy="84" r="84" className="bag-ear" />
              <circle cx="516" cy="84" r="84" className="bag-ear" />
              <path d="M40 92h520v288c0 50-34 84-84 84H124c-50 0-84-34-84-84z" className="bag-front" />
              <rect x="96" y="176" width="408" height="238" rx="44" className="bag-pocket" />
            </svg>
          </div>

          <p className="bag-total" aria-live="polite">
            <span>{chosen.length} {chosen.length === 1 ? 'item' : 'items'} packed</span>
            <strong>{formatNaira(total)}</strong>
          </p>

          <div className="list-actions">
            <button type="button" className="btn btn-clay btn-wide" disabled={chosen.length === 0} onClick={addAll}>
              {chosen.length === 0 ? 'Tick an item to start' : 'Add to bag'}
            </button>
            {chosen.length > 0 && (
              <a className="btn btn-sage btn-wide" href={whatsappLink(whatsappMessage)} target="_blank" rel="noreferrer">
                <FaWhatsapp size={16} aria-hidden="true" /> Send on WhatsApp
              </a>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}
