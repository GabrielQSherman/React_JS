import React, { createContext, useState, useEffect } from 'react'


export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState({
    isDark: true,
    light: { txt: "#555", ui: "#ddd", bg: "#eee"},
    dark: { txt: "#ddd", ui: "#333", bg: "#555"}
  })

  const toggleTheme = () => {
    setTheme( prevTheme => { return {...prevTheme, isDark: !prevTheme.isDark } })
  }

  useEffect( () => {

    document.body.style.backgroundColor = theme.isDark ? 'black' : 'lightgrey'

  }, [theme])
  
  return (
    <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
      {props.children}      
    </ThemeContext.Provider>
  )
  
}