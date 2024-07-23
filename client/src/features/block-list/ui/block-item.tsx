import { AddBlockItemDtoType } from '@/shared/api/generated'
import { useRemoveBlockItemMutation } from '@/entities/block-list'

export const BlockItem = ({
  type,
  id,
  data,
}: {
  type: AddBlockItemDtoType
  data: string
  id: number
}) => {
  const removeBlockItemMutation = useRemoveBlockItemMutation()

  return (
    <div className={'flex gap-2 items-center rounded-xl bg-white px-4 py-2'}>
      <div>
        <div className={'text-lg'}>{data}</div>
        <div className={'text-slate-500'}>{type}</div>
      </div>

      <button
        className={
          'ml-auto text-rose-500 [hover:not(:disabled)]:text-rose-600 disabled:opacity-50 disabled:cursor-not-allowed p-1'
        }
        onClick={() => removeBlockItemMutation.mutate(id)}
        disabled={removeBlockItemMutation.isPending}
      >
        <Trash className={'w-6 h-6'} />
      </button>
    </div>
  )
}

const Trash = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="currentColor"
        d="m9.4 16.5l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L16 9.9l-1.4-1.4l-2.6 2.6l-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21z"
      />
    </svg>
  )
}
