import type { Product } from '../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <div
        style={{
          background: product.gradient,
          aspectRatio: '1 / 1',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          marginBottom: 10,
        }}
      >
        <span role="img" aria-label={product.name}>{product.emoji}</span>
      </div>
      <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{product.name}</div>
      <div style={{ fontSize: 14, fontWeight: 700 }}>{product.price}</div>
    </div>
  )
}
