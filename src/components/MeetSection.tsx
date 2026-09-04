export default function MeetSection() {
  return (
    <section
      style={{
        background: 'var(--mk-purple-light)',
        padding: '40px 32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        alignItems: 'center',
      }}
      className="mk-meet"
    >
      <div>
        <h2 style={{ fontSize: 26, margin: '0 0 12px' }}>Meet Minnie Kiddies</h2>
        <p style={{ color: 'var(--mk-grey)', lineHeight: 1.6, maxWidth: 420 }}>
          We cater to all your kids' back-to-school needs: school bags, lunch boxes,
          water bottles &amp; more. Located on Lagos Island.
        </p>
      </div>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ flex: 1, aspectRatio: '4/5', borderRadius: 8, background: 'linear-gradient(135deg,#C9BEEC,#5B2C8F)' }} />
        <div style={{ flex: 1, aspectRatio: '4/5', borderRadius: 8, background: 'linear-gradient(135deg,#F4C6D7,#5B2C8F)' }} />
      </div>
      <style>{`
        @media (max-width: 760px) {
          .mk-meet { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
