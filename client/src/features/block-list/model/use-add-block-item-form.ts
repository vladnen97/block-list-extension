import { useForm } from 'react-hook-form'
import { useAddBlockItemMutation } from '@/entities/block-list'
import { AddBlockItemDtoType } from '@/shared/api/generated'

export const useAddBlockItemForm = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { isValid },
  } = useForm<{
    data: string
    type: AddBlockItemDtoType
  }>()
  const addBlockItemMutation = useAddBlockItemMutation()

  const type = watch('type')

  return {
    handleSubmit: handleSubmit((data) => addBlockItemMutation.mutate(data)),
    isLoading: addBlockItemMutation.isPending,
    isValid,
    register,
    type,
  }
}
