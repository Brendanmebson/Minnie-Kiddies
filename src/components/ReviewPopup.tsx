import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function ReviewPopup() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 90,
        right: 22,
        width: 240,
        background: '#fff',
        borderRadius: 10,
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        padding: 14,
        zIndex: 39,
      }}
    >
      <button
        onClick={() => setVisible(false)}
        aria-label="Close"
        style={{ position: 'absolute', top: 8, right: 8, background: 'none', border: 'none', color: 'var(--mk-grey)' }}
      >
        <FiX size={14} />
      </button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: '50%',
            background: 'var(--mk-purple-light)',
          }}
        />
        <strong style={{ fontSize: 13 }}>Client Review</strong>
      </div>
      <p style={{ fontSize: 12, color: 'var(--mk-grey)', margin: '0 0 4px', lineHeight: 1.5 }}>
        The quality was excellent and our customer and community loved every piece.
      </p>
      <span style={{ fontSize: 12, color: 'var(--mk-purple)', fontWeight: 600, cursor: 'pointer' }}>
        Read more
      </span>
    </div>
  )
}
