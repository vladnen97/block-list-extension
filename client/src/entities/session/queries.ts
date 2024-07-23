import { useQuery, useQueryClient } from '@tanstack/react-query'
import { authControllerGetSessionInfo } from '@/shared/api/generated'

const sessionKey = ['session'] as const

export function useSession() {
  return useQuery({
    queryFn: authControllerGetSessionInfo,
    queryKey: sessionKey,
    retry: false,
    staleTime: 3 * 60 * 1000,
  })
}

export function useResetSession() {
  const queryClient = useQueryClient()

  return () => queryClient.removeQueries({ queryKey: sessionKey })
}
