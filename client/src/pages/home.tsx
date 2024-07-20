import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'
import {
  Button,
  Header,
  SelectField,
  Spinner,
  TextField,
  UiLink,
} from '@/shared/ui'

export default function HomePage() {
  const { data } = useQuery({
    queryKey: ['session'],
    queryFn: () => authControllerGetSessionInfo(),
  })

  return (
    <main>
      <Header
        right={
          <div className={'flex gap-2'}>
            <UiLink href={'/'}>Home</UiLink>
            <UiLink href={'/about'}>About</UiLink>
            <UiLink href={'/profile'}>Profile</UiLink>
          </div>
        }
      />
      <div>{data?.email}</div>
      <Button>click</Button>
      <TextField placeholder={'Enter email...'} label={'Email'} />
      <SelectField
        options={[
          { value: 'moscow', label: 'Moscow' },
          { value: 'spb', label: 'Saint-Petersburg' },
          {
            value: 'minsk',
            label: 'Minsk',
          },
          {
            value: 'kiev',
            label: 'Kiev',
          },
        ]}
      />

      <Spinner classname={'text-teal-600 h-10 w-10'} />
    </main>
  )
}
