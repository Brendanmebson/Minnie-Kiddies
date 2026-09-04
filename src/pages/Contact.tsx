import { useState, type FormEvent } from 'react'
import { FiPhone, FiMessageCircle, FiMapPin, FiInstagram, FiFacebook, FiSend, FiCheck } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((err) => { const n = { ...err }; delete n[name]; return n })
  }

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Please enter your name'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Please enter a valid email'
    if (!form.message.trim()) errs.message = 'Please enter a message'
    return errs
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
  }

  return (
    <div>
      {/* Hero */}
      <section className="mk-contact-hero">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </section>

      <div className="mk-contact-grid">
        {/* Left — contact info */}
        <div className="mk-contact-info">
          <h2>Contact Details</h2>

          <div className="mk-contact-cards">
            <a href="tel:+2348023247757" className="mk-info-card">
              <div className="mk-info-icon" style={{ background: '#EFF6FF' }}>
                <FiPhone size={20} style={{ color: '#2563eb' }} />
              </div>
              <div>
                <div className="mk-info-title">Phone</div>
                <div className="mk-info-value">+234 802 324 7757</div>
              </div>
            </a>

            <a href="https://wa.me/2348023247757" target="_blank" rel="noreferrer" className="mk-info-card">
              <div className="mk-info-icon" style={{ background: '#F0FFF4' }}>
                <FiMessageCircle size={20} style={{ color: '#16a34a' }} />
              </div>
              <div>
                <div className="mk-info-title">WhatsApp</div>
                <div className="mk-info-value">wa.me/2348023247757</div>
              </div>
            </a>

            <div className="mk-info-card">
              <div className="mk-info-icon" style={{ background: '#FFF7ED' }}>
                <FiMapPin size={20} style={{ color: '#ea580c' }} />
              </div>
              <div>
                <div className="mk-info-title">Location</div>
                <div className="mk-info-value">Lagos Island, Lagos, Nigeria</div>
              </div>
            </div>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mk-info-card">
              <div className="mk-info-icon" style={{ background: '#FDF2F8' }}>
                <FiInstagram size={20} style={{ color: '#9333ea' }} />
              </div>
              <div>
                <div className="mk-info-title">Instagram</div>
                <div className="mk-info-value">@minniekiddies</div>
              </div>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mk-info-card">
              <div className="mk-info-icon" style={{ background: '#EFF6FF' }}>
                <FiFacebook size={20} style={{ color: '#1d4ed8' }} />
              </div>
              <div>
                <div className="mk-info-title">Facebook</div>
                <div className="mk-info-value">Minnie Kiddies</div>
              </div>
            </a>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2348023247757?text=Hello%20Minnie%20Kiddies!%20I'd%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noreferrer"
            className="mk-whatsapp-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.559 4.13 1.535 5.864L.057 23.428a.75.75 0 00.917.918l5.656-1.485A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.748 9.748 0 01-4.95-1.348l-.355-.212-3.68.965.982-3.59-.232-.369A9.748 9.748 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Right — contact form */}
        <div className="mk-contact-form-wrap">
          {sent ? (
            <div className="mk-form-success">
              <div className="mk-form-success-icon"><FiCheck size={32} /></div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              <button className="mk-btn-primary" onClick={() => setSent(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mk-contact-form">
              <h2>Send us a Message</h2>

              <div className="mk-form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="e.g. Amaka Johnson"
                  value={form.name}
                  onChange={handleField}
                  className={errors.name ? 'mk-input mk-input--error' : 'mk-input'}
                />
                {errors.name && <span className="mk-error">{errors.name}</span>}
              </div>

              <div className="mk-form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleField}
                  className={errors.email ? 'mk-input mk-input--error' : 'mk-input'}
                />
                {errors.email && <span className="mk-error">{errors.email}</span>}
              </div>

              <div className="mk-form-group">
                <label htmlFor="contact-subject">Subject</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleField}
                  className="mk-input"
                >
                  <option value="">Select a subject</option>
                  <option>Product Enquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Exchanges</option>
                  <option>Wholesale / Bulk Order</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="mk-form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  value={form.message}
                  onChange={handleField}
                  className={errors.message ? 'mk-input mk-input--error' : 'mk-input'}
                  style={{ resize: 'vertical' }}
                />
                {errors.message && <span className="mk-error">{errors.message}</span>}
              </div>

              <button type="submit" className="mk-btn-primary mk-send-btn">
                <FiSend size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .mk-contact-hero {
          background: var(--mk-purple-light);
          text-align: center;
          padding: 56px 24px 48px;
        }
        .mk-contact-hero h1 {
          font-size: 36px;
          font-weight: 800;
          margin: 0 0 12px;
        }
        .mk-contact-hero p {
          font-size: 16px;
          color: var(--mk-grey);
          margin: 0;
          max-width: 480px;
          margin: 0 auto;
        }

        .mk-contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 48px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 40px 60px;
          align-items: start;
        }

        .mk-contact-info h2,
        .mk-contact-form h2 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 22px;
        }

        .mk-contact-cards {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        .mk-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border: 1px solid var(--mk-border);
          border-radius: 10px;
          text-decoration: none;
          color: var(--mk-ink);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .mk-info-card:hover {
          border-color: var(--mk-purple);
          box-shadow: 0 2px 12px rgba(91,44,143,0.1);
        }
        .mk-info-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mk-info-title {
          font-size: 11px;
          font-weight: 600;
          color: var(--mk-grey);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .mk-info-value {
          font-size: 14px;
          font-weight: 500;
        }

        .mk-whatsapp-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .mk-whatsapp-btn:hover { background: #1ebe5c; }

        /* Form */
        .mk-contact-form-wrap {
          background: #fff;
          border: 1px solid var(--mk-border);
          border-radius: 14px;
          padding: 32px;
        }
        .mk-contact-form { display: flex; flex-direction: column; }
        .mk-contact-form h2 { margin-top: 0; }
        .mk-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 18px;
        }
        .mk-form-group label {
          font-size: 13px;
          font-weight: 600;
        }
        .mk-input {
          border: 1.5px solid var(--mk-border);
          border-radius: 8px;
          padding: 11px 14px;
          font-size: 14px;
          font-family: inherit;
          color: var(--mk-ink);
          background: #fff;
          transition: border-color 0.15s, box-shadow 0.15s;
          width: 100%;
          box-sizing: border-box;
        }
        .mk-input:focus {
          outline: none;
          border-color: var(--mk-purple);
          box-shadow: 0 0 0 3px rgba(91,44,143,0.1);
        }
        .mk-input--error { border-color: #e53e3e; }
        .mk-error { font-size: 12px; color: #e53e3e; }
        .mk-send-btn {
          border: none;
          width: 100%;
          justify-content: center;
          padding: 14px;
          font-size: 15px;
          border-radius: 8px;
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
          transition: background 0.2s;
        }
        .mk-btn-primary:hover { background: var(--mk-purple-dark); }

        /* Form success state */
        .mk-form-success {
          text-align: center;
          padding: 40px 20px;
        }
        .mk-form-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #F0FFF4;
          color: #16a34a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
        }
        .mk-form-success h3 { font-size: 22px; margin: 0 0 8px; }
        .mk-form-success p { color: var(--mk-grey); margin: 0 0 24px; }

        @media (max-width: 860px) {
          .mk-contact-grid {
            grid-template-columns: 1fr;
            padding: 32px 20px 48px;
            gap: 32px;
          }
          .mk-contact-hero h1 { font-size: 28px; }
          .mk-contact-form-wrap { padding: 24px 20px; }
        }
      `}</style>
    </div>
  )
}
