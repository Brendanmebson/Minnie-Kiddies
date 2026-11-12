export function CoffeeButton() {
  return (
    <a className="coffee-btn" href="https://selar.com/showlove/brendan" target="_blank" rel="noopener">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 8h13v5a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6V8z" />
        <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" />
        <path d="M8 2.5c0 1 1 1.5 1 2.5M12 2.5c0 1 1 1.5 1 2.5" />
      </svg>
      Buy me a coffee
    </a>
  )
}

export function MadeByCredit() {
  return (
    <p className="made-by">
      Made by <a href="https://github.com/Brendanmebson">Brendan</a> · <a href="mailto:brendanmebson@gmail.com">brendanmebson@gmail.com</a>
    </p>
  )
}
