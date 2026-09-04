export type Product = {
  id: string
  name: string
  price: string
  gradient: string
  emoji: string
}

// Placeholder art (gradient + emoji) stands in for real product photography.
// Swap `gradient`/`emoji` for real <img> sources when photos are available.
export const topProducts: Product[] = [
  { id: 'game-on', name: 'Game On! Set', price: '$15.00', gradient: 'linear-gradient(135deg,#F5A623,#E8590C)', emoji: '🎮' },
  { id: 'astronaut', name: 'Astronaut Adventure Set', price: '$25.00', gradient: 'linear-gradient(135deg,#232946,#4A4E7C)', emoji: '🚀' },
  { id: 'soccer', name: 'Super Soccer Set', price: '$20.00', gradient: 'linear-gradient(135deg,#1E88E5,#0D47A1)', emoji: '⚽' },
  { id: 'space-explorer', name: 'Outer Space Explorer Set', price: '$15.00', gradient: 'linear-gradient(135deg,#26547C,#1B3A5C)', emoji: '🪐' },
  { id: 'mermaid', name: 'Girl Power Mermaid Set', price: '$15.00', gradient: 'linear-gradient(135deg,#F7A6C1,#E787B0)', emoji: '🧜‍♀️' },
  { id: 'boys-shoes', name: "Boy's School Shoes", price: '$20.00', gradient: 'linear-gradient(135deg,#2B2B2B,#111111)', emoji: '👞' },
]

export const shopAllProducts: Product[] = [
  ...topProducts,
  { id: 'pink-princess', name: 'Pink Princess Backpack', price: '$15.00', gradient: 'linear-gradient(135deg,#F48FB1,#EC407A)', emoji: '👑' },
  { id: 'camo-lunchbox', name: 'Cool Camo Lunchbox', price: '$25.00', gradient: 'linear-gradient(135deg,#556B2F,#3B4C1E)', emoji: '🎒' },
  { id: 'dino-bottle', name: 'Dinosaur Water Bottle', price: '$3.00 USD', gradient: 'linear-gradient(135deg,#26A69A,#00695C)', emoji: '🦕' },
  { id: 'art-kit', name: 'Art Supplies Kit', price: '$15.00', gradient: 'linear-gradient(135deg,#EC407A,#F06292)', emoji: '🎨' },
  { id: 'math-set', name: 'Math Geometry Set', price: '$20 USD', gradient: 'linear-gradient(135deg,#37474F,#263238)', emoji: '📐' },
  { id: 'sneakers', name: 'Sneakers', price: '$7.00 USD', gradient: 'linear-gradient(135deg,#1A237E,#0D1350)', emoji: '👟' },
]
