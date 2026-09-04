export type Product = {
  id: string
  name: string
  price: string        // display string e.g. "₦15,000"
  priceNum: number     // numeric for sorting/calculations e.g. 15000
  image: string
  images?: string[]    // additional gallery images
  category: string
  description: string
  features: string[]
  colors?: string[]
  gradient?: string
  emoji?: string
}

export const topProducts: Product[] = [
  {
    id: 'game-on',
    name: 'Game On! Set',
    price: '₦15,000',
    priceNum: 15000,
    category: 'Back 2 School',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80',
    ],
    description: 'The ultimate gaming-themed backpack set for your little champion. Comes with a matching lunch box and pencil case — everything your child needs for a fun school year.',
    features: ['Water-resistant material', 'Padded back support', 'Includes lunch box & pencil case', 'Multiple compartments', 'Adjustable shoulder straps'],
    colors: ['Orange/Black', 'Blue/Black'],
    gradient: 'linear-gradient(135deg,#F5A623,#E8590C)',
    emoji: '🎮',
  },
  {
    id: 'astronaut',
    name: 'Astronaut Adventure Set',
    price: '₦25,000',
    priceNum: 25000,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=600&fit=crop&q=80',
    ],
    description: 'Blast off into a new school year with this galaxy-inspired backpack set. Features glow-in-the-dark accents and a spaceship-themed lunch box that kids absolutely love.',
    features: ['Glow-in-the-dark accents', 'Laptop compartment', 'Includes lunch box & bottle holder', 'Reflective safety strips', 'Heavy-duty zips'],
    colors: ['Navy/Silver', 'Black/Blue'],
    gradient: 'linear-gradient(135deg,#232946,#4A4E7C)',
    emoji: '🚀',
  },
  {
    id: 'soccer',
    name: 'Super Soccer Set',
    price: '₦20,000',
    priceNum: 20000,
    category: 'Back 2 School',
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop&q=80',
    ],
    description: 'For the little football star in your life. This soccer-themed set includes a backpack, lunch box, and water bottle — all covered in your favourite football club colours.',
    features: ['Football-themed design', 'Ergonomic back panel', 'Includes lunch box & water bottle', 'Side mesh pockets', 'Durable polyester fabric'],
    colors: ['Blue/White', 'Green/White'],
    gradient: 'linear-gradient(135deg,#1E88E5,#0D47A1)',
    emoji: '⚽',
  },
  {
    id: 'space-explorer',
    name: 'Outer Space Explorer Set',
    price: '₦15,000',
    priceNum: 15000,
    category: 'Back 2 School',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&h=600&fit=crop&q=80',
    ],
    description: 'A deep-space adventure in a backpack. This explorer set is perfect for curious minds who love learning about the universe. Matching lunch box and pencil pouch included.',
    features: ['Rocket ship embroidery', 'Large main compartment', 'Includes pencil pouch', 'Breathable back mesh', 'Chest strap for stability'],
    colors: ['Dark Blue', 'Space Grey'],
    gradient: 'linear-gradient(135deg,#26547C,#1B3A5C)',
    emoji: '🪐',
  },
  {
    id: 'mermaid',
    name: 'Girl Power Mermaid Set',
    price: '₦15,000',
    priceNum: 15000,
    category: 'Girls',
    image: 'https://images.unsplash.com/photo-1600359756070-f9e7a3ed9aa9?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1600359756070-f9e7a3ed9aa9?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=600&h=600&fit=crop&q=80',
    ],
    description: 'Make a splash at school with this magical mermaid-themed set. Shimmering pastel colours, glitter accents, and a cute mermaid print that every girl will adore.',
    features: ['Shimmering glitter fabric', 'Built-in key clip', 'Includes lunch box & pencil case', 'Side bottle pockets', 'Secure top handle'],
    colors: ['Pink/Teal', 'Purple/Pink'],
    gradient: 'linear-gradient(135deg,#F7A6C1,#E787B0)',
    emoji: '🧜‍♀️',
  },
  {
    id: 'boys-shoes',
    name: "Boy's School Shoes",
    price: '₦20,000',
    priceNum: 20000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&h=600&fit=crop&q=80',
    ],
    description: 'Smart, durable school shoes built for active boys. Non-slip soles, easy velcro fastening, and breathable lining keep feet comfortable from morning assembly to the last bell.',
    features: ['Non-slip rubber sole', 'Velcro fastening', 'Breathable inner lining', 'Scuff-resistant toe cap', 'Available sizes 28–38'],
    colors: ['Black', 'Brown'],
    gradient: 'linear-gradient(135deg,#2B2B2B,#111111)',
    emoji: '👞',
  },
]

export const shopAllProducts: Product[] = [
  ...topProducts,
  {
    id: 'pink-princess',
    name: 'Pink Princess Backpack',
    price: '₦15,000',
    priceNum: 15000,
    category: 'Girls',
    image: 'https://images.unsplash.com/photo-1580087256394-dc596e1c8f4f?w=600&h=600&fit=crop&q=80',
    description: 'A royal pink backpack fit for a princess. Comes with a matching accessory pouch and has enough room for all school essentials.',
    features: ['Crown emblem badge', 'Roomy main compartment', 'Includes accessory pouch', 'Padded straps', 'Glitter zipper pulls'],
    colors: ['Pink', 'Rose Gold'],
    gradient: 'linear-gradient(135deg,#F48FB1,#EC407A)',
    emoji: '👑',
  },
  {
    id: 'camo-lunchbox',
    name: 'Cool Camo Lunchbox',
    price: '₦8,000',
    priceNum: 8000,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop&q=80',
    description: 'Keep lunch fresh and cool with this insulated camo-print lunch box. Perfect for boys who love the outdoors.',
    features: ['Insulated lining', 'Easy-clean interior', 'Includes ice pack holder', 'Durable zipper', 'Shoulder strap included'],
    colors: ['Green Camo', 'Blue Camo'],
    gradient: 'linear-gradient(135deg,#556B2F,#3B4C1E)',
    emoji: '🎒',
  },
  {
    id: 'dino-bottle',
    name: 'Dinosaur Water Bottle',
    price: '₦3,500',
    priceNum: 3500,
    category: 'Back 2 School',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=600&fit=crop&q=80',
    description: 'Roar into the school day with this fun dinosaur-themed stainless steel water bottle. Keeps drinks cold for 12 hours.',
    features: ['Stainless steel', 'Keeps cold 12 hours', 'Leak-proof lid', 'BPA-free', '500ml capacity'],
    colors: ['Green', 'Teal'],
    gradient: 'linear-gradient(135deg,#26A69A,#00695C)',
    emoji: '🦕',
  },
  {
    id: 'art-kit',
    name: 'Art Supplies Kit',
    price: '₦12,000',
    priceNum: 12000,
    category: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=600&fit=crop&q=80',
    description: "Unleash your child's creativity with this premium art supplies kit. Includes coloured pencils, crayons, watercolours, and brushes all in one carry case.",
    features: ['48-piece set', 'Includes carry case', 'Non-toxic materials', 'Vivid colour pigments', 'Suitable ages 4–12'],
    colors: ['Multicolour'],
    gradient: 'linear-gradient(135deg,#EC407A,#F06292)',
    emoji: '🎨',
  },
  {
    id: 'math-set',
    name: 'Math Geometry Set',
    price: '₦5,000',
    priceNum: 5000,
    category: 'Back 2 School',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=600&fit=crop&q=80',
    description: 'A complete geometry set for primary and secondary school students. Includes compass, ruler, protractor, set squares and more in a sturdy metal tin.',
    features: ['10-piece set', 'Metal tin case', 'Precision compass', 'Transparent ruler & protractor', 'Suitable JS1–SS3'],
    colors: ['Silver', 'Gold'],
    gradient: 'linear-gradient(135deg,#37474F,#263238)',
    emoji: '📐',
  },
  {
    id: 'sneakers',
    name: 'School Sneakers',
    price: '₦18,000',
    priceNum: 18000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop&q=80',
    description: 'Comfortable, durable sneakers designed for the school yard. Breathable mesh upper, cushioned insole, and a white sole that keeps its colour.',
    features: ['Breathable mesh upper', 'Cushioned insole', 'Rubber grip sole', 'Easy-lace system', 'Available sizes 29–42'],
    colors: ['White/Navy', 'White/Black', 'All White'],
    gradient: 'linear-gradient(135deg,#1A237E,#0D1350)',
    emoji: '👟',
  },
]

export const allProducts = shopAllProducts

export function getProductById(id: string): Product | undefined {
  return shopAllProducts.find((p) => p.id === id)
}
