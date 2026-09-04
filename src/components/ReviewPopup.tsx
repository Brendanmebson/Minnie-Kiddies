import { useState } from 'react'
import { FiX } from 'react-icons/fi'

export default function ReviewPopup() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className="mk-review-popup">
      <button
        onClick={() => setVisible(false)}
        aria-label="Close review"
        className="mk-review-close"
      >
        <FiX size={14} />
      </button>

      <div className="mk-review-header">
        <img
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&q=80"
          alt="Client avatar"
          className="mk-review-avatar"
        />
        <strong>Client Review</strong>
      </div>

      <p className="mk-review-body">
        I had with sales good quality products was assured our customer and community with sea approachani...
      </p>
      <span className="mk-review-read-more">Read more</span>

      <style>{`
        .mk-review-popup {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 230px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.16);
          padding: 14px;
          z-index: 39;
        }
        .mk-review-close {
          position: absolute;
          top: 8px;
          right: 8px;
          background: none;
          border: none;
          color: var(--mk-grey);
          cursor: pointer;
          padding: 2px;
          line-height: 1;
        }
        .mk-review-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .mk-review-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }
        .mk-review-header strong {
          font-size: 13px;
        }
        .mk-review-body {
          font-size: 12px;
          color: var(--mk-grey);
          margin: 0 0 6px;
          line-height: 1.55;
        }
        .mk-review-read-more {
          font-size: 12px;
          color: var(--mk-purple);
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
