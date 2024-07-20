import { Inter } from 'next/font/google'
import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  })

  return <main className={`${inter.className}`}>{data?.email}</main>
}
