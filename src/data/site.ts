export const site = {
  name: 'Minnie Kiddies',
  tagline: "Every child's need...",
  location: 'Lagos Island, Lagos, Nigeria',
  phone: '+234 802 324 7757',
  phoneHref: 'tel:+2348023247757',
  whatsappNumber: '2348023247757',
  instagramHandle: '@minniekiddies',
  instagramUrl: 'https://instagram.com/minniekiddies',
  deliveryFee: 2500,
  deliveryStates: ['Lagos', 'Abuja', 'Ogun', 'Rivers', 'Oyo', 'Kano', 'Delta', 'Enugu', 'Anambra', 'Imo'],
}

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`

export const formatNaira = (value: number) => `₦${value.toLocaleString('en-NG')}`
