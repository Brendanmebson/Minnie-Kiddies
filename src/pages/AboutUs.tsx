import { FiBox, FiZap, FiShield, FiAward } from 'react-icons/fi'
import ReviewPopup from '../components/ReviewPopup'

const differentiators = [
  {
    icon: FiBox,
    title: 'Exclusive designs',
    body: 'Our collections feature exclusive prints and characters you won\'t find anywhere else.',
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
  {
    name: 'Enny Mord',
    role: 'Founder & buyer, keeps our collections fresh every season.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&q=80',
  },
  {
    name: 'Andia Hardn',
    role: 'Store operations and community partnerships lead.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&q=80',
  },
  {
    name: 'Mesa Whith',
    role: 'Customer care and social media, always ready to help.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80',
  },
]

export default function AboutUs() {
  return (
    <div>
      {/* Hero */}
      <section className="mk-about-hero">
        <div className="mk-about-hero-text">
          <h1>Our Story</h1>
          <p>
            Minnie Kiddies started with one goal: make school prep exciting instead of stressful.
            We're Lagos Island's go-to destination for everything back to school.
          </p>
        </div>
        <div className="mk-about-hero-img">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&h=500&fit=crop&q=85"
            alt="Children with school bags"
          />
        </div>
      </section>

      {/* Story + Differentiators */}
      <section className="mk-about-story">
        <div className="mk-about-story-text">
          <h3>Founder Vision</h3>
          <p>
            Our founders wanted every child heading back to class to feel proud of their bag,
            their shoes and their first day of the term. That passion drives every product
            we curate.
          </p>

          <h3>Mission to make school fun</h3>
          <p>
            We work directly with our Lagos Island community to bring in products parents
            trust and kids genuinely love — from backpack sets to first-day shoes.
          </p>

          <h3>Carefully selected, high-quality &amp; safe</h3>
          <p>
            Every backpack, lunch box and pair of shoes is chosen for durability and safety
            first, then for the fun, exciting designs kids pick out themselves. We stock
            everything from outer-space explorer sets to classic school shoes, so every child
            finds a set that feels like their own.
          </p>
        </div>

        <div className="mk-about-story-side">
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&h=420&fit=crop&q=85"
            alt="Minnie Kiddies store"
            className="mk-about-store-img"
          />
          <h3 style={{ fontSize: 18, margin: '24px 0 16px' }}>Why Choose Us</h3>
          <div className="mk-differentiators">
            {differentiators.map(({ icon: Icon, title, body }) => (
              <div key={title} className="mk-diff-item">
                <div className="mk-diff-icon">
                  <Icon size={17} />
                </div>
                <div>
                  <div className="mk-diff-title">{title}</div>
                  <div className="mk-diff-body">{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mk-team-section">
        <h2>Meet the Team</h2>
        <div className="mk-team-grid">
          {team.map((member) => (
            <div key={member.name} className="mk-team-card">
              <img src={member.image} alt={member.name} className="mk-team-avatar" />
              <div className="mk-team-name">{member.name}</div>
              <div className="mk-team-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Community & Impact */}
      <section className="mk-community">
        <div className="mk-community-text">
          <h2>Community &amp; Impact</h2>
          <p>
            We give back to our Lagos Island community through school-supply drives and
            partnerships that keep more kids ready for the classroom.
          </p>
        </div>
        <div className="mk-community-img">
          <img
            src="https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=700&h=420&fit=crop&q=85"
            alt="Community impact"
          />
        </div>
      </section>

      <ReviewPopup />

      <style>{`
        /* Hero */
        .mk-about-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 380px;
          overflow: hidden;
        }
        .mk-about-hero-text {
          background: var(--mk-purple-light);
          padding: 60px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .mk-about-hero-text h1 {
          font-size: 40px;
          font-weight: 800;
          margin: 0 0 16px;
        }
        .mk-about-hero-text p {
          color: var(--mk-grey);
          font-size: 16px;
          line-height: 1.7;
          margin: 0;
          max-width: 380px;
        }
        .mk-about-hero-img { overflow: hidden; }
        .mk-about-hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Story */
        .mk-about-story {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          padding: 56px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .mk-about-story h3 {
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 8px;
        }
        .mk-about-story p {
          color: var(--mk-grey);
          line-height: 1.7;
          margin: 0 0 24px;
          font-size: 14.5px;
        }
        .mk-about-store-img {
          width: 100%;
          border-radius: 12px;
          display: block;
          object-fit: cover;
          aspect-ratio: 4 / 3;
        }
        .mk-differentiators {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .mk-diff-item {
          display: flex;
          gap: 12px;
        }
        .mk-diff-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--mk-purple-light);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mk-purple);
          flex-shrink: 0;
        }
        .mk-diff-title { font-weight: 600; font-size: 14px; margin-bottom: 2px; }
        .mk-diff-body { font-size: 13px; color: var(--mk-grey); line-height: 1.5; }

        /* Team */
        .mk-team-section {
          background: #fafafa;
          padding: 56px 48px;
          text-align: center;
        }
        .mk-team-section h2 {
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 36px;
        }
        .mk-team-grid {
          display: flex;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .mk-team-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 160px;
        }
        .mk-team-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 12px;
          border: 3px solid var(--mk-purple-light);
        }
        .mk-team-name { font-weight: 700; font-size: 15px; margin-bottom: 4px; }
        .mk-team-role { font-size: 12px; color: var(--mk-grey); line-height: 1.5; text-align: center; }

        /* Community */
        .mk-community {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: center;
          background: var(--mk-purple-light);
          padding: 56px 48px;
        }
        .mk-community h2 {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 14px;
        }
        .mk-community p {
          color: var(--mk-grey);
          line-height: 1.7;
          margin: 0;
          font-size: 14.5px;
        }
        .mk-community-img img {
          width: 100%;
          border-radius: 12px;
          display: block;
          object-fit: cover;
          aspect-ratio: 16 / 9;
        }

        @media (max-width: 900px) {
          .mk-about-hero { grid-template-columns: 1fr; }
          .mk-about-hero-text { padding: 40px 28px; }
          .mk-about-hero-text h1 { font-size: 30px; }
          .mk-about-story { grid-template-columns: 1fr; gap: 0; padding: 36px 24px; }
          .mk-about-story-text { margin-bottom: 32px; }
          .mk-community { grid-template-columns: 1fr; padding: 40px 24px; }
          .mk-team-section { padding: 40px 24px; }
        }
      `}</style>
    </div>
  )
}
