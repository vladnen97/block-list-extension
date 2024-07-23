import { useBlockItems } from '@/features/block-list/model/use-block-items'
import { Spinner, TextField } from '@/shared/ui'
import { BlockItem } from '@/features/block-list/ui/block-item'
import { useDebouncedValue } from '@/shared/lib/react-std'

export const BlockList = () => {
  const { q, items, setQ, isLoading } = useBlockItems()

  return (
    <div className={'mt-14'}>
      <TextField
        className={'mb-2'}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        label={'Search'}
      />
      <div className={'py-6 flex flex-col gap-3'}>
        {isLoading ? (
          <Spinner classname={'w-15 h-15 mx-auto text-teal-600'} />
        ) : items.length === 0 ? (
          <div className={'text-xl text-center'}>List is empty...</div>
        ) : (
          items.map((item) => (
            <BlockItem
              type={item.type}
              data={item.data}
              id={item.id}
              key={item.id}
            />
          ))
        )}
      </div>
    </div>
  )
}
