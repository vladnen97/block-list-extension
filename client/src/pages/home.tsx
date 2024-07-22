import { Header } from '@/shared/ui'
import { LogoutButton } from '@/features/auth'
import { useSession } from '@/entities/session/queries'

export default function HomePage() {
  const { data } = useSession()

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
