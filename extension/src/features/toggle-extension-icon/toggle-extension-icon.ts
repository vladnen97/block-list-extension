import { setBrowserInterval, setIcon } from '@shared/lib/chrome'
import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from '@shared/api/generated'

export function startToggleExtensionIcon() {
  void setBrowserInterval(
    async () => {
      console.log('start sync')
      const isAuth = await authControllerGetSessionInfo().then(
        () => true,
        () => false
      )

      if (!isAuth) {
        setIcon('/hey.png')
        return
      }

      const isBlockingEnabled = await accountControllerGetAccount().then(
        (r) => r.isBlockingEnabled
      )

      if (!isBlockingEnabled) {
        setIcon('/sleeping.png')
        return
      }

      setIcon('/shield.png')
      return
    },
    'update-block-rules',
    5 * 1000
  )
}
