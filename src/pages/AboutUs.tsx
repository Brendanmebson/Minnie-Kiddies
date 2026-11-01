import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { usePageTitle } from '../hooks/usePageTitle'
import blockSorting from '../assets/photos/block-sorting.jpg'
import childDrawing from '../assets/photos/child-drawing.jpg'
import toysOnFloor from '../assets/photos/toys-on-floor.jpg'

const promises = [
  { title: 'Exclusive designs', body: "Our collections feature exclusive prints and characters you won't find anywhere else." },
  { title: 'Fast, friendly service', body: 'From order to delivery, our team keeps every family in the loop and every kid excited.' },
  { title: 'Safety-first materials', body: 'Every bag, shoe and accessory is made from durable, child-safe materials we trust ourselves.' },
  { title: 'Proud warranty', body: 'We stand behind our quality with a warranty on every set we sell.' },
]

export default function AboutUs() {
  usePageTitle('Our story')

  return (
    <>
      <section className="about-hero">
        <div className="about-hero-copy">
          <h1>School prep should be fun.</h1>
          <p>
            Minnie Kiddies started with one goal: make school prep exciting instead of stressful.
            We're Lagos Island's go-to destination for everything back to school.
          </p>
        </div>
        <img src={childDrawing} width={1500} height={997} alt="A child drawing in a spiral notebook at a table" />
      </section>

      <section className="about-story band">
        <Reveal className="about-chapters">
          <h2 className="section-title">Why we do this</h2>
          <h3>A proud first day</h3>
          <p>
            Our founders wanted every child heading back to class to feel proud of their bag,
            their shoes and their first day of the term. That passion drives every product we curate.
          </p>
          <h3>Made for our community</h3>
          <p>
            We work directly with our Lagos Island community to bring in products parents trust
            and kids genuinely love, from backpack sets to first-day shoes.
          </p>
          <h3>Picked with care</h3>
          <p>
            Every backpack, lunch box and pair of shoes is chosen for durability and safety first,
            then for the fun designs kids pick out themselves, so every child finds a set that
            feels like their own.
          </p>
        </Reveal>
        <Reveal className="about-photo" delay={100}>
          <img src={blockSorting} width={1500} height={1001} alt="Colourful wooden shapes being sorted onto a pegboard" loading="lazy" />
        </Reveal>
      </section>

      <section className="promises">
        <h2 className="section-title">What we promise</h2>
        <dl>
          {promises.map(({ title, body }, i) => (
            <Reveal key={title} delay={(i % 2) * 70}>
              <dt>{title}</dt>
              <dd>{body}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="community">
        <img src={toysOnFloor} width={1500} height={1001} alt="A child sitting on a carpet among colourful building blocks and toys" loading="lazy" />
        <Reveal className="community-card">
          <h2>Giving back on the Island</h2>
          <p>
            We give back to our Lagos Island community through school-supply drives and
            partnerships that keep more kids ready for the classroom.
          </p>
          <Link to="/contact" className="btn btn-solid">Partner with us</Link>
        </Reveal>
      </section>
    </>
  )
}
