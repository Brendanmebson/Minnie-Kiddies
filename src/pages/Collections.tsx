import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHead from '../components/PageHead'
import ProductArt from '../components/ProductArt'
import Reveal from '../components/Reveal'
import { collections, getProductById, inCollection, shopAllProducts } from '../data/products'
import { usePageTitle } from '../hooks/usePageTitle'
import pencils from '../assets/photos/colouring-pencils.jpg'

export default function Collections() {
  usePageTitle('Collections')

  return (
    <>
      <PageHead title="Shop by shelf">
        <p>Six school collections with everything your child needs, from Lagos Island.</p>
      </PageHead>

      <section className="collection-mosaic" aria-label="Collections">
        {collections.map((collection, i) => {
          const sample = getProductById(collection.sample)!
          const count = shopAllProducts.filter((p) => inCollection(p, collection.filter)).length
          return (
            <Reveal key={collection.id} delay={(i % 2) * 80}>
              <Link to={`/shop?category=${encodeURIComponent(collection.filter)}`} className={`collection tone-${collection.tone}`}>
                <div className="collection-copy">
                  <h2>{collection.label}</h2>
                  <p>{collection.description}</p>
                  <span className="text-link">See all {count} <FiArrowRight aria-hidden="true" /></span>
                </div>
                <ProductArt product={sample} decorative className="collection-art" />
              </Link>
            </Reveal>
          )
        })}
      </section>

      <section className="closing-cta">
        <div className="closing-copy">
          <h2>Still deciding?</h2>
          <Link to="/shop" className="btn btn-yellow">View all {shopAllProducts.length} products</Link>
        </div>
        <img src={pencils} width={1600} height={1066} alt="Colouring pencils arranged in a wheel of colour" loading="lazy" />
      </section>
    </>
  )
}
