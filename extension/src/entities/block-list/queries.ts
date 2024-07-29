import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  blockListControllerAddBlockItem,
  blockListControllerGetList,
  blockListControllerRemoveBlockItem,
} from '@shared/api/generated'

const blockListKey = ['block-list'] as unknown[]

export const useBlockListQuery = ({ q }: { q?: string }) => {
  return useQuery({
    queryFn: () => blockListControllerGetList({ q }),
    queryKey: blockListKey.concat([{ q }]),
    placeholderData: (previousData) => previousData,
  })
}

export const useAddBlockItemMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: blockListControllerAddBlockItem,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: blockListKey })
    },
  })
}

export const useRemoveBlockItemMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: blockListControllerRemoveBlockItem,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: blockListKey })
    },
  })
}
