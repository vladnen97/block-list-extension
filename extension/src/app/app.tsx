import { AppProvider } from './app-providers'
import { HomePage } from '@pages/home'

export function App() {
  return (
    <AppProvider>
      <HomePage />
    </AppProvider>
  )
}
