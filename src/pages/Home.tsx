import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'
import ProductArt from '../components/ProductArt'
import ProductCard from '../components/ProductCard'
import SchoolList from '../components/SchoolList'
import { collections, getProductById, inCollection, shopAllProducts } from '../data/products'
import { formatNaira, site } from '../data/site'
import { usePageTitle } from '../hooks/usePageTitle'
import pencils from '../assets/photos/colouring-pencils.jpg'
import toysOnFloor from '../assets/photos/toys-on-floor.jpg'

const FAVOURITES = ['rocket-set-1', 'mermaid-set-4', 'sneaker-girl-7', 'sunny-set-14', 'drink-01-10', 'princess-set-3', 'art-01-11', 'shoe-boy-8']

const howItWorks = [
  { title: 'Order your way', body: 'Fill your bag here and your order arrives in our WhatsApp chat, ready to confirm. Class or school orders are welcome.' },
  { title: 'Pay how you like', body: 'Choose bank transfer, with details sent in the chat, or pay cash on delivery.' },
  { title: `Delivery for ${formatNaira(site.deliveryFee)}`, body: `One flat fee to ${site.deliveryStates.length} states, including ${site.deliveryStates.slice(0, 3).join(', ')}.` },
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
      <section className="wrap hero">
        <div className="hero-panel">
          <div className="hero-copy">
            <h1>Everything on the school list</h1>
            <p>Bags, shoes, lunch kits and stationery for Nursery to Secondary, from our shop on Lagos Island.</p>
            <div className="hero-actions">
              <Link to="/shop" className="btn btn-solid">Shop all</Link>
              <a href="#school-list" className="btn btn-quiet">Tick off your list</a>
            </div>
          </div>
          <img src={toysOnFloor} width={1500} height={1001} alt="A child sitting on a carpet among colourful building blocks and toys" />
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section-title">Shop by category</h2>
        <div className="category-grid">
          {collections.map((category) => {
            const count = shopAllProducts.filter((p) => inCollection(p, category.filter)).length
            return (
              <Link key={category.id} to={`/shop?category=${encodeURIComponent(category.filter)}`} className="category">
                <span className="category-plate">
                  <ProductArt product={getProductById(category.sample)!} decorative />
                </span>
                <span className="category-name">{category.label}</span>
                <span className="category-count">{count} items</span>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="section-title">This term's favourites</h2>
          <Link to="/shop" className="text-link">View all <FiArrowRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="product-grid">
          {favourites.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>

      <SchoolList />

      <section className="wrap section" aria-labelledby="how-title">
        <h2 className="section-title" id="how-title">How ordering works</h2>
        <div className="how-grid">
          {howItWorks.map(({ title, body }) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section story">
        <img src={pencils} width={1600} height={1066} alt="Colouring pencils arranged in a wheel of colour" loading="lazy" />
        <div>
          <h2 className="section-title">Dear parent,</h2>
          <p>
            Minnie Kiddies started with one goal: make school prep exciting instead of stressful.
            Every backpack, lunch box and pair of shoes is chosen for durability and safety first,
            then for the fun designs kids pick out themselves.
          </p>
          <p>So bring the list. We will take it from there.</p>
          <Link to="/about" className="text-link">Read our story <FiArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="wrap section faq">
        <h2 className="section-title">Questions parents ask</h2>
        <div>
          {questions.map(({ q, a }) => (
            <details key={q}>
              <summary>{q}<FiChevronDown size={18} aria-hidden="true" /></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}
