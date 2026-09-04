import { FiInstagram, FiFacebook, FiPhone, FiMessageCircle, FiTruck } from 'react-icons/fi'
import { SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--mk-purple-light)',
        padding: '32px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(140px, 1fr))',
        gap: 24,
        fontSize: 14,
      }}
      className="mk-footer"
    >
      <div>
        <h4 style={{ margin: '0 0 12px' }}>Contact</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, color: 'var(--mk-grey)' }}>
          <FiPhone size={14} /> +8080232 47757
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--mk-grey)' }}>
          <FiMessageCircle size={14} /> wa.me/2348023247757
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px' }}>Social Media</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, color: 'var(--mk-grey)' }}>
          <FiInstagram size={14} /> Instagram
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--mk-grey)' }}>
          <FiFacebook size={14} /> Facebook
        </div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px' }}>Payments</h4>
        <div style={{ display: 'flex', gap: 8, marginBottom: 6, fontSize: 20, color: 'var(--mk-purple)' }}>
          <SiVisa /> <SiMastercard /> <SiAmericanexpress />
        </div>
        <div style={{ color: 'var(--mk-grey)' }}>Secure payments</div>
      </div>

      <div>
        <h4 style={{ margin: '0 0 12px', visibility: 'hidden' }}>Shipping</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--mk-grey)' }}>
          <FiTruck size={16} /> Shipping
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .mk-footer { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  )
}
