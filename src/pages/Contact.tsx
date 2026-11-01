import { useState, type ChangeEvent, type FormEvent } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import PageHead from '../components/PageHead'
import Reveal from '../components/Reveal'
import { site, whatsappLink } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import readBlocks from '../assets/photos/read-blocks.jpg'

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
      <PageHead title="Talk to Minnie Kiddies">
        <p>WhatsApp is the fastest way to reach the shop on Lagos Island.</p>
      </PageHead>

      <section className="contact-ways" aria-label="Ways to reach us">
        <a href={whatsappLink()} target="_blank" rel="noreferrer" className="way tone-green">
<strong>WhatsApp</strong><span>{site.phone}</span>
        </a>
        <a href={site.phoneHref} className="way tone-lilac">
<strong>Call</strong><span>{site.phone}</span>
        </a>
        <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="way tone-pink">
<strong>Instagram</strong><span>{site.instagramHandle}</span>
        </a>
        <div className="way tone-yellow">
<strong>Visit</strong><span>{site.location}</span>
        </div>
      </section>

      <section className="coupon-band">
        <Reveal className="coupon">
          <div className="coupon-stub">
            <h2>Send us a note</h2>
            <img src={readBlocks} width={1500} height={1000} alt="Wooden alphabet blocks spelling the word read" loading="lazy" />
            <p>Fill this in and it opens as a ready-made WhatsApp message to the shop.</p>
          </div>

          {draft ? (
            <div className="coupon-form coupon-done">
              <FiCheck size={36} aria-hidden="true" />
              <h3>Your message is ready.</h3>
              <p>Press send in WhatsApp to reach us.</p>
              <a className="btn btn-yellow" href={draft} target="_blank" rel="noreferrer">Open WhatsApp again</a>
              <button type="button" className="text-button" onClick={() => setDraft('')}>Write another</button>
            </div>
          ) : (
            <form className="coupon-form" onSubmit={handleSubmit} noValidate>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={handleField} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />
              {errors.name && <span className="field-error" id="contact-name-error">{errors.name}</span>}

              <label htmlFor="contact-subject">What is it about?</label>
              <select id="contact-subject" name="subject" value={form.subject} onChange={handleField}>
                {SUBJECTS.map((subject) => <option key={subject}>{subject}</option>)}
              </select>

              <label htmlFor="contact-message">Your message</label>
              <textarea id="contact-message" name="message" rows={4} value={form.message} onChange={handleField} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />
              {errors.message && <span className="field-error" id="contact-message-error">{errors.message}</span>}

              <button type="submit" className="btn btn-yellow btn-wide">
                <FaWhatsapp size={20} aria-hidden="true" /> Continue to WhatsApp
              </button>
            </form>
          )}
        </Reveal>
      </section>
    </>
  )
}
