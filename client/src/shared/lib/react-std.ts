import { useEffect, useState } from 'react'

export const useDebouncedValue = <T>(value: T, timeout: number = 0): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, timeout)

    return () => clearTimeout(timer)
  }, [value, timeout])

  return debouncedValue
}
