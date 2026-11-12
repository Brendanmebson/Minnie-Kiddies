type DecorProps = { className?: string }

export function Rainbow({ className }: DecorProps) {
  return (
    <svg className={`rainbow ${className ?? ''}`} viewBox="0 0 120 64" aria-hidden="true">
      <path className="rainbow-outer" d="M8 62a52 52 0 0 1 104 0" />
      <path className="rainbow-mid" d="M24 62a36 36 0 0 1 72 0" />
      <path className="rainbow-inner" d="M40 62a20 20 0 0 1 40 0" />
    </svg>
  )
}

export function Cloud({ className }: DecorProps) {
  return (
    <svg className={`cloud ${className ?? ''}`} viewBox="0 0 200 84" aria-hidden="true">
      <path d="M26 84a26 26 0 0 1 8-50 38 38 0 0 1 70-16 30 30 0 0 1 50 14 28 28 0 0 1 22 52z" />
    </svg>
  )
}

export function CloudEdge({ className }: DecorProps) {
  return (
    <svg className={`cloud-edge ${className ?? ''}`} viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 90V56Q60 14 130 50Q200 4 280 44Q340 16 400 50Q480 0 560 46Q620 18 680 52Q760 6 840 46Q900 20 960 50Q1040 2 1120 46Q1180 18 1240 50Q1320 8 1400 46Q1420 40 1440 42V90z" />
    </svg>
  )
}
