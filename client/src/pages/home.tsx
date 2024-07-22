import { Header } from '@/shared/ui'
import { LogoutButton } from '@/features/auth'
import { useQuery } from '@tanstack/react-query'
import { authControllerGetSessionInfo } from '@/shared/api/generated'

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: authControllerGetSessionInfo,
    staleTime: 3 * 60 * 1000,
  })

  return (
    <div>
      <Header
        right={
          <div className={'flex gap-2 items-center'}>
            {data?.email}
            <LogoutButton />
          </div>
        }
      />
      <main>Main</main>
    </div>
  )
}
