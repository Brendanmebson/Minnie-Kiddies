import type { ReactNode } from 'react'

type PageHeadProps = {
  title: string
  children?: ReactNode
  size?: 'regular' | 'state'
}

export default function PageHead({ title, children, size = 'regular' }: PageHeadProps) {
  return (
    <section className={`wrap page-head page-head-${size}`}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}
