import { Logo } from '../shared/ui/logo'
import { Button } from '../shared/ui/button'
import { createTabs } from '../shared/lib/chrome'
import { ADMIN_URL } from '../shared/constants'
import { ToggleBlockingButton } from '../features/toggle-blocking'

export const HomePage = () => {
  return (
    <div className={'p-8 flex flex-col gap-3'}>
      <div className={'flex items-center gap-2 text-xl'}>
        <Logo className={'text-teal-600 w-8 h-8'} />
        Easy Block
      </div>
      <ToggleBlockingButton />
      <Button variant={'outline'} onClick={() => createTabs(ADMIN_URL)}>
        Manage extension
      </Button>
    </div>
  )
}
