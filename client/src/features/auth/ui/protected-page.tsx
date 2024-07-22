import { PropsWithChildren, ReactElement } from 'react'
import { PageSpinner } from '@/shared/ui'
import { useRouter } from 'next/router'
import { ROUTES } from '@/shared/constants/routes'
import { useSession } from '@/entities/session/queries'

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter()

    const { isLoading, isError } = useSession()

    if (isLoading) {
      return <PageSpinner />
    }

    if (isError) {
      void router.replace(ROUTES.SIGN_IN)
    }

    return <Component {...props} />
  }
}
