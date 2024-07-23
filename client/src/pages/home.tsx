import { Header } from '@/shared/ui'
import { ToggleBlockingButton } from '@/features/toggle-blocking'
import { Profile } from '@/widgets/profile'
import { AddBlockItemForm, BlockList } from '@/features/block-list'

export default function HomePage() {
  return (
    <div className={'min-h-screen flex flex-col bg-slate-100'}>
      <Header right={<Profile />} />
      <div className={'grid grid-cols-[200px_1fr] pt-10'}>
        <aside className={'px-5'}>
          <ToggleBlockingButton />
        </aside>
        <main className={'px-4 '}>
          <h1 className={'text-2xl mb-6'}>Block List</h1>
          <AddBlockItemForm />
          <BlockList />
        </main>
      </div>
    </div>
  )
}
