import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'
import { usePageTitle } from '../hooks/usePageTitle'
import blockSorting from '../assets/photos/block-sorting.jpg'
import childDrawing from '../assets/photos/child-drawing.jpg'

const promises = [
  { title: 'Exclusive designs', body: "Prints and characters you won't find anywhere else." },
  { title: 'Fast, friendly service', body: 'We keep every family in the loop from order to delivery.' },
  { title: 'Safety-first materials', body: 'Durable, child-safe materials we trust ourselves.' },
  { title: 'Proud warranty', body: 'A warranty on every set we sell.' },
]

export default function AboutUs() {
  usePageTitle('Our story')

  return (
    <>
      <PageHead title="School prep should be fun">
        <p>We're Lagos Island's go-to destination for everything back to school.</p>
      </PageHead>

      <section className="wrap section split">
        <img src={childDrawing} width={1500} height={997} alt="A child drawing in a spiral notebook at a table" />
        <div>
          <h2 className="section-title">Why we do this</h2>
          <p>
            Minnie Kiddies started with one goal: make school prep exciting instead of stressful.
            Our founders wanted every child heading back to class to feel proud of their bag,
            their shoes and their first day of the term.
          </p>
          <p>
            Every backpack, lunch box and pair of shoes is chosen for durability and safety first,
            then for the fun designs kids pick out themselves.
          </p>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="section-title">What we promise</h2>
        <div className="how-grid how-grid-four">
          {promises.map(({ title, body }) => (
            <div key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section split split-reverse about-last">
        <img src={blockSorting} width={1500} height={1001} alt="Colourful wooden shapes being sorted onto a pegboard" loading="lazy" />
        <div>
          <h2 className="section-title">Giving back on the Island</h2>
          <p>
            We give back to our Lagos Island community through school-supply drives and
            partnerships that keep more kids ready for the classroom.
          </p>
          <Link to="/contact" className="btn btn-quiet">Partner with us</Link>
        </div>
      </section>
    </>
  )
}
