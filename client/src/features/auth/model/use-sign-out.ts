import { useRouter } from 'next/router'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'

export const useSignOut = () => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const logoutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess: async () => {
      void router.push(ROUTES.SIGN_IN)
      queryClient.removeQueries({ queryKey: ['session'] })
    },
  })

  return {
    isLoading: logoutMutation.isPending,
    signOut: () => logoutMutation.mutate({}),
  }
}
