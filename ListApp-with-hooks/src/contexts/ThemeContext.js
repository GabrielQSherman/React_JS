import React, { createContext, useState, useEffect } from 'react'


export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState({
    isDark: true,
    light: { txt: "#555", ui: "#b4e7ff", bg: "#ffdbf3", sbg: '#ffb89e'},
    dark: { txt: "#ddd", ui: "#004561", bg: "#111", sbg: '#c28269'}
  })

  const toggleTheme = () => {
    setTheme( prevTheme => { return {...prevTheme, isDark: !prevTheme.isDark } })
  }

  useEffect( () => {

    document.body.style.backgroundColor = theme.isDark ? theme.dark.bg : theme.light.bg

  }, [theme])
  
  return (
    <ThemeContext.Provider value={{...theme, toggleTheme: toggleTheme}}>
      {props.children}      
    </ThemeContext.Provider>
  )
  
}