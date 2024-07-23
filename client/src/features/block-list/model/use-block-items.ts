import { useState } from 'react'
import { useBlockListQuery } from '@/entities/block-list'
import { useDebouncedValue } from '@/shared/lib/react-std'

export const useBlockItems = () => {
  const [q, setQ] = useState('')
  const debouncedValue = useDebouncedValue(q, 500)

  const { data, isLoading } = useBlockListQuery({ q: debouncedValue })

  const items = data?.items ?? []

  return {
    items,
    isLoading,
    q,
    setQ,
  }
}
