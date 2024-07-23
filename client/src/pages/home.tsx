import { Header } from '@/shared/ui'
import { ToggleBlockingButton } from '@/features/toggle-blocking'
import { Profile } from '@/widgets/profile'

export default function HomePage() {
  return (
    <div className={'min-h-screen flex flex-col'}>
      <Header right={<Profile />} />
      <div className={'grid grid-cols-[200px_1fr] pt-10'}>
        <aside className={'px-5'}>
          <ToggleBlockingButton />
        </aside>
        <main>Block list</main>
      </div>
    </div>
  )
}
