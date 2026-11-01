import { useEffect, useRef, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-in')
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        node.classList.add('is-in')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
