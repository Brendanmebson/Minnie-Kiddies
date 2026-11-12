import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCheck, FiInstagram, FiMapPin, FiPhone } from 'react-icons/fi'
import PageHead from '../components/PageHead'
import { site, whatsappLink } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

const SUBJECTS = ['Product enquiry', 'Order status', 'Returns & exchanges', 'Wholesale / bulk order', 'Other']

export default function Contact() {
  usePageTitle('Contact')

  const [form, setForm] = useState({ name: '', subject: SUBJECTS[0], message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [draft, setDraft] = useState('')

  const handleField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Please enter your name'
    if (!form.message.trim()) errs.message = 'Please enter a message'
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    const link = whatsappLink(`Hello Minnie Kiddies, this is ${form.name.trim()}.\nSubject: ${form.subject}\n\n${form.message.trim()}`)
    setDraft(link)
    window.open(link, '_blank', 'noopener')
  }

  return (
    <>
      <PageHead eyebrow="Contact" title="Say hello">
        <p>WhatsApp is the fastest way to reach the shop. We're happy to help with sizes, school lists and class orders.</p>
      </PageHead>

      <section className="wrap contact-grid">
        <dl className="contact-ways">
          <div><span className="contact-icon"><FaWhatsapp aria-hidden="true" /></span><dt>WhatsApp</dt><dd><a href={whatsappLink()} target="_blank" rel="noreferrer">{site.phone}</a></dd></div>
          <div><span className="contact-icon"><FiPhone aria-hidden="true" /></span><dt>Call</dt><dd><a href={site.phoneHref}>{site.phone}</a></dd></div>
          <div><span className="contact-icon"><FiInstagram aria-hidden="true" /></span><dt>Instagram</dt><dd><a href={site.instagramUrl} target="_blank" rel="noreferrer">{site.instagramHandle}</a></dd></div>
          <div><span className="contact-icon"><FiMapPin aria-hidden="true" /></span><dt>Visit</dt><dd>{site.location}</dd></div>
        </dl>

        {draft ? (
          <div className="form-panel form-done">
            <span className="tick-box is-on" aria-hidden="true"><FiCheck size={14} strokeWidth={3.5} /></span>
            <h2>Your message is ready</h2>
            <p>Press send in WhatsApp to reach us.</p>
            <a className="btn btn-clay" href={draft} target="_blank" rel="noreferrer">Open WhatsApp again</a>
            <button type="button" className="text-button" onClick={() => setDraft('')}>Write another</button>
          </div>
        ) : (
          <form className="form-panel contact-form" onSubmit={handleSubmit} noValidate>
            <h2>Send us a note</h2>
            <div className="field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={handleField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
              {errors.name && <span className="field-error" id="contact-name-error">{errors.name}</span>}
            </div>
            <div className="field">
              <label htmlFor="contact-subject">Subject</label>
              <select id="contact-subject" name="subject" value={form.subject} onChange={handleField}>
                {SUBJECTS.map((subject) => <option key={subject}>{subject}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={4} value={form.message} onChange={handleField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
              {errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-clay btn-wide">
              <FaWhatsapp size={16} aria-hidden="true" /> Continue to WhatsApp
            </button>
          </form>
        )}
      </section>
    </>
  )
}
