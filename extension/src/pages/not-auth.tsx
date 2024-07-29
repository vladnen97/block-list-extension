import { Logo } from '@shared/ui/logo'
import { Button } from '@shared/ui/button'
import { createTabs } from '@shared/lib/chrome'
import { ADMIN_SIGN_IN_URL } from '@shared/constants'

export const NotAuthPage = () => {
  return (
    <div className={'p-8 flex flex-col gap-3 items-center'}>
      <div className={'flex items-center gap-2 text-xl'}>
        <Logo className={'text-teal-600 w-8 h-8'} />
        Easy Block
      </div>

      <h2 className={'text-xl'}>You not authorized!</h2>
      <Button
        className={'w-full'}
        onClick={() => {
          createTabs(ADMIN_SIGN_IN_URL)
        }}
      >
        Sign In
      </Button>
    </div>
  )
}
