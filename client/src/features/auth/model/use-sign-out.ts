import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { useResetSession } from '@/entities/session/queries'

export const useSignOut = () => {
  const router = useRouter()
  const resetSession = useResetSession()

  const logoutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: async () => {
      void router.push(ROUTES.SIGN_IN)
      resetSession()
    },
  })

  return {
    isLoading: logoutMutation.isPending,
    signOut: () => logoutMutation.mutate({}),
  }
}
