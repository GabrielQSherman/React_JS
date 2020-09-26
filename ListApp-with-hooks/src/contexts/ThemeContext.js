import React, { createContext, useState } from 'react'


export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {

  const [theme, setTheme] = useState({
    isDark: true,
    light: { txt: "#555", ui: "#ddd", bg: "#eee"},
    dark: { txt: "#ddd", ui: "#333", bg: "#555"}
  })


  return (
    <ThemeContext.Provider value={{...theme}}>
      {props.children}      
    </ThemeContext.Provider>
  )

}
