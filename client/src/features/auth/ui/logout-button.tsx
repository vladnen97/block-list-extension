import { Button } from '@/shared/ui'
import { useSignOut } from '@/features/auth/model/use-sign-out'

export const LogoutButton = () => {
  const { signOut, isLoading } = useSignOut()

  return (
    <Button variant={'outline'} disabled={isLoading} onClick={signOut}>
      Sign Out
    </Button>
  )
}
