import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'
import { usePageTitle } from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <PageHead title="That one isn't on the list." size="tall">
      <p>The page may have moved. The shop is still right here.</p>
      <Link to="/shop" className="btn btn-yellow">Back to the shop</Link>
    </PageHead>
  )
}
