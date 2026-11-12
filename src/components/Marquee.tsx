import { FaHeart, FaStar } from 'react-icons/fa'
import { formatNaira, site } from '../data/site'

const DEFAULT_ITEMS = [
  `Delivery to ${site.deliveryStates.length} states`,
  'Order on WhatsApp',
  'Pay on delivery',
  'Nursery to Secondary',
  `Flat ${formatNaira(site.deliveryFee)} delivery`,
  'Class orders welcome',
]

export default function Marquee({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  return (
    <div className="marquee">
      <p className="sr-only">{items.join(' · ')}</p>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="marquee-group">
            {items.map((item, i) => (
              <li key={item}>
                <span>{item}</span>
                {i % 2 === 0 ? <FaHeart className="marquee-heart" /> : <FaStar className="marquee-star" />}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
