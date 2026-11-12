import type { ReactNode } from 'react'
import { Rainbow } from './Decor'

type SectionHeadingProps = {
  title: string
  id?: string
  eyebrow?: string
  lead?: ReactNode
  ornament?: boolean
  align?: 'center' | 'start'
}

export default function SectionHeading({ title, id, eyebrow, lead, ornament = false, align = 'center' }: SectionHeadingProps) {
  return (
    <div className={`section-heading is-${align}`}>
      {ornament && <Rainbow className="heading-rainbow" />}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  )
}
