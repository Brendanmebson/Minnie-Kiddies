import { FiBox, FiZap, FiShield, FiAward } from 'react-icons/fi'
import ReviewPopup from '../components/ReviewPopup'

const differentiators = [
  {
    icon: FiBox,
    title: 'Exclusive designs',
    body: 'Our collections feature exclusive prints and characters you won\u2019t find anywhere else.',
  },
  {
    icon: FiZap,
    title: 'Fast, friendly service',
    body: 'From order to delivery, our team keeps every family in the loop and every kid excited.',
  },
  {
    icon: FiShield,
    title: 'Safety-first materials',
    body: 'Every bag, shoe and accessory is made from durable, child-safe materials we trust ourselves.',
  },
  {
    icon: FiAward,
    title: 'Proud warranty',
    body: 'We stand behind our quality with a warranty on every set we sell.',
  },
]

const team = [
  { name: 'Enny Mord', role: 'Founder & buyer, keeps our collections fresh every season.' },
  { name: 'Andia Hardn', role: 'Store operations and community partnerships lead.' },
  { name: 'Mesa Whith', role: 'Customer care and social media, always ready to help.' },
]

export default function AboutUs() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: 30, margin: '32px 0' }}>OUR STORY</h1>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 32,
          padding: '0 32px 48px',
          maxWidth: 1100,
          margin: '0 auto',
        }}
        className="mk-story"
      >
        <div>
          <h3 style={{ fontSize: 18 }}>Founder Vision</h3>
          <p style={{ color: 'var(--mk-grey)', lineHeight: 1.7 }}>
            Minnie Kiddies started with one goal: make school prep exciting instead of
            stressful. Our founders wanted every child heading back to class to feel
            proud of their bag, their shoes and their first day of the term.
          </p>

          <h3 style={{ fontSize: 18 }}>Mission to make school fun</h3>
          <p style={{ color: 'var(--mk-grey)', lineHeight: 1.7 }}>
            We work directly with our Lagos Island community to bring in products
            parents trust and kids genuinely love, from backpack sets to first-day shoes.
          </p>

          <h3 style={{ fontSize: 18 }}>Carefully selected, high-quality &amp; safe</h3>
          <p style={{ color: 'var(--mk-grey)', lineHeight: 1.7 }}>
            Every backpack, lunch box and pair of shoes is chosen for durability and
            safety first, then for the fun, exciting designs kids pick out themselves.
            We stock everything from outer-space explorer sets to classic school shoes,
            so every child finds a set that feels like their own.
          </p>

          <p style={{ color: 'var(--mk-grey)', lineHeight: 1.7 }}>
            You'll find our full range in store on Lagos Island, where our team helps
            families put together the perfect back-to-school kit.
          </p>
        </div>

        <div>
          <div
            style={{
              aspectRatio: '4/3',
              borderRadius: 10,
              background: 'linear-gradient(135deg,#5B2C8F,#C9BEEC)',
              marginBottom: 24,
            }}
          />
          <h3 style={{ fontSize: 20, marginBottom: 16 }}>Differentiators</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            {differentiators.map(({ icon: Icon, title, body }) => (
              <div key={title} style={{ display: 'flex', gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    background: 'var(--mk-purple-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--mk-purple)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--mk-grey)', lineHeight: 1.5 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section style={{ padding: '0 32px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }} className="mk-team">
          <div>
            <h2 style={{ fontSize: 24, marginBottom: 20 }}>Meet the Team</h2>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {team.map((member, i) => (
                <div key={member.name} style={{ width: 130 }}>
                  <div
                    style={{
                      aspectRatio: '1/1',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, #8F6FCF, #${['E787B0', '5B2C8F', 'C9BEEC'][i]})`,
                      marginBottom: 10,
                    }}
                  />
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{member.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--mk-grey)', lineHeight: 1.4 }}>{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                aspectRatio: '4/3',
                borderRadius: 10,
                background: 'linear-gradient(135deg,#C9BEEC,#5B2C8F)',
                marginBottom: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 600,
                textAlign: 'center',
                padding: 16,
              }}
            >
              Lagos Island Store — map preview
            </div>
            <a
              href="#"
              style={{
                display: 'inline-block',
                background: 'var(--mk-purple)',
                color: '#fff',
                padding: '10px 24px',
                borderRadius: 4,
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>

      {/* Community & Impact */}
      <section
        style={{
          background: 'var(--mk-purple-light)',
          padding: '40px 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 24,
          alignItems: 'center',
        }}
        className="mk-team"
      >
        <div>
          <h2 style={{ fontSize: 24, margin: '0 0 12px' }}>Community &amp; Impact</h2>
          <p style={{ color: 'var(--mk-grey)', lineHeight: 1.6, maxWidth: 420 }}>
            We give back to our Lagos Island community through school-supply drives
            and partnerships that keep more kids ready for the classroom.
          </p>
        </div>
        <div
          style={{
            aspectRatio: '16/9',
            borderRadius: 10,
            background: 'linear-gradient(135deg,#3E1C63,#F4C6D7)',
          }}
        />
      </section>

      <ReviewPopup />

      <style>{`
        @media (max-width: 760px) {
          .mk-story, .mk-team { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
