export type Product = {
  id: string
  name: string
  price: string
  priceNum: number
  image: string
  images?: string[]
  category: string
  description: string
  features: string[]
  colors?: string[]
  gradient?: string
  emoji?: string
}

const imagePool = [
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1600359756070-f9e7a3ed9aa9?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900&h=900&fit=crop&q=80',
  'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=900&h=900&fit=crop&q=80',
]

const productSeeds = [
  { id: 'rocket-set', name: 'Rocket Backpack', category: 'Back 2 School', priceNum: 15000, colors: ['Navy', 'Sky Blue'], features: ['Padded straps', 'Waterproof base', 'Large front pocket', 'Lunch sleeve', 'Reflective trim'], gradient: 'linear-gradient(135deg,#1E3A8A,#60A5FA)', emoji: '🚀' },
  { id: 'mario-set', name: 'Game On Pack', category: 'Back 2 School', priceNum: 17000, colors: ['Black', 'Orange'], features: ['Gaming print', 'Heavy-duty zip', 'Main compartment', 'Built-in pouch', 'Easy-clean finish'], gradient: 'linear-gradient(135deg,#F97316,#FB7185)', emoji: '🎮' },
  { id: 'princess-set', name: 'Princess Tote', category: 'Girls', priceNum: 14000, colors: ['Pink', 'Rose Gold'], features: ['Protective corners', 'Mesh bottle pocket', 'Soft lining', 'Charm detail', 'Matching pouch'], gradient: 'linear-gradient(135deg,#F9A8D4,#F472B6)', emoji: '👑' },
  { id: 'mermaid-set', name: 'Mermaid Spark Pack', category: 'Girls', priceNum: 15500, colors: ['Teal', 'Lilac'], features: ['Glitter trim', 'Quick zip access', 'Double handle', 'Side pockets', 'Safety clasp'], gradient: 'linear-gradient(135deg,#67E8F9,#C084FC)', emoji: '🧜‍♀️' },
  { id: 'soccer-set', name: 'Soccer Star Kit', category: 'Back 2 School', priceNum: 18000, colors: ['Blue', 'White'], features: ['Club print', 'Bottle holder', 'Front organiser', 'Durable canvas', 'Shock-absorbing straps'], gradient: 'linear-gradient(135deg,#2563EB,#38BDF8)', emoji: '⚽' },
  { id: 'space-set', name: 'Explorer Bundle', category: 'Back 2 School', priceNum: 16500, colors: ['Midnight Blue', 'Silver'], features: ['Constellation print', 'Laptop sleeve', 'Mesh venting', 'Padded back', 'Double zipper'], gradient: 'linear-gradient(135deg,#0F172A,#64748B)', emoji: '🪐' },
  { id: 'sneaker-girl', name: 'Spark Sneaker', category: 'Shoes', priceNum: 19500, colors: ['Pink', 'White'], features: ['Foam sole', 'Ventilated upper', 'Easy slip-on', 'Flex comfort', 'Bright accents'], gradient: 'linear-gradient(135deg,#F9A8D4,#E9D5FF)', emoji: '👟' },
  { id: 'shoe-boy', name: 'Daily Runner', category: 'Shoes', priceNum: 20500, colors: ['Black', 'Charcoal'], features: ['Non-slip sole', 'Velcro strap', 'Shock-absorbing heel', 'Breatheable lining', 'Toe guard'], gradient: 'linear-gradient(135deg,#0F172A,#475569)', emoji: '👞' },
  { id: 'lunch-01', name: 'Cool Lunch Kit', category: 'Lunch & Drinks', priceNum: 8500, colors: ['Green', 'Stone'], features: ['Insulated lining', 'Cooling pocket', 'Leak free', 'Easy carry handle', 'Durable shell'], gradient: 'linear-gradient(135deg,#22C55E,#A3E635)', emoji: '🎒' },
  { id: 'drink-01', name: 'Dino Bottle', category: 'Lunch & Drinks', priceNum: 3500, colors: ['Green', 'Teal'], features: ['Leak-proof lid', 'Vacuum insulated', 'BPA-free', '12h cold', 'Easy-grip body'], gradient: 'linear-gradient(135deg,#34D399,#14B8A6)', emoji: '🦕' },
  { id: 'art-01', name: 'Creative Case', category: 'Art & Stationery', priceNum: 12000, colors: ['Multicolor'], features: ['48-piece set', 'Carry case', 'Brush set', 'Watercolour tray', 'Age 4+'], gradient: 'linear-gradient(135deg,#F472B6,#FB7185)', emoji: '🎨' },
  { id: 'stationery-01', name: 'Math Master Kit', category: 'Art & Stationery', priceNum: 5000, colors: ['Silver', 'Gold'], features: ['Compass', 'Protractor', 'Ruler', 'Metal tin', 'Precision tools'], gradient: 'linear-gradient(135deg,#475569,#94A3B8)', emoji: '📐' },
  { id: 'mini-unicorn', name: 'Unicorn Mini Pack', category: 'Girls', priceNum: 11500, colors: ['Purple', 'Pink'], features: ['Mini size', 'Front zip pocket', 'Soft handles', 'Star charm', 'Lightweight feel'], gradient: 'linear-gradient(135deg,#8B5CF6,#F9A8D4)', emoji: '🦄' },
  { id: 'sunny-set', name: 'Sunny Lunch Duo', category: 'Lunch & Drinks', priceNum: 9500, colors: ['Yellow', 'Orange'], features: ['Lunch bag', 'Bottle set', 'Easy clean', 'Insulated', 'Carry handle'], gradient: 'linear-gradient(135deg,#FACC15,#FB923C)', emoji: '🌞' },
  { id: 'rainbow-pouch', name: 'Rainbow Pencil Pouch', category: 'Art & Stationery', priceNum: 4500, colors: ['Rainbow', 'Pastel'], features: ['Organiser slots', 'Stand-up base', 'Soft fabric', 'Double zips', 'Ages 5+'], gradient: 'linear-gradient(135deg,#FB7185,#FCD34D)', emoji: '✏️' },
  { id: 'camp-pack', name: 'Camp Outdoor Bag', category: 'Back 2 School', priceNum: 17500, colors: ['Olive', 'Khaki'], features: ['Water resistant', 'Bottle pocket', 'Wide straps', 'Adventure print', 'Organiser panels'], gradient: 'linear-gradient(135deg,#4D7C0F,#84CC16)', emoji: '🎒' },
]

const variantNames = ['Classic', 'Plus', 'Max', 'Glow', 'Mini', 'Hero', 'Dream', 'Sport', 'Fresh', 'Deluxe']

const formatPrice = (value: number) => `₦${value.toLocaleString('en-NG')}`

const buildCatalog = (): Product[] => {
  const total = 100
  const items: Product[] = []

  for (let i = 0; i < total; i += 1) {
    const seed = productSeeds[i % productSeeds.length]
    const variant = variantNames[i % variantNames.length]
    const idx = i + 1
    const basePrice = seed.priceNum + (i % 7) * 1500

    const images = Array.from({ length: 5 }, (_, imageIndex) =>
      imagePool[(i * 3 + imageIndex + seed.id.length) % imagePool.length]
    )

    items.push({
      id: `${seed.id}-${idx}`,
      name: `${seed.name} ${variant}`,
      price: formatPrice(basePrice),
      priceNum: basePrice,
      category: seed.category,
      image: images[0],
      images,
      description: `${seed.name} brings style, organisation and everyday comfort to your child’s school routine with durable materials, playful design details and a practical layout for learning and play.`,
      features: [...seed.features, `Edition ${variant}`, 'Kid approved', 'School-ready comfort'],
      colors: seed.colors,
      gradient: seed.gradient,
      emoji: seed.emoji,
    })
  }

  return items
}

export const shopAllProducts: Product[] = buildCatalog()
export const topProducts: Product[] = shopAllProducts.slice(0, 8)
export const allProducts = shopAllProducts

export function getProductById(id: string): Product | undefined {
  return shopAllProducts.find((p) => p.id === id)
}
