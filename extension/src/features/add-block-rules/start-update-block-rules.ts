import { setBrowserInterval, setNetRules } from '../../shared/lib/chrome'
import {
  accountControllerGetAccount,
  authControllerGetSessionInfo,
} from '../../shared/api/generated'
import { getBlockListNetRules } from './get-block-list-net-rules'

export const startUpdateBlockRules = () => {
  setBrowserInterval(
    async () => {
      const isAuth = await authControllerGetSessionInfo().then(
        () => true,
        () => false
      )

      if (!isAuth) {
        return await setNetRules([])
      }

      const isBlockingEnabled = await accountControllerGetAccount().then(
        (r) => r.isBlockingEnabled
      )

      if (!isBlockingEnabled) {
        return await setNetRules([])
      }

      void setNetRules(await getBlockListNetRules())
    },
    'update-block-rules',
    5 * 1000
  )
}
