import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <PageHead eyebrow="Page not found" title="That one isn't on the list" size="state">
      <p>The page may have moved. The shop is still right here.</p>
      <div className="btn-row">
        <Link to="/shop" className="btn btn-clay">Back to the shop</Link>
        <Link to="/" className="btn btn-sage">Go home</Link>
      </div>
    </PageHead>
  )
}
