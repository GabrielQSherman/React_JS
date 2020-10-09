import React, {useState, useContext, createContext, useEffect} from 'react'

const ThemeContext = createContext()

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

const localStorageKey = 'hotel-theme';

export const ThemeContextProvider = ({children}) => {

  const [theme, setTheme] = useState(() => {
    
    const lsTheme = localStorage.getItem(localStorageKey);
    
    if ( lsTheme !== undefined && lsTheme !== null) return JSON.parse(lsTheme)
  
    return {darkmode: true}

  })

  useEffect( () => {
    localStorage.setItem(localStorageKey, JSON.stringify(theme))

    document.body.style.backgroundColor = theme.darkmode ? 'black' : 'white'
    document.body.style.color = theme.darkmode ? 'white' : 'black'

  }, [theme])

  return (
    <ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}