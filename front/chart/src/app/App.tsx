import { FC } from 'react'
import AppRouter from './router/AppRouter'
import StoreProvider from './providers/StoreProvider'

const App: FC = () => {
  return (
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  )
}

export default App
