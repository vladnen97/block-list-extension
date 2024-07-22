import { PropsWithChildren, ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { PageSpinner } from '@/shared/ui'
import { useRouter } from 'next/router'
import { ROUTES } from '@/shared/constants/routes'

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter()

    const { isError, isLoading } = useQuery({
      queryFn: authControllerGetSessionInfo,
      queryKey: ['session'],
      retry: false,
      staleTime: 3 * 60 * 1000,
    })

    if (isLoading) {
      return <PageSpinner />
    }

    if (isError) {
      void router.replace(ROUTES.SIGN_IN)
    }

    return <Component {...props} />
  }
}
