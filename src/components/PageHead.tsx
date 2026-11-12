import type { ReactNode } from 'react'
import { Cloud, Rainbow } from './Decor'

type PageHeadProps = {
  title: string
  eyebrow?: string
  children?: ReactNode
  size?: 'regular' | 'state'
}

export default function PageHead({ title, eyebrow, children, size = 'regular' }: PageHeadProps) {
  return (
    <section className={`page-head page-head-${size}`}>
      <Rainbow className="page-head-rainbow" />
      <Cloud className="page-head-cloud" />
      <div className="wrap page-head-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}
