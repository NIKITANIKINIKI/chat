import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { store } from '../store/store'

interface Props {
  children: ReactNode
}

const StoreProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default StoreProvider
