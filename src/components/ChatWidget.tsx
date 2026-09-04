import { FiMessageCircle } from 'react-icons/fi'

export default function ChatWidget() {
  return (
    <button
      aria-label="Chat with us"
      style={{
        position: 'fixed',
        bottom: 22,
        right: 22,
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: 'var(--mk-purple)',
        color: '#fff',
        border: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 6px 18px rgba(91,44,143,0.4)',
        zIndex: 40,
      }}
    >
      <FiMessageCircle size={24} />
    </button>
  )
}
