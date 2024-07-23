import { useAddBlockItemForm } from '@/features/block-list/model/use-add-block-item-form'
import { Button, SelectField, TextField } from '@/shared/ui'
import { AddBlockItemDtoType } from '@/shared/api/generated'

const typeOptions = [
  {
    value: AddBlockItemDtoType.Website,
    label: 'Website',
  },
  {
    value: AddBlockItemDtoType.KeyWord,
    label: 'Keyword',
  },
]

export const AddBlockItemForm = () => {
  const { isLoading, type, register, isValid, handleSubmit } =
    useAddBlockItemForm()

  return (
    <form onSubmit={handleSubmit} className={'flex gap-2'}>
      <SelectField
        {...register('type')}
        className={'grow min-w-[200px]'}
        options={typeOptions}
      />
      <TextField
        className={'grow'}
        {...register('data', { required: true })}
        placeholder={
          type === 'Website' ? 'Enter website...' : 'Enter keyword...'
        }
      />
      <Button type={'submit'} disabled={isLoading || !isValid}>
        Add Item
      </Button>
    </form>
  )
}
