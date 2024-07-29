import { useSession } from '@entities/session'

export const HomePage = () => {
  const { data } = useSession()

  return (
    <div className={'text-3xl font-bold text-teal-600'}>
      Home page {data?.email}
    </div>
  )
}
