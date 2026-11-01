import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { getProductById, type Product } from '../data/products'

export type CartItem = {
  key: string
  product: Product
  color: string
  quantity: number
}

type SavedLine = { id: string; color: string; quantity: number }

type CartContextValue = {
  items: CartItem[]
  addToCart: (product: Product, qty?: number, color?: string) => void
  removeFromCart: (key: string) => void
  updateQty: (key: string, qty: number) => void
  clearCart: () => void
  total: number
  count: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'mk-cart-v2'

const lineKey = (id: string, color: string) => `${id}::${color}`

const readSavedCart = (): CartItem[] => {
  try {
    const saved: SavedLine[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return saved.flatMap(({ id, color, quantity }) => {
      const product = getProductById(id)
      return product ? [{ key: lineKey(id, color), product, color, quantity }] : []
    })
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readSavedCart)

  useEffect(() => {
    const lines: SavedLine[] = items.map(({ product, color, quantity }) => ({ id: product.id, color, quantity }))
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // Private browsing can block storage; the bag still works until the tab closes.
    }
  }, [items])

  const addToCart = (product: Product, qty = 1, color = product.colors[0]) => {
    const key = lineKey(product.id, color)
    setItems((prev) => {
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => (i.key === key ? { ...i, quantity: i.quantity + qty } : i))
      }
      return [...prev, { key, product, color, quantity: qty }]
    })
  }

  const removeFromCart = (key: string) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const updateQty = (key: string, qty: number) => {
    if (qty < 1) return removeFromCart(key)
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, quantity: qty } : i)))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.product.priceNum * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
