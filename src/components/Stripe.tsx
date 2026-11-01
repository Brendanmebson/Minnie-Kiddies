const BARS = 140

export default function Stripe({ className = '' }: { className?: string }) {
  return (
    <div className={`stripe ${className}`} aria-hidden="true">
      {Array.from({ length: BARS }, (_, i) => <span key={i} />)}
    </div>
  )
}
