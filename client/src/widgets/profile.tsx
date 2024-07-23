import { LogoutButton } from '@/features/auth'
import { useSession } from '@/entities/session'

export const Profile = () => {
  const { data } = useSession()

  if (!data) return null

  return (
    <div className={'flex gap-2 items-center'}>
      {data?.email}
      <LogoutButton />
    </div>
  )
}
