import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  accountControllerGetAccount,
  accountControllerPatchAccount,
} from '@/shared/api/generated'

const accountKey = ['account'] as const

export const useAccountQuery = () => {
  return useQuery({
    queryFn: accountControllerGetAccount,
    queryKey: accountKey,
  })
}

export const useUpdateAccountMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: accountControllerPatchAccount,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: accountKey })
    },
  })
}
