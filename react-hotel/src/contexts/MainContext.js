import React from 'react'

import { RoomContextProvider } from './roomContext'
import { WalletContextProvider } from './walletContext'
import { ThemeContextProvider } from './themeContext'

export default function MainContext({children}) {
  return (
    <RoomContextProvider>
      <WalletContextProvider>
        <ThemeContextProvider>
          {children}
        </ThemeContextProvider>
      </WalletContextProvider>
    </RoomContextProvider>
  )
}
