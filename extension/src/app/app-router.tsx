import { useSession } from '../entities/session'
import { PageSpinner } from '../shared/ui/page-spinner'
import { HomePage } from '../pages/home'
import { NotAuthPage } from '../pages/not-auth'

export const AppRouter = () => {
  const { isLoading, isSuccess } = useSession()

  if (isLoading) return <PageSpinner />
  if (isSuccess) return <HomePage />
  return <NotAuthPage />
}
