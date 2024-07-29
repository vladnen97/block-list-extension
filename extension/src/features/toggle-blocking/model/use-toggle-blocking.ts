import { useAccountQuery, useUpdateAccountMutation } from '@entities/account'

export const useToggleBlocking = () => {
  const { data: account, isSuccess } = useAccountQuery()
  const updateAccountMutation = useUpdateAccountMutation()

  const toggleBlocking = () => {
    if (account) {
      updateAccountMutation.mutate({
        isBlockingEnabled: !account?.isBlockingEnabled,
      })
    }
  }

  return {
    toggleBlocking,
    isLoading: updateAccountMutation.isPending,
    isBlockingEnabled: account?.isBlockingEnabled ?? false,
    isReady: isSuccess,
  }
}
