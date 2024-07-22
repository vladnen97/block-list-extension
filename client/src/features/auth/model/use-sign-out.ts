import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'

export const useSignOut = () => {
  const router = useRouter()

  const logoutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: () => {
      void router.push(ROUTES.SIGN_IN)
    },
  })

  return {
    isLoading: logoutMutation.isPending,
    signOut: () => logoutMutation.mutate({}),
  }
}
