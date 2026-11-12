import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import HeroSlider from '../components/HeroSlider'
import Marquee from '../components/Marquee'
import ProductArt from '../components/ProductArt'
import ProductCard from '../components/ProductCard'
import SchoolList from '../components/SchoolList'
import SectionHeading from '../components/SectionHeading'
import { Rainbow } from '../components/Decor'
import { collections, getProductById, inCollection, shopAllProducts } from '../data/products'
import { photos } from '../data/photos'
import { formatNaira, site, whatsappLink } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'

const FAVOURITES = ['rocket-set-1', 'mermaid-set-4', 'sneaker-girl-7', 'sunny-set-14', 'drink-01-10', 'princess-set-3', 'art-01-11', 'shoe-boy-8']

const howItWorks = [
  { title: 'Fill your bag', body: 'Pick from the shelves or tick off the school list. Class orders are welcome too.' },
  { title: 'Send it on WhatsApp', body: 'Your order lands in our chat, ready to confirm. Pay by transfer or on delivery.' },
  { title: `Delivered for ${formatNaira(site.deliveryFee)}`, body: `One flat fee to ${site.deliveryStates.length} states, including ${site.deliveryStates.slice(0, 3).join(', ')}.` },
]

const questions = [
  { q: 'How much is delivery?', a: `A flat ${formatNaira(site.deliveryFee)}, added to your order at checkout.` },
  { q: 'Which states do you deliver to?', a: `${site.deliveryStates.slice(0, -1).join(', ')} and ${site.deliveryStates.at(-1)}.` },
  { q: 'How do I pay?', a: 'By bank transfer or cash on delivery. If you choose transfer, we send the account details on WhatsApp once we confirm your order.' },
  { q: 'Can I order for a whole class?', a: 'Yes. Send us a message with what you need and how many, and we will work it out with you.' },
  { q: 'Can I change something after ordering?', a: 'Message us with your order and we will sort it out. Returns and exchanges are handled in the same chat.' },
  { q: 'Can I visit the shop?', a: 'We are on Lagos Island. Send us a message for directions before you set out.' },
]

export default function Home() {
  usePageTitle('Everything back to school in Lagos')
  const favourites = FAVOURITES.map((id) => getProductById(id)!)

  return (
    <>
      <HeroSlider />
      <Marquee />

      <section className="wrap section" aria-labelledby="category-title">
        <SectionHeading id="category-title" ornament eyebrow="Shop by shelf" title="Find it in a tap" />
        <div className="category-grid">
          {collections.map((category, i) => {
            const count = shopAllProducts.filter((p) => inCollection(p, category.filter)).length
            return (
              <Link key={category.id} to={`/shop?category=${encodeURIComponent(category.filter)}`} className="category">
                <span className={`category-plate tint-${i % 4}`}>
                  <ProductArt product={getProductById(category.sample)!} decorative />
                </span>
                <span className="category-name">{category.label}</span>
                <span className="category-count">{count} items</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="wrap section" aria-labelledby="favourites-title">
        <div className="section-head">
          <SectionHeading id="favourites-title" align="start" eyebrow="Loved this term" title="Class favourites" />
          <Link to="/shop" className="text-link">View all <FiArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="product-grid">
          {favourites.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <section className="wrap section welcome" aria-labelledby="welcome-title">
        <div className="welcome-copy">
          <p className="eyebrow">Welcome to Minnie Kiddies</p>
          <h2 id="welcome-title">Ready for a brand new term</h2>
          <div className="btn-row">
            <Link to="/shop" className="btn btn-clay">Shop now</Link>
            <a href="#school-list" className="btn btn-sage">Tick off your list</a>
          </div>
        </div>
        <img src={photos.readBlocks.src} width={photos.readBlocks.width} height={photos.readBlocks.height} alt={photos.readBlocks.alt} loading="lazy" />
      </section>

      <SchoolList />

      <section className="wrap section note-split" aria-labelledby="note-title">
        <img src={photos.colouringPencils.src} width={photos.colouringPencils.width} height={photos.colouringPencils.height} alt={photos.colouringPencils.alt} loading="lazy" />
        <div className="note-card">
          <Rainbow className="note-rainbow" />
          <h2 id="note-title" className="sr-only">A note from the shop</h2>
          <blockquote>
            <p>“So bring the school list. We'll take it from there.”</p>
          </blockquote>
          <p className="note-sign">Minnie Kiddies, Lagos Island</p>
          <p className="note-body">
            We started with one goal: make school prep exciting instead of stressful. Every bag, lunch box and pair
            of shoes is chosen for durability and safety first, then for the designs kids pick out themselves.
          </p>
          <Link to="/about" className="text-link">Read our story <FiArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="section how" aria-labelledby="how-title">
        <div className="wrap">
          <SectionHeading
            id="how-title"
            ornament
            eyebrow="Simple as one, two, three"
            title="How ordering works"
            lead="No accounts, no card details. Your order comes straight to us on WhatsApp."
          />
          <ol className="how-steps">
            {howItWorks.map(({ title, body }, i) => (
              <li key={title}>
                <span className="how-num">{i + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
          <div className="how-cta">
            <a className="btn btn-clay" href={whatsappLink("Hello Minnie Kiddies! I'd like to place an order.")} target="_blank" rel="noreferrer">
              <FaWhatsapp size={16} aria-hidden="true" /> Chat with us
            </a>
          </div>
        </div>
      </section>

      <section className="wrap section faq" id="faq" aria-labelledby="faq-title">
        <SectionHeading
          id="faq-title"
          align="start"
          eyebrow="Good to know"
          title="Questions parents ask"
          lead={<>Can't see yours? <Link to="/contact" className="inline-link">Send us a note</Link>.</>}
        />
        <div>
          {questions.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}<FiPlus size={18} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
