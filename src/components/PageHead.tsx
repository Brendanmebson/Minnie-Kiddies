import type { ReactNode } from 'react'
import ProductArt from './ProductArt'
import { getProductById } from '../data/products'

const ART_IDS = ['sunny-set-14', 'rocket-set-1', 'drink-01-10']

type PageHeadProps = {
  title: string
  children?: ReactNode
  size?: 'plain' | 'regular' | 'tall'
}

export default function PageHead({ title, children, size = 'regular' }: PageHeadProps) {
  return (
    <section className={`page-head page-head-${size}`}>
      <div className="page-head-copy">
        <h1>{title}</h1>
        {children}
      </div>
      {size !== 'plain' && (
        <div className="page-head-art" aria-hidden="true">
          {ART_IDS.map((id) => <ProductArt key={id} product={getProductById(id)!} decorative />)}
        </div>
      )}
    </section>
  )
}
