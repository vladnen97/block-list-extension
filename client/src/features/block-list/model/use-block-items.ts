import { useState } from 'react'
import { useBlockListQuery } from '@/entities/block-list'

export const useBlockItems = () => {
  const [q, setQ] = useState('')

  const { data, isLoading } = useBlockListQuery({ q })

  const items = data?.items ?? []

  return {
    items,
    isLoading,
    q,
    setQ,
  }
}
