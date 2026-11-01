import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import PageHead from '../components/PageHead'
import ProductArt from '../components/ProductArt'
import { collections, getProductById, inCollection, shopAllProducts } from '../data/products'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Collections() {
  usePageTitle('Collections')

  return (
    <>
      <PageHead title="Collections">
        <p>Six school collections with everything your child needs.</p>
      </PageHead>

      <section className="wrap collection-grid" aria-label="Collections">
        {collections.map((collection) => {
          const count = shopAllProducts.filter((p) => inCollection(p, collection.filter)).length
          return (
            <Link key={collection.id} to={`/shop?category=${encodeURIComponent(collection.filter)}`} className="collection">
              <ProductArt product={getProductById(collection.sample)!} decorative />
              <div>
                <h2>{collection.label}</h2>
                <p>{collection.description}</p>
                <span className="text-link">View {count} items <FiArrowRight size={16} aria-hidden="true" /></span>
              </div>
            </Link>
          )
        })}
      </section>
    </>
  )
}
