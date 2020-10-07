import React from 'react'

import { RoomContextProvider } from './roomContext'
import { WalletContextProvider } from './walletContext'

export default function MainContext({children}) {
  return (
    <RoomContextProvider>
      <WalletContextProvider>
        {children}
      </WalletContextProvider>
    </RoomContextProvider>
  )
}
