export type ProductKind =
  | 'backpack'
  | 'mini-backpack'
  | 'tote'
  | 'sneaker'
  | 'school-shoe'
  | 'lunch-kit'
  | 'bottle'
  | 'art-case'
  | 'math-tin'
  | 'pouch'

export type ProductMotif =
  | 'rocket'
  | 'controller'
  | 'crown'
  | 'wave'
  | 'ball'
  | 'planet'
  | 'star'
  | 'bolt'
  | 'leaf'
  | 'dino'
  | 'brush'
  | 'ruler'
  | 'unicorn'
  | 'sun'
  | 'rainbow'
  | 'tent'

export type Product = {
  id: string
  name: string
  price: string
  priceNum: number
  kind: ProductKind
  motif: ProductMotif
  category: string
  isNew: boolean
  description: string
  features: string[]
  colors: string[]
}

export const NEW_ARRIVALS = 'New Arrivals'

const productSeeds = [
  { id: 'rocket-set', name: 'Rocket Backpack', kind: 'backpack', motif: 'rocket', category: 'Back 2 School', priceNum: 15000, colors: ['Navy', 'Sky Blue'], features: ['Padded straps', 'Waterproof base', 'Large front pocket', 'Lunch sleeve', 'Reflective trim'] },
  { id: 'mario-set', name: 'Game On Pack', kind: 'backpack', motif: 'controller', category: 'Back 2 School', priceNum: 17000, colors: ['Black', 'Orange'], features: ['Gaming print', 'Heavy-duty zip', 'Main compartment', 'Built-in pouch', 'Easy-clean finish'] },
  { id: 'princess-set', name: 'Princess Tote', kind: 'tote', motif: 'crown', category: 'Girls', priceNum: 14000, colors: ['Pink', 'Rose Gold'], features: ['Protective corners', 'Mesh bottle pocket', 'Soft lining', 'Charm detail', 'Matching pouch'] },
  { id: 'mermaid-set', name: 'Mermaid Spark Pack', kind: 'backpack', motif: 'wave', category: 'Girls', priceNum: 15500, colors: ['Teal', 'Lilac'], features: ['Glitter trim', 'Quick zip access', 'Double handle', 'Side pockets', 'Safety clasp'] },
  { id: 'soccer-set', name: 'Soccer Star Kit', kind: 'backpack', motif: 'ball', category: 'Back 2 School', priceNum: 18000, colors: ['Blue', 'White'], features: ['Club print', 'Bottle holder', 'Front organiser', 'Durable canvas', 'Shock-absorbing straps'] },
  { id: 'space-set', name: 'Explorer Bundle', kind: 'backpack', motif: 'planet', category: 'Back 2 School', priceNum: 16500, colors: ['Midnight Blue', 'Silver'], features: ['Constellation print', 'Laptop sleeve', 'Mesh venting', 'Padded back', 'Double zipper'] },
  { id: 'sneaker-girl', name: 'Spark Sneaker', kind: 'sneaker', motif: 'star', category: 'Shoes', priceNum: 19500, colors: ['Pink', 'White'], features: ['Foam sole', 'Ventilated upper', 'Easy slip-on', 'Flex comfort', 'Bright accents'] },
  { id: 'shoe-boy', name: 'Daily Runner', kind: 'school-shoe', motif: 'bolt', category: 'Shoes', priceNum: 20500, colors: ['Black', 'Charcoal'], features: ['Non-slip sole', 'Velcro strap', 'Shock-absorbing heel', 'Breathable lining', 'Toe guard'] },
  { id: 'lunch-01', name: 'Cool Lunch Kit', kind: 'lunch-kit', motif: 'leaf', category: 'Lunch & Drinks', priceNum: 8500, colors: ['Green', 'Stone'], features: ['Insulated lining', 'Cooling pocket', 'Leak free', 'Easy carry handle', 'Durable shell'] },
  { id: 'drink-01', name: 'Dino Bottle', kind: 'bottle', motif: 'dino', category: 'Lunch & Drinks', priceNum: 3500, colors: ['Green', 'Teal'], features: ['Leak-proof lid', 'Vacuum insulated', 'BPA-free', '12h cold', 'Easy-grip body'] },
  { id: 'art-01', name: 'Creative Case', kind: 'art-case', motif: 'brush', category: 'Art & Stationery', priceNum: 12000, colors: ['Multicolor'], features: ['48-piece set', 'Carry case', 'Brush set', 'Watercolour tray', 'Age 4+'] },
  { id: 'stationery-01', name: 'Math Master Kit', kind: 'math-tin', motif: 'ruler', category: 'Art & Stationery', priceNum: 5000, colors: ['Silver', 'Gold'], features: ['Compass', 'Protractor', 'Ruler', 'Metal tin', 'Precision tools'] },
  { id: 'mini-unicorn', name: 'Unicorn Mini Pack', kind: 'mini-backpack', motif: 'unicorn', category: 'Girls', priceNum: 11500, colors: ['Purple', 'Pink'], features: ['Mini size', 'Front zip pocket', 'Soft handles', 'Star charm', 'Lightweight feel'] },
  { id: 'sunny-set', name: 'Sunny Lunch Duo', kind: 'lunch-kit', motif: 'sun', category: 'Lunch & Drinks', priceNum: 9500, colors: ['Yellow', 'Orange'], features: ['Lunch bag', 'Bottle set', 'Easy clean', 'Insulated', 'Carry handle'] },
  { id: 'rainbow-pouch', name: 'Rainbow Pencil Pouch', kind: 'pouch', motif: 'rainbow', category: 'Art & Stationery', priceNum: 4500, colors: ['Rainbow', 'Pastel'], features: ['Organiser slots', 'Stand-up base', 'Soft fabric', 'Double zips', 'Ages 5+'] },
  { id: 'camp-pack', name: 'Camp Outdoor Bag', kind: 'backpack', motif: 'tent', category: 'Back 2 School', priceNum: 17500, colors: ['Olive', 'Khaki'], features: ['Water resistant', 'Bottle pocket', 'Wide straps', 'Adventure print', 'Organiser panels'] },
] satisfies Array<{
  id: string
  name: string
  kind: ProductKind
  motif: ProductMotif
  category: string
  priceNum: number
  colors: string[]
  features: string[]
}>

const variantNames = ['Classic', 'Plus', 'Max', 'Glow', 'Mini', 'Hero', 'Dream', 'Sport', 'Fresh', 'Deluxe']

const TOTAL_PRODUCTS = 100
const NEW_ARRIVAL_COUNT = 12

const formatPrice = (value: number) => `₦${value.toLocaleString('en-NG')}`

const buildCatalog = (): Product[] => {
  const items: Product[] = []

  for (let i = 0; i < TOTAL_PRODUCTS; i += 1) {
    const seed = productSeeds[i % productSeeds.length]
    const variant = variantNames[i % variantNames.length]
    const idx = i + 1
    const basePrice = seed.priceNum + (i % 7) * 1500

    items.push({
      id: `${seed.id}-${idx}`,
      name: `${seed.name} ${variant}`,
      price: formatPrice(basePrice),
      priceNum: basePrice,
      kind: seed.kind,
      motif: seed.motif,
      category: seed.category,
      isNew: i >= TOTAL_PRODUCTS - NEW_ARRIVAL_COUNT,
      description: `${seed.name} brings style, organisation and everyday comfort to your child’s school routine with durable materials, playful design details and a practical layout for learning and play.`,
      features: [...seed.features, `Edition ${variant}`, 'School-ready comfort'],
      colors: seed.colors,
    })
  }

  return items
}

export const shopAllProducts: Product[] = buildCatalog()

export const inCollection = (product: Product, collection: string) =>
  collection === NEW_ARRIVALS ? product.isNew : product.category === collection

export function getProductById(id: string): Product | undefined {
  return shopAllProducts.find((p) => p.id === id)
}

export const collections = [
  { id: 'back-2-school', label: 'Back 2 School', filter: 'Back 2 School', description: 'Everything your child needs to start the term in style.', sample: 'rocket-set-1' },
  { id: 'new-arrivals', label: 'New Arrivals', filter: NEW_ARRIVALS, description: 'The latest backpack sets and accessories, just landed.', sample: 'camp-pack-96' },
  { id: 'girls', label: "Girls' Collection", filter: 'Girls', description: "Pretty, vibrant sets built for every girl's personality.", sample: 'mini-unicorn-13' },
  { id: 'shoes', label: 'School Shoes', filter: 'Shoes', description: 'Comfortable, durable shoes from first day to last bell.', sample: 'sneaker-girl-7' },
  { id: 'lunch-drinks', label: 'Lunch & Drinks', filter: 'Lunch & Drinks', description: 'Fresh, fun food containers and bottles for every school day.', sample: 'sunny-set-14' },
  { id: 'art-stationery', label: 'Art & Stationery', filter: 'Art & Stationery', description: 'Creative kits and classroom essentials for curious minds.', sample: 'art-01-11' },
] as const

const list = (...ids: string[]) => ids.map((id) => getProductById(id)!)

export type SchoolListLine = { label: string; product: Product }
export type SchoolListStage = { id: string; label: string; lines: SchoolListLine[]; preticked: number }

export const schoolLists: SchoolListStage[] = [
  {
    id: 'nursery',
    label: 'Nursery',
    preticked: 3,
    lines: [
      { label: 'A small bag', product: list('mini-unicorn-13')[0] },
      { label: 'Lunch box', product: list('lunch-01-9')[0] },
      { label: 'Water bottle', product: list('drink-01-10')[0] },
      { label: 'Colouring set', product: list('art-01-11')[0] },
      { label: 'Pencil pouch', product: list('rainbow-pouch-15')[0] },
      { label: 'Everyday shoes', product: list('sneaker-girl-7')[0] },
    ],
  },
  {
    id: 'primary',
    label: 'Primary',
    preticked: 4,
    lines: [
      { label: 'School bag', product: list('rocket-set-1')[0] },
      { label: 'Lunch kit', product: list('sunny-set-14')[0] },
      { label: 'Water bottle', product: list('drink-01-10')[0] },
      { label: 'Maths set', product: list('stationery-01-12')[0] },
      { label: 'Pencil pouch', product: list('rainbow-pouch-15')[0] },
      { label: 'School shoes', product: list('shoe-boy-8')[0] },
    ],
  },
  {
    id: 'secondary',
    label: 'Secondary',
    preticked: 3,
    lines: [
      { label: 'Big school bag', product: list('space-set-6')[0] },
      { label: 'Maths set', product: list('stationery-01-12')[0] },
      { label: 'Water bottle', product: list('drink-01-26')[0] },
      { label: 'Lunch kit', product: list('lunch-01-25')[0] },
      { label: 'Pencil pouch', product: list('rainbow-pouch-31')[0] },
      { label: 'School shoes', product: list('shoe-boy-24')[0] },
    ],
  },
]
