export default function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ position: 'relative', width: 44, height: 40 }}>
        <div style={{ position: 'absolute', top: 0, left: 2, width: 16, height: 16, borderRadius: '50%', background: 'var(--mk-purple)' }} />
        <div style={{ position: 'absolute', top: 0, right: 2, width: 16, height: 16, borderRadius: '50%', background: 'var(--mk-purple)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 4, width: 36, height: 26, borderRadius: '50%', background: 'var(--mk-purple)' }} />
      </div>
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontFamily: "'Baloo 2', cursive", fontWeight: 800, fontSize: 22, color: 'var(--mk-purple)' }}>
          Minnie <span style={{ color: '#F4A6C1' }}>Kiddies</span>
        </div>
        <div style={{ fontSize: 9, color: 'var(--mk-grey)', letterSpacing: 0.5, marginTop: -2 }}>
          Every Child's Need...
        </div>
      </div>
    </div>
  )
}
