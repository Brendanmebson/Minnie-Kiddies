import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import Marquee from '../components/Marquee'
import PageHead from '../components/PageHead'
import ProductArt from '../components/ProductArt'
import { collections, getProductById, inCollection, shopAllProducts } from '../data/products'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Collections() {
  usePageTitle('Collections')

  return (
    <>
      <PageHead eyebrow="Shop by shelf" title="Collections">
        <p>Six school collections with everything your child needs, from the first bell to home time.</p>
      </PageHead>

      <section className="wrap collection-grid" aria-label="Collections">
        {collections.map((collection, i) => {
          const count = shopAllProducts.filter((p) => inCollection(p, collection.filter)).length
          return (
            <Link key={collection.id} to={`/shop?category=${encodeURIComponent(collection.filter)}`} className="collection">
              <span className={`collection-plate tint-${i % 4}`}>
                <ProductArt product={getProductById(collection.sample)!} decorative />
              </span>
              <span className="collection-count">{count} items</span>
              <h2>{collection.label}</h2>
              <p>{collection.description}</p>
              <span className="text-link">Browse <FiArrowRight size={16} aria-hidden="true" /></span>
            </Link>
          )
        })}
      </section>

      <div className="section-tail"><Marquee /></div>
    </>
  )
}
