import React, {useState, useContext, createContext, useEffect} from 'react'

const ThemeContext = createContext()

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

const localStorageKey = 'hotel-theme';

export const ThemeContextProvider = ({children}) => {

  const [Theme, setTheme] = useState(() => {
    
    const lsTheme = localStorage.getItem(localStorageKey);
    
    if ( lsTheme !== undefined && lsTheme !== null) return JSON.parse(lsTheme)
  
    return {darkmode: true}

  })

  useEffect( () => {
    localStorage.setItem(localStorageKey, JSON.stringify(Theme))
  }, [Theme])

  return (
    <ThemeContext.Provider value={{Theme: Theme, setTheme: setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}