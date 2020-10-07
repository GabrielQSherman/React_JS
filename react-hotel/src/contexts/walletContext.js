import React, {useState, useContext, createContext, useEffect} from 'react'

const WalletContext = createContext()

export const useWalletContext = () => {
  return useContext(WalletContext)
}

const localStorageKey = 'hotel-wallet';

export const WalletContextProvider = ({children}) => {

  const [wallet, setWallet] = useState(() => {
    
    const lsWallet = localStorage.getItem(localStorageKey);
    
    if ( lsWallet !== undefined && lsWallet !== null) return JSON.parse(lsWallet)
  
    return 100

  })

  useEffect( () => {
    localStorage.setItem(localStorageKey, JSON.stringify(wallet))
  }, [wallet])

  return (
    <WalletContext.Provider value={{wallet: wallet, setWallet: setWallet}}>
      {children}
    </WalletContext.Provider>
  )
}