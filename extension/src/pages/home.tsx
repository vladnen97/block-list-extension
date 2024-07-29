import { useSession } from '@entities/session'

export const HomePage = () => {
  const { data } = useSession()

  return <div>Home page {data?.email}</div>
}
