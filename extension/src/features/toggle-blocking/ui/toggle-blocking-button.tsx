import { Button } from '@shared/ui/button'
import { useToggleBlocking } from '../model/use-toggle-blocking'

export const ToggleBlockingButton = () => {
  const { isBlockingEnabled, toggleBlocking, isLoading, isReady } =
    useToggleBlocking()

  if (!isReady) {
    return null
  }

  return (
    <Button
      disabled={isLoading}
      variant={!isBlockingEnabled ? 'primary' : 'secondary'}
      onClick={toggleBlocking}
    >
      {isBlockingEnabled ? 'Disable' : 'Enable'}
    </Button>
  )
}
