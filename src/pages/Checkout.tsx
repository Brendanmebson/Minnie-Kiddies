import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiTrash2, FiMinus, FiPlus, FiChevronLeft, FiCheck, FiCopy } from 'react-icons/fi'
import { SiVisa, SiMastercard } from 'react-icons/si'
import { useCart } from '../context/cart'

const DELIVERY_FEE = 2500

type Method = 'transfer' | 'pod'

export default function Checkout() {
  const navigate = useNavigate()
  const { items, removeFromCart, updateQty, total, clearCart } = useCart()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    state: '',
  })
  const [method, setMethod] = useState<Method>('transfer')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [success, setSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const grandTotal = total + DELIVERY_FEE

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => { const n = { ...e }; delete n[name]; return n })
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Full name is required'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    if (!form.address.trim()) errs.address = 'Delivery address is required'
    if (!form.state.trim()) errs.state = 'State is required'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSuccess(true)
    clearCart()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const copyAccount = () => {
    navigator.clipboard.writeText('1234567890').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (success) {
    return (
      <div className="mk-order-success">
        <div className="mk-success-icon">✅</div>
        <h1>Order Placed!</h1>
        <p>
          Thank you for shopping with Minnie Kiddies! We'll contact you on{' '}
          <strong>{form.phone || 'your number'}</strong> to confirm your order.
        </p>
        {method === 'transfer' && (
          <div className="mk-success-bank">
            <p>Please complete your bank transfer to:</p>
            <div className="mk-bank-box">
              <div><span>Bank:</span> <strong>First Bank Nigeria</strong></div>
              <div><span>Account Name:</span> <strong>Minnie Kiddies Ltd</strong></div>
              <div><span>Account No:</span> <strong>1234567890</strong></div>
              <div><span>Amount:</span> <strong>₦{grandTotal.toLocaleString()}</strong></div>
            </div>
          </div>
        )}
        <Link to="/" className="mk-btn-primary">Continue Shopping</Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mk-empty-cart-wrap">
        <div className="mk-empty-cart">
          <div style={{ fontSize: 56 }}>🛒</div>
          <h2>Your cart is empty</h2>
          <p>Browse our products and add something great for your little one.</p>
          <Link to="/shop" className="mk-btn-primary">Shop Now</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mk-checkout-header">
        <button onClick={() => navigate(-1)} className="mk-back-btn">
          <FiChevronLeft size={16} /> Back
        </button>
        <h1>Checkout</h1>
      </div>

      <div className="mk-checkout-grid">
        {/* Left — Order summary */}
        <div className="mk-order-summary">
          <h2>Order Summary</h2>

          <div className="mk-cart-items">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="mk-cart-item">
                <img src={product.image} alt={product.name} className="mk-cart-item-img" />
                <div className="mk-cart-item-info">
                  <div className="mk-cart-item-name">{product.name}</div>
                  <div className="mk-cart-item-price">
                    {product.price} × {quantity}
                  </div>
                  <div className="mk-cart-item-total">
                    ₦{(product.priceNum * quantity).toLocaleString()}
                  </div>
                  <div className="mk-cart-item-qty">
                    <button
                      onClick={() => updateQty(product.id, quantity - 1)}
                      className="mk-qty-btn-sm"
                    >
                      <FiMinus size={12} />
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => updateQty(product.id, quantity + 1)}
                      className="mk-qty-btn-sm"
                    >
                      <FiPlus size={12} />
                    </button>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="mk-remove-btn"
                      aria-label="Remove"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mk-order-totals">
            <div className="mk-total-row">
              <span>Subtotal</span>
              <span>₦{total.toLocaleString()}</span>
            </div>
            <div className="mk-total-row">
              <span>Delivery Fee</span>
              <span>₦{DELIVERY_FEE.toLocaleString()}</span>
            </div>
            <div className="mk-total-row mk-grand-total">
              <span>Total</span>
              <span>₦{grandTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Right — Customer details + payment */}
        <form className="mk-checkout-form" onSubmit={handleSubmit} noValidate>
          <h2>Delivery Details</h2>

          <div className="mk-form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              placeholder="e.g. Amaka Johnson"
              value={form.name}
              onChange={handleField}
              className={errors.name ? 'mk-input mk-input--error' : 'mk-input'}
            />
            {errors.name && <span className="mk-error">{errors.name}</span>}
          </div>

          <div className="mk-form-row">
            <div className="mk-form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234 812 345 6789"
                value={form.phone}
                onChange={handleField}
                className={errors.phone ? 'mk-input mk-input--error' : 'mk-input'}
              />
              {errors.phone && <span className="mk-error">{errors.phone}</span>}
            </div>
            <div className="mk-form-group">
              <label htmlFor="email">Email (optional)</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={form.email}
                onChange={handleField}
                className="mk-input"
              />
            </div>
          </div>

          <div className="mk-form-group">
            <label htmlFor="address">Delivery Address *</label>
            <input
              id="address"
              name="address"
              placeholder="House number, street, area"
              value={form.address}
              onChange={handleField}
              className={errors.address ? 'mk-input mk-input--error' : 'mk-input'}
            />
            {errors.address && <span className="mk-error">{errors.address}</span>}
          </div>

          <div className="mk-form-group">
            <label htmlFor="state">State *</label>
            <select
              id="state"
              name="state"
              value={form.state}
              onChange={handleField}
              className={errors.state ? 'mk-input mk-input--error' : 'mk-input'}
            >
              <option value="">Select a state</option>
              {['Lagos', 'Abuja', 'Ogun', 'Rivers', 'Oyo', 'Kano', 'Delta', 'Enugu', 'Anambra', 'Imo'].map(
                (s) => <option key={s}>{s}</option>
              )}
            </select>
            {errors.state && <span className="mk-error">{errors.state}</span>}
          </div>

          {/* Payment method */}
          <div className="mk-payment-section">
            <h2>Payment Method</h2>
            <div className="mk-payment-methods">
              <label className={`mk-payment-option${method === 'transfer' ? ' mk-payment-option--active' : ''}`}>
                <input
                  type="radio"
                  name="method"
                  value="transfer"
                  checked={method === 'transfer'}
                  onChange={() => setMethod('transfer')}
                />
                <div className="mk-payment-icon">🏦</div>
                <div>
                  <div className="mk-payment-title">Bank Transfer</div>
                  <div className="mk-payment-sub">Transfer directly to our account</div>
                </div>
              </label>
              <label className={`mk-payment-option${method === 'pod' ? ' mk-payment-option--active' : ''}`}>
                <input
                  type="radio"
                  name="method"
                  value="pod"
                  checked={method === 'pod'}
                  onChange={() => setMethod('pod')}
                />
                <div className="mk-payment-icon">💵</div>
                <div>
                  <div className="mk-payment-title">Pay on Delivery</div>
                  <div className="mk-payment-sub">Pay cash when your order arrives</div>
                </div>
              </label>
            </div>

            {method === 'transfer' && (
              <div className="mk-bank-details">
                <div className="mk-bank-details-title">Bank Details</div>
                <div className="mk-bank-row"><span>Bank</span><strong>First Bank Nigeria</strong></div>
                <div className="mk-bank-row"><span>Account Name</span><strong>Minnie Kiddies Ltd</strong></div>
                <div className="mk-bank-row">
                  <span>Account No</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <strong>1234567890</strong>
                    <button type="button" onClick={copyAccount} className="mk-copy-btn">
                      {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
                    </button>
                  </div>
                </div>
                <div className="mk-bank-row mk-bank-amount">
                  <span>Amount to Pay</span>
                  <strong>₦{grandTotal.toLocaleString()}</strong>
                </div>
                <div className="mk-accepted-cards">
                  <SiVisa size={28} style={{ color: '#1a1f71' }} />
                  <SiMastercard size={28} style={{ color: '#eb001b' }} />
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="mk-btn-primary mk-submit-btn">
            <FiCheck size={18} /> Confirm Order — ₦{grandTotal.toLocaleString()}
          </button>
        </form>
      </div>

      <style>{`
        .mk-empty-cart-wrap {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }
        .mk-empty-cart {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          max-width: 520px;
          padding: 48px 26px;
          border: 1px solid var(--mk-border);
          border-radius: 18px;
          background: #fff;
          box-shadow: 0 10px 30px rgba(91, 44, 143, 0.06);
        }
        .mk-empty-cart h2 {
          margin: 12px 0 8px;
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 800;
          color: var(--mk-ink);
        }
        .mk-empty-cart p {
          margin: 0 0 20px;
          color: var(--mk-grey);
          font-size: 15px;
          line-height: 1.6;
        }
        .mk-checkout-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 40px;
          border-bottom: 1px solid var(--mk-border);
        }
        .mk-checkout-header h1 {
          font-size: 22px;
          font-weight: 800;
          margin: 0;
        }
        .mk-back-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: 1px solid var(--mk-border);
          border-radius: 6px;
          padding: 6px 14px;
          font-size: 13px;
          font-family: inherit;
          cursor: pointer;
          color: var(--mk-grey);
          transition: all 0.15s;
        }
        .mk-back-btn:hover { border-color: var(--mk-purple); color: var(--mk-purple); }

        .mk-checkout-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 36px 40px 60px;
          align-items: start;
        }

        /* Order summary */
        .mk-order-summary h2,
        .mk-checkout-form h2 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 20px;
        }
        .mk-cart-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }
        .mk-cart-item {
          display: flex;
          gap: 14px;
          padding: 14px;
          border: 1px solid var(--mk-border);
          border-radius: 10px;
          background: #fff;
        }
        .mk-cart-item-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          flex-shrink: 0;
        }
        .mk-cart-item-info {
          flex: 1;
          min-width: 0;
        }
        .mk-cart-item-name {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
          line-height: 1.3;
        }
        .mk-cart-item-price {
          font-size: 12px;
          color: var(--mk-grey);
          margin-bottom: 4px;
        }
        .mk-cart-item-total {
          font-size: 14px;
          font-weight: 700;
          color: var(--mk-purple);
          margin-bottom: 8px;
        }
        .mk-cart-item-qty {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mk-qty-btn-sm {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          border: 1px solid var(--mk-border);
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--mk-ink);
          transition: background 0.15s;
        }
        .mk-qty-btn-sm:hover { background: var(--mk-purple-light); }
        .mk-cart-item-qty span {
          font-size: 14px;
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }
        .mk-remove-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #e53e3e;
          margin-left: 4px;
          padding: 4px;
          display: flex;
          align-items: center;
          border-radius: 4px;
          transition: background 0.15s;
        }
        .mk-remove-btn:hover { background: #fff1f1; }

        /* Totals */
        .mk-order-totals {
          border-top: 1px solid var(--mk-border);
          padding-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mk-total-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--mk-grey);
        }
        .mk-grand-total {
          font-size: 17px;
          font-weight: 700;
          color: var(--mk-ink);
          padding-top: 10px;
          border-top: 2px solid var(--mk-ink);
          margin-top: 4px;
        }

        /* Form */
        .mk-checkout-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .mk-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .mk-form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--mk-ink);
        }
        .mk-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 0;
        }
        .mk-input {
          border: 1.5px solid var(--mk-border);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          font-family: inherit;
          color: var(--mk-ink);
          background: #fff;
          transition: border-color 0.15s;
          width: 100%;
          box-sizing: border-box;
        }
        .mk-input:focus {
          outline: none;
          border-color: var(--mk-purple);
          box-shadow: 0 0 0 3px rgba(91,44,143,0.1);
        }
        .mk-input--error { border-color: #e53e3e; }
        .mk-error {
          font-size: 12px;
          color: #e53e3e;
          margin-top: -2px;
        }

        /* Payment */
        .mk-payment-section { margin-top: 8px; }
        .mk-payment-section h2 { margin-bottom: 14px; }
        .mk-payment-methods {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 16px;
        }
        .mk-payment-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border: 2px solid var(--mk-border);
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s;
        }
        .mk-payment-option input { display: none; }
        .mk-payment-option--active {
          border-color: var(--mk-purple);
          background: var(--mk-purple-light);
        }
        .mk-payment-icon { font-size: 22px; }
        .mk-payment-title { font-size: 14px; font-weight: 600; }
        .mk-payment-sub { font-size: 12px; color: var(--mk-grey); }

        .mk-bank-details {
          background: #f9f8ff;
          border: 1px solid var(--mk-lavender-bar);
          border-radius: 10px;
          padding: 16px 18px;
          margin-bottom: 16px;
        }
        .mk-bank-details-title {
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 12px;
          color: var(--mk-purple);
        }
        .mk-bank-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          padding: 6px 0;
          border-bottom: 1px solid var(--mk-border);
        }
        .mk-bank-row:last-child { border-bottom: none; }
        .mk-bank-row span { color: var(--mk-grey); }
        .mk-bank-amount { font-size: 15px; padding-top: 10px; margin-top: 2px; }
        .mk-bank-amount strong { color: var(--mk-purple); }
        .mk-copy-btn {
          background: var(--mk-purple-light);
          border: none;
          border-radius: 4px;
          padding: 4px 8px;
          cursor: pointer;
          color: var(--mk-purple);
          display: flex;
          align-items: center;
        }
        .mk-accepted-cards {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid var(--mk-border);
        }

        .mk-submit-btn {
          width: 100%;
          justify-content: center;
          padding: 16px;
          font-size: 16px;
          border-radius: 10px;
          margin-top: 8px;
          border: none;
        }

        /* Empty / Success */
        .mk-empty-cart, .mk-order-success {
          text-align: center;
          padding: 80px 24px;
          max-width: 500px;
          margin: 0 auto;
        }
        .mk-empty-cart h2, .mk-order-success h1 {
          font-size: 26px;
          margin: 16px 0 10px;
        }
        .mk-empty-cart p, .mk-order-success p {
          color: var(--mk-grey);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .mk-success-icon { font-size: 64px; }
        .mk-success-bank { margin-bottom: 24px; text-align: left; }
        .mk-bank-box {
          background: var(--mk-purple-light);
          border-radius: 10px;
          padding: 16px;
          margin-top: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
        }
        .mk-bank-box span { color: var(--mk-grey); margin-right: 8px; }

        @media (max-width: 860px) {
          .mk-checkout-grid {
            grid-template-columns: 1fr;
            padding: 24px 20px 48px;
            gap: 32px;
          }
          .mk-checkout-header { padding: 16px 20px; }
          .mk-form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
