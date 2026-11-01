import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import ProductArt from '../components/ProductArt'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import SchoolList from '../components/SchoolList'
import { collections, getProductById, inCollection, shopAllProducts } from '../data/products'
import { formatNaira, site, whatsappLink } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import pencils from '../assets/photos/colouring-pencils.jpg'
import playgroundSlide from '../assets/photos/playground-slide.jpg'
import readBlocks from '../assets/photos/read-blocks.jpg'
import toysOnFloor from '../assets/photos/toys-on-floor.jpg'

const FAVOURITES = ['rocket-set-1', 'mermaid-set-4', 'sneaker-girl-7', 'sunny-set-14', 'drink-01-10', 'princess-set-3', 'art-01-11', 'shoe-boy-8']

const orderingSheet = [
  {
    group: 'Ordering',
    rows: [
      { name: 'Tick your list', value: 'Here', note: 'Or browse every shelf and fill your bag.' },
      { name: 'Send it to us', value: 'WhatsApp', note: 'Your order lands in our chat, ready to confirm.' },
      { name: 'Class or school orders', value: 'Just ask', note: 'Tell us how many and what for.' },
    ],
  },
  {
    group: 'Paying',
    rows: [
      { name: 'Bank transfer', value: 'After we confirm', note: 'We send the account details in the chat.' },
      { name: 'Pay on delivery', value: 'Cash', note: 'Pay when your order arrives.' },
    ],
  },
  {
    group: 'Delivery',
    rows: [
      { name: 'Ten states, one price', value: formatNaira(site.deliveryFee), note: `${site.deliveryStates.slice(0, 3).join(', ')} and more.` },
    ],
  },
]

const questions = [
  { q: 'How much is delivery?', a: `A flat ${formatNaira(site.deliveryFee)}, added to your order at checkout.` },
  { q: 'Which states do you deliver to?', a: `${site.deliveryStates.slice(0, -1).join(', ')} and ${site.deliveryStates.at(-1)}.` },
  { q: 'How do I pay?', a: 'By bank transfer or cash on delivery. If you choose transfer, we send the account details on WhatsApp once we confirm your order.' },
  { q: 'Why WhatsApp?', a: 'Because it is quick. Your whole order arrives in one message, and you can ask about sizes or colours in the same chat.' },
  { q: 'Can I order for a whole class?', a: 'Yes. Send us a message with what you need and how many, and we will work it out with you.' },
  { q: 'Can I change something after ordering?', a: 'Message us with your order and we will sort it out. Returns and exchanges are handled in the same chat.' },
  { q: 'Can I visit the shop?', a: 'We are on Lagos Island. Send us a message for directions before you set out.' },
]

function Shelves() {
  const [active, setActive] = useState(0)

  return (
    <section className="shelves band">
      <Reveal>
        <h2 className="section-title">Six shelves, one shop.</h2>
      </Reveal>
      <div className="shelf-deck">
        {collections.map((shelf, i) => {
          const sample = getProductById(shelf.sample)!
          const count = shopAllProducts.filter((p) => inCollection(p, shelf.filter)).length
          const isOpen = i === active
          return (
            <article key={shelf.id} className={`shelf tone-${shelf.tone}${isOpen ? ' is-open' : ''}`}>
              <button type="button" className="shelf-spine" aria-expanded={isOpen} onClick={() => setActive(i)}>
                <span>{shelf.label}</span>
              </button>
              <div className="shelf-open" aria-hidden={!isOpen}>
                <ProductArt product={sample} decorative className="shelf-art" />
                <div className="shelf-copy">
                  <p className="shelf-name">{shelf.label}</p>
                  <p>{shelf.description}</p>
                  <Link
                    to={`/shop?category=${encodeURIComponent(shelf.filter)}`}
                    className="text-link"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    See all {count} <FiArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle('Everything back to school in Lagos')
  const favourites = FAVOURITES.map((id) => getProductById(id)!)

  return (
    <>
      <SchoolList />
      <Shelves />

      <section className="favourites band">
        <Reveal className="section-head">
          <h2 className="section-title">This term's favourites.</h2>
          <Link to="/shop" className="text-link">Shop all {shopAllProducts.length} <FiArrowRight aria-hidden="true" /></Link>
        </Reveal>
        <div className="product-grid">
          {favourites.map((product, i) => (
            <Reveal key={product.id} delay={(i % 4) * 70}><ProductCard product={product} /></Reveal>
          ))}
        </div>
      </section>

      <section className="ordering" aria-labelledby="ordering-title">
        <img className="ordering-ground" src={toysOnFloor} width={1500} height={1001} alt="A child sitting on a carpet among colourful building blocks and toys" loading="lazy" />
        <div className="ordering-layout">
          <Reveal className="sheet">
            <h2 id="ordering-title">How ordering works</h2>
            {orderingSheet.map(({ group, rows }) => (
              <div key={group} className="sheet-group">
                <h3>{group}</h3>
                {rows.map((row) => (
                  <div key={row.name} className="sheet-row">
                    <div className="sheet-line">
                      <span>{row.name}</span>
                      <i aria-hidden="true" />
                      <strong>{row.value}</strong>
                    </div>
                    <p>{row.note}</p>
                  </div>
                ))}
              </div>
            ))}
          </Reveal>
          <Reveal className="plate plate-feature" delay={120}>
            <img src={readBlocks} width={1500} height={1000} alt="Wooden alphabet blocks spelling the word read" loading="lazy" />
            <p>Ready for the first day of term.</p>
          </Reveal>
        </div>
      </section>

      <section className="letter-band" aria-labelledby="letter-title">
        <Reveal className="plate plate-left">
          <img src={pencils} width={1600} height={1066} alt="Colouring pencils arranged in a wheel of colour" loading="lazy" />
        </Reveal>
        <Reveal className="letter" delay={80}>
          <div className="letter-sheet">
            <svg className="letter-mark" viewBox="0 0 48 48" aria-hidden="true">
              <circle cx="13" cy="13" r="10" /><circle cx="35" cy="13" r="10" /><circle cx="24" cy="29" r="17" />
            </svg>
            <h2 id="letter-title">Dear parent,</h2>
            <p>Minnie Kiddies started with one goal: make school prep exciting instead of stressful.</p>
            <p>
              We wanted every child heading back to class to feel proud of their bag, their shoes and
              their first day of the term. That still decides what goes on our shelves.
            </p>
            <p>
              Every backpack, lunch box and pair of shoes is chosen for durability and safety first,
              then for the fun designs kids pick out themselves.
            </p>
            <p>So bring the list. We will take it from there.</p>
            <p className="letter-sign">The Minnie Kiddies team</p>
            <p className="letter-role">{site.location}</p>
          </div>
          <div className="letter-stub">
            <a href={site.phoneHref}>{site.phone}</a>
            <a className="btn btn-solid" href={whatsappLink("Hello Minnie Kiddies! I'd like to make an enquiry.")} target="_blank" rel="noreferrer">
              <FaWhatsapp size={18} aria-hidden="true" /> Chat with us
            </a>
          </div>
        </Reveal>
        <Reveal className="plate plate-right" delay={160}>
          <img src={playgroundSlide} width={1500} height={1000} alt="A child standing at the top of a yellow slide in an indoor playground" loading="lazy" />
        </Reveal>
      </section>

      <section className="faq band">
        <Reveal><h2 className="faq-title">Questions parents ask</h2></Reveal>
        <Reveal className="faq-text" delay={80}>
          {questions.map(({ q, a }) => (
            <p key={q}><strong>{q}</strong> {a}</p>
          ))}
        </Reveal>
      </section>
    </>
  )
}
