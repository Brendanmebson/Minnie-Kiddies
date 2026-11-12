import { Link } from 'react-router-dom'
import { FiAward, FiHeart, FiShield, FiSmile } from 'react-icons/fi'
import Marquee from '../components/Marquee'
import PageHead from '../components/PageHead'
import SectionHeading from '../components/SectionHeading'
import { photos } from '../data/photos'
import { usePageTitle } from '../hooks/usePageTitle'

const promises = [
  { icon: FiHeart, title: 'Designs kids love', body: "Prints and characters they'll be proud to carry." },
  { icon: FiSmile, title: 'Friendly service', body: 'We keep every family in the loop from order to delivery.' },
  { icon: FiShield, title: 'Safety first', body: 'Durable, child-safe materials we trust ourselves.' },
  { icon: FiAward, title: 'Proud warranty', body: 'A warranty on every set we sell.' },
]

export default function AboutUs() {
  usePageTitle('Our story')

  return (
    <>
      <PageHead eyebrow="Our story" title="School prep should be fun">
        <p>We're a children's shop on Lagos Island for everything back to school.</p>
      </PageHead>

      <section className="wrap section split">
        <img src={photos.childDrawing.src} width={photos.childDrawing.width} height={photos.childDrawing.height} alt={photos.childDrawing.alt} />
        <div>
          <SectionHeading align="start" eyebrow="Why we do this" title="Proud of the first day" />
          <p>
            Minnie Kiddies started with one goal: make school prep exciting instead of stressful.
            We want every child heading back to class to feel proud of their bag,
            their shoes and their first day of the term.
          </p>
          <p>
            Every backpack, lunch box and pair of shoes is chosen for durability and safety first,
            then for the fun designs kids pick out themselves.
          </p>
        </div>
      </section>

      <section className="section promises" aria-labelledby="promise-title">
        <div className="wrap">
          <SectionHeading id="promise-title" ornament eyebrow="What we promise" title="Four things, every order" />
          <ul className="promise-grid">
            {promises.map(({ icon: Icon, title, body }) => (
              <li key={title}>
                <span className="promise-icon"><Icon size={22} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap section split split-reverse">
        <img src={photos.blockSorting.src} width={photos.blockSorting.width} height={photos.blockSorting.height} alt={photos.blockSorting.alt} loading="lazy" />
        <div>
          <SectionHeading align="start" eyebrow="Community" title="Giving back on the Island" />
          <p>
            We give back to our Lagos Island community through school-supply drives and
            partnerships that keep more kids ready for the classroom.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-clay">Partner with us</Link>
            <Link to="/shop" className="btn btn-sage">Visit the shop</Link>
          </div>
        </div>
      </section>

      <div className="section-tail"><Marquee /></div>
    </>
  )
}
