import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageHead from '../components/PageHead'
import ProductArt from '../components/ProductArt'
import { useCart, type CartItem } from '../context/cart'
import { formatNaira, site, whatsappLink } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

type Method = 'transfer' | 'pod'

const PAYMENT_LABELS: Record<Method, string> = {
  transfer: 'Bank transfer',
  pod: 'Pay on delivery',
}

const REQUIRED_FIELDS = {
  name: 'Please enter your full name',
  phone: 'Please enter a phone number',
  address: 'Please enter a delivery address',
  state: 'Please choose a state',
}

type Field = 'name' | 'phone' | 'email' | 'address' | 'state'

const buildOrderMessage = (items: CartItem[], form: Record<Field, string>, method: Method, total: number) =>
  [
    'Hello Minnie Kiddies! I would like to place this order:',
    '',
    ...items.map(({ product, color, quantity }) => `${quantity} x ${product.name} (${color}): ${formatNaira(product.priceNum * quantity)}`),
    '',
    `Delivery: ${formatNaira(site.deliveryFee)}`,
    `Total: ${formatNaira(total)}`,
    `Payment: ${PAYMENT_LABELS[method]}`,
    '',
    `Name: ${form.name.trim()}`,
    `Phone: ${form.phone.trim()}`,
    ...(form.email.trim() ? [`Email: ${form.email.trim()}`] : []),
    `Address: ${form.address.trim()}, ${form.state}`,
  ].join('\n')

export default function Checkout() {
  usePageTitle('Your bag')

  const { items, removeFromCart, updateQty, total, clearCart } = useCart()
  const [form, setForm] = useState<Record<Field, string>>({ name: '', phone: '', email: '', address: '', state: '' })
  const [method, setMethod] = useState<Method>('transfer')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sentLink, setSentLink] = useState('')

  const grandTotal = total + site.deliveryFee

  const handleField = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[name]
      return next
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = Object.fromEntries(
      Object.entries(REQUIRED_FIELDS).filter(([field]) => !form[field as Field].trim()),
    )
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    const link = whatsappLink(buildOrderMessage(items, form, method, grandTotal))
    setSentLink(link)
    clearCart()
    window.open(link, '_blank', 'noopener')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (sentLink) {
    return (
      <PageHead eyebrow="Almost done" title="One last step" size="state">
        <p>
          Press send in WhatsApp so your order reaches us. We'll confirm it on {form.phone.trim()}
          {method === 'transfer' ? ' and send the bank details in the chat.' : '.'}
        </p>
        <a className="btn btn-clay" href={sentLink} target="_blank" rel="noreferrer">
          <FaWhatsapp size={20} aria-hidden="true" /> Open WhatsApp again
        </a>
      </PageHead>
    )
  }

  if (items.length === 0) {
    return (
      <PageHead eyebrow="Your bag" title="Your bag is empty" size="state">
        <p>Tick your school list or browse the shelves to fill it up.</p>
        <div className="btn-row">
          <Link to="/shop" className="btn btn-clay">Go shopping</Link>
          <Link to="/#school-list" className="btn btn-sage">Tick off a school list</Link>
        </div>
      </PageHead>
    )
  }

  const fieldProps = (name: Field) => ({
    id: name,
    name,
    value: form[name],
    onChange: handleField,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  })

  const fieldError = (name: Field) =>
    errors[name] && <span className="field-error" id={`${name}-error`}>{errors[name]}</span>

  return (
    <>
      <PageHead eyebrow="Checkout" title="Your bag">
        <p>Check your list, tell us where it's going, and send the order on WhatsApp.</p>
      </PageHead>

      <div className="wrap checkout">
        <section className="receipt" aria-labelledby="receipt-title">
          <h2 id="receipt-title">Your list</h2>
          <ul className="receipt-items">
            {items.map(({ key, product, color, quantity }) => (
              <li key={key}>
                <div className="receipt-art"><ProductArt product={product} color={color} decorative /></div>
                <div className="receipt-line">
                  <Link to={`/product/${product.id}`}>{product.name}</Link>
                  <span>{color}</span>
                  <div className="qty qty-small" role="group" aria-label={`Quantity of ${product.name}`}>
                    <button type="button" onClick={() => updateQty(key, quantity - 1)} aria-label="Reduce quantity"><FiMinus size={16} /></button>
                    <span>{quantity}</span>
                    <button type="button" onClick={() => updateQty(key, quantity + 1)} aria-label="Increase quantity"><FiPlus size={16} /></button>
                    <button type="button" className="receipt-remove" onClick={() => removeFromCart(key)} aria-label={`Remove ${product.name}`}><FiTrash2 size={16} /></button>
                  </div>
                </div>
                <strong>{formatNaira(product.priceNum * quantity)}</strong>
              </li>
            ))}
          </ul>
          <dl className="receipt-totals">
            <div><dt>Subtotal</dt><dd>{formatNaira(total)}</dd></div>
            <div><dt>Delivery</dt><dd>{formatNaira(site.deliveryFee)}</dd></div>
            <div className="receipt-grand"><dt>Total</dt><dd>{formatNaira(grandTotal)}</dd></div>
          </dl>
        </section>

        <form className="checkout-form" onSubmit={handleSubmit} noValidate>
          <h2>Where should it go?</h2>

          <div className="field">
            <label htmlFor="name">Full name</label>
            <input {...fieldProps('name')} autoComplete="name" />
            {fieldError('name')}
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="phone">Phone number</label>
              <input {...fieldProps('phone')} type="tel" autoComplete="tel" inputMode="tel" />
              {fieldError('phone')}
            </div>
            <div className="field">
              <label htmlFor="email">Email (optional)</label>
              <input {...fieldProps('email')} type="email" autoComplete="email" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="address">Delivery address</label>
            <input {...fieldProps('address')} autoComplete="street-address" />
            {fieldError('address')}
          </div>
          <div className="field">
            <label htmlFor="state">State</label>
            <select {...fieldProps('state')}>
              <option value="">Choose a state</option>
              {site.deliveryStates.map((state) => <option key={state}>{state}</option>)}
            </select>
            {fieldError('state')}
          </div>

          <fieldset className="pay">
            <legend>How would you like to pay?</legend>
            {(Object.keys(PAYMENT_LABELS) as Method[]).map((value) => (
              <label key={value} className="pay-option">
                <input type="radio" name="method" checked={method === value} onChange={() => setMethod(value)} />
                <span className="tick-box" aria-hidden="true"><FiCheck size={14} strokeWidth={3.5} /></span>
                <span>
                  <strong>{PAYMENT_LABELS[value]}</strong>
                  {value === 'transfer' ? 'We send the account details on WhatsApp.' : 'Pay cash when your order arrives.'}
                </span>
              </label>
            ))}
          </fieldset>

          <button type="submit" className="btn btn-clay btn-wide">
            <FaWhatsapp size={20} aria-hidden="true" /> Order on WhatsApp · {formatNaira(grandTotal)}
          </button>
          <p className="checkout-note">This opens WhatsApp with your order ready to send.</p>
        </form>
      </div>
    </>
  )
}
