import type { ReactNode } from 'react'
import type { Product, ProductKind, ProductMotif } from '../data/products'

type Inks = { body: string; deep: string; trim: string }

const WHITE = '#FFFFFF'
const INK = '#2A1245'
const YELLOW = '#FFC928'
const PINK = '#F4A6C1'

const colorInks: Record<string, Inks> = {
  Navy: { body: '#23357F', deep: '#16225A', trim: '#6FB6FF' },
  'Sky Blue': { body: '#6FB6FF', deep: '#3C86D6', trim: YELLOW },
  Black: { body: '#2B2732', deep: '#17141C', trim: '#FF8A2A' },
  Orange: { body: '#FF8A2A', deep: '#D96409', trim: INK },
  Pink: { body: '#F58DB6', deep: '#D64E8A', trim: WHITE },
  'Rose Gold': { body: '#E7B29E', deep: '#C5806A', trim: WHITE },
  Teal: { body: '#27B9B0', deep: '#14857F', trim: '#E7D5FF' },
  Lilac: { body: '#BFA2EE', deep: '#8F6FCF', trim: '#BDF3EE' },
  Blue: { body: '#2F6BE4', deep: '#1D49A8', trim: WHITE },
  White: { body: '#F4F1FA', deep: '#CFC6E2', trim: '#2F6BE4' },
  'Midnight Blue': { body: '#1C2350', deep: '#10153A', trim: YELLOW },
  Silver: { body: '#B9BECC', deep: '#858CA0', trim: INK },
  Charcoal: { body: '#4A4A55', deep: '#2F2F38', trim: '#BDBDC9' },
  Green: { body: '#3FBF6A', deep: '#23924A', trim: '#E3F99B' },
  Stone: { body: '#C8BFAE', deep: '#9C917E', trim: '#3FBF6A' },
  Multicolor: { body: '#7B3FBF', deep: '#5B2C8F', trim: YELLOW },
  Gold: { body: '#E9BC4A', deep: '#BC8D1F', trim: INK },
  Purple: { body: '#7B3FBF', deep: '#5B2C8F', trim: '#FFC3DA' },
  Yellow: { body: YELLOW, deep: '#E0A500', trim: '#FF7A2A' },
  Rainbow: { body: '#FF7BA6', deep: '#E0467F', trim: YELLOW },
  Pastel: { body: '#BDE7E3', deep: '#8BCBC5', trim: '#F7A9C4' },
  Olive: { body: '#6E8430', deep: '#4D5F1E', trim: '#F1E2A8' },
  Khaki: { body: '#BFAE76', deep: '#8F8050', trim: '#4D5F1E' },
}

const motifs: Record<ProductMotif, (i: Inks) => ReactNode> = {
  rocket: (i) => (
    <>
      <path d="M0-46c15 13 21 31 19 52H-19C-21-15-15-33 0-46z" fill={i.trim} />
      <circle cy="-12" r="8" fill={i.deep} />
      <path d="M-19 0l-14 22 18-6zM19 0l14 22-18-6z" fill={YELLOW} />
      <path d="M-9 8h18L0 34z" fill="#FF7A2A" />
    </>
  ),
  controller: (i) => (
    <>
      <rect x="-38" y="-20" width="76" height="40" rx="20" fill={i.trim} />
      <path d="M-22-6h6v-6h6v6h6v6h-6v6h-6V0h-6z" fill={WHITE} />
      <circle cx="16" cy="-3" r="5" fill={WHITE} />
      <circle cx="27" cy="-3" r="5" fill={YELLOW} />
    </>
  ),
  crown: (i) => (
    <>
      <path d="M-36 24l-6-44 22 18L0-30l20 28 22-18-6 44z" fill={i.trim} />
      <circle cy="6" r="6" fill={i.deep} />
    </>
  ),
  wave: (i) => (
    <>
      <path d="M-40 4c10-16 22-16 30 0s20 16 30 0 16-12 20-8v24h-80z" fill={i.trim} />
      <circle cx="-14" cy="-22" r="7" fill={WHITE} />
      <circle cx="10" cy="-30" r="4" fill={WHITE} />
    </>
  ),
  ball: (i) => (
    <>
      <circle r="36" fill={WHITE} />
      <path d="M0-14l14 10-5 16H-9l-5-16z" fill={i.deep} />
      <path d="M0-36v12M34-11l-12 4M21 29l-7-10M-21 29l7-10M-34-11l12 4" stroke={i.deep} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  planet: (i) => (
    <>
      <circle r="24" fill={i.trim} />
      <ellipse rx="44" ry="11" fill="none" stroke={WHITE} strokeWidth="6" transform="rotate(-18)" />
      <circle cx="-36" cy="-30" r="4" fill={WHITE} />
      <circle cx="36" cy="30" r="3" fill={WHITE} />
    </>
  ),
  star: (i) => <path d="M0-38l11 25 27 3-20 18 6 27L0 22l-24 13 6-27-20-18 27-3z" fill={i.trim} />,
  bolt: (i) => <path d="M8-40L-22 8h20L-10 40l32-50H2z" fill={i.trim} />,
  leaf: (i) => (
    <>
      <path d="M-30 30C-36-16-6-38 34-36 36 6 14 34-30 30z" fill={i.trim} />
      <path d="M-30 30L14-14" stroke={i.deep} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  dino: (i) => (
    <>
      <path d="M-42 26c0-26 16-40 38-40 8-14 34-14 34 2 0 10-10 14-20 13 2 12 2 19 0 25h-13v-12h-14v12z" fill={i.trim} />
      <circle cx="16" cy="-14" r="3.5" fill={INK} />
    </>
  ),
  brush: (i) => (
    <>
      <path d="M26-40l14 13L2 12-11-1z" fill={i.trim} />
      <path d="M-14 3l12 12c-6 16-20 22-34 20 10-8 8-24 22-32z" fill={PINK} />
    </>
  ),
  ruler: (i) => (
    <>
      <path d="M-40-34L40 34H-40z" fill={i.trim} />
      <path d="M-22 12L-3 28h-19z" fill={i.body} />
    </>
  ),
  unicorn: (i) => (
    <>
      <path d="M-4-44L8-8H-16z" fill={YELLOW} />
      <circle cy="8" r="26" fill={WHITE} />
      <circle cx="-9" cy="4" r="3.5" fill={INK} />
      <circle cx="9" cy="4" r="3.5" fill={INK} />
      <path d="M-22-10c-12 2-18 12-16 26 6-4 12-10 16-26z" fill={i.trim} />
    </>
  ),
  sun: (i) => (
    <>
      <path d="M0-44v14M0 30v14M-44 0h14M30 0h14M-31-31l10 10M21 21l10 10M31-31L21-21M-21 21l-10 10" stroke={i.trim} strokeWidth="7" strokeLinecap="round" />
      <circle r="22" fill={WHITE} />
    </>
  ),
  rainbow: () => (
    <>
      <path d="M-42 24a42 42 0 0 1 84 0h-14a28 28 0 0 0-56 0z" fill={WHITE} />
      <path d="M-28 24a28 28 0 0 1 56 0H16a16 16 0 0 0-32 0z" fill={YELLOW} />
      <path d="M-16 24a16 16 0 0 1 32 0z" fill="#6FB6FF" />
    </>
  ),
  tent: (i) => (
    <>
      <path d="M0-34l42 66h-84z" fill={i.trim} />
      <path d="M0-4l16 36H-16z" fill={i.deep} />
    </>
  ),
}

const zip = (d: string, ink: string) => <path d={d} fill="none" stroke={ink} strokeWidth="6" strokeLinecap="round" />

const Motif = ({ kind, x, y, scale, inks }: { kind: ProductMotif; x: number; y: number; scale: number; inks: Inks }) => (
  <g transform={`translate(${x} ${y}) scale(${scale})`}>{motifs[kind](inks)}</g>
)

const Backpack = ({ inks, motif, small = false }: { inks: Inks; motif: ProductMotif; small?: boolean }) => (
  <g transform={small ? 'translate(44 56) scale(.78)' : undefined}>
    <circle cx="124" cy="96" r="48" fill={inks.deep} />
    <circle cx="276" cy="96" r="48" fill={inks.deep} />
    <path d="M170 74c0-38 60-38 60 0" fill="none" stroke={inks.deep} strokeWidth="16" strokeLinecap="round" />
    <rect x="52" y="186" width="44" height="130" rx="20" fill={inks.deep} />
    <rect x="304" y="186" width="44" height="130" rx="20" fill={inks.deep} />
    <path d="M84 176c0-66 52-104 116-104s116 38 116 104v148c0 26-18 44-44 44H128c-26 0-44-18-44-44z" fill={inks.body} />
    {zip('M104 186c6-54 48-84 96-84s90 30 96 84', inks.trim)}
    <rect x="116" y="212" width="168" height="130" rx="30" fill={inks.deep} />
    {zip('M134 234h132', inks.trim)}
    <Motif kind={motif} x={200} y={290} scale={0.9} inks={inks} />
  </g>
)

const Tote = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <path d="M136 164c0-120 128-120 128 0" fill="none" stroke={inks.deep} strokeWidth="18" strokeLinecap="round" />
    <path d="M72 156h256l26 196c2 16-8 26-24 26H70c-16 0-26-10-24-26z" fill={inks.body} />
    <path d="M72 156h256l4 34H68z" fill={inks.deep} />
    <circle cx="136" cy="172" r="9" fill={inks.trim} />
    <circle cx="264" cy="172" r="9" fill={inks.trim} />
    <Motif kind={motif} x={200} y={272} scale={1.25} inks={inks} />
  </g>
)

const Sneaker = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <path d="M42 180c0-22 22-38 44-26 22 12 42 16 62-2 12-12 34-8 44 8 30 42 76 62 122 72 30 6 48 26 48 50H42z" fill={inks.body} />
    <path d="M30 282h340c6 0 10 4 10 10 0 24-18 40-42 40H64c-22 0-40-16-40-40 0-6 0-10 6-10z" fill={WHITE} />
    <path d="M28 306h350v0c-6 16-22 26-40 26H64c-18 0-30-10-36-26z" fill={inks.deep} />
    {zip('M190 176l-26 22M216 198l-26 22M244 214l-24 22', inks.trim)}
    <Motif kind={motif} x={108} y={232} scale={0.66} inks={inks} />
  </g>
)

const SchoolShoe = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <path d="M56 170c0-20 20-28 40-22 36 12 66 12 96-2 10-4 18-2 24 6 26 32 62 52 112 62 26 6 42 28 42 54v18H56z" fill={inks.body} />
    <rect x="142" y="188" width="104" height="34" rx="12" transform="rotate(14 194 205)" fill={inks.trim} />
    <path d="M44 286h344c4 0 8 4 8 8 0 22-16 38-38 38H82c-22 0-40-18-40-40 0-4 0-6 2-6z" fill={inks.deep} />
    <Motif kind={motif} x={100} y={236} scale={0.5} inks={inks} />
  </g>
)

const LunchKit = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <path d="M150 124c0-56 100-56 100 0" fill="none" stroke={inks.deep} strokeWidth="18" strokeLinecap="round" />
    <rect x="52" y="116" width="296" height="244" rx="44" fill={inks.body} />
    <path d="M52 192h296v-32c0-26-18-44-44-44H96c-26 0-44 18-44 44z" fill={inks.deep} />
    <rect x="172" y="172" width="56" height="42" rx="12" fill={inks.trim} />
    <Motif kind={motif} x={200} y={286} scale={0.95} inks={inks} />
  </g>
)

const Bottle = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <rect x="156" y="30" width="88" height="64" rx="18" fill={inks.deep} />
    <path d="M170 30c0-26 60-26 60 0" fill="none" stroke={inks.deep} strokeWidth="12" />
    <path d="M132 150c0-36 26-58 68-58s68 22 68 58v196c0 24-16 40-40 40h-56c-24 0-40-16-40-40z" fill={inks.body} />
    <rect x="132" y="330" width="136" height="20" fill={inks.deep} />
    <Motif kind={motif} x={200} y={232} scale={0.95} inks={inks} />
  </g>
)

const ArtCase = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <rect x="168" y="78" width="64" height="46" rx="14" fill="none" stroke={inks.deep} strokeWidth="16" />
    <rect x="44" y="114" width="312" height="240" rx="28" fill={inks.body} />
    <rect x="44" y="222" width="312" height="14" fill={inks.deep} />
    <rect x="176" y="208" width="48" height="42" rx="10" fill={inks.trim} />
    {['#FF5C8A', YELLOW, '#3FBF6A', '#6FB6FF', '#FF8A2A'].map((c, n) => (
      <circle key={c} cx={100 + n * 50} cy="170" r="20" fill={c} />
    ))}
    <Motif kind={motif} x={200} y={298} scale={0.68} inks={inks} />
  </g>
)

const MathTin = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <rect x="46" y="100" width="308" height="216" rx="24" fill={inks.deep} />
    <rect x="62" y="116" width="276" height="184" rx="14" fill={inks.body} />
    <Motif kind={motif} x={138} y={208} scale={0.95} inks={inks} />
    <circle cx="266" cy="208" r="52" fill={inks.deep} />
    <path d="M214 208a52 52 0 0 1 104 0z" fill={inks.trim} />
  </g>
)

const Pouch = ({ inks, motif }: { inks: Inks; motif: ProductMotif }) => (
  <g>
    <path d="M40 156c0-22 16-38 38-38h244c22 0 38 16 38 38v126c0 22-16 38-38 38H78c-22 0-38-16-38-38z" fill={inks.body} />
    <path d="M40 176v-20c0-22 16-38 38-38h244c22 0 38 16 38 38v20z" fill={inks.deep} />
    <circle cx="334" cy="148" r="11" fill={inks.trim} />
    {zip('M62 148h250', inks.trim)}
    <Motif kind={motif} x={200} y={252} scale={1} inks={inks} />
  </g>
)

const drawings: Record<ProductKind, (inks: Inks, motif: ProductMotif) => ReactNode> = {
  backpack: (inks, motif) => <Backpack inks={inks} motif={motif} />,
  'mini-backpack': (inks, motif) => <Backpack inks={inks} motif={motif} small />,
  tote: (inks, motif) => <Tote inks={inks} motif={motif} />,
  sneaker: (inks, motif) => <Sneaker inks={inks} motif={motif} />,
  'school-shoe': (inks, motif) => <SchoolShoe inks={inks} motif={motif} />,
  'lunch-kit': (inks, motif) => <LunchKit inks={inks} motif={motif} />,
  bottle: (inks, motif) => <Bottle inks={inks} motif={motif} />,
  'art-case': (inks, motif) => <ArtCase inks={inks} motif={motif} />,
  'math-tin': (inks, motif) => <MathTin inks={inks} motif={motif} />,
  pouch: (inks, motif) => <Pouch inks={inks} motif={motif} />,
}

type ProductArtProps = {
  product: Pick<Product, 'name' | 'kind' | 'motif' | 'colors'>
  color?: string
  className?: string
  decorative?: boolean
}

export default function ProductArt({ product, color, className, decorative = false }: ProductArtProps) {
  const inks = colorInks[color ?? product.colors[0]] ?? colorInks.Purple
  const label = `Drawing of the ${product.name}${color ? ` in ${color}` : ''}`

  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative || undefined}
    >
      {drawings[product.kind](inks, product.motif)}
    </svg>
  )
}
