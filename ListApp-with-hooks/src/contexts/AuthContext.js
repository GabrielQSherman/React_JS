import React, {createContext, useState, useEffect} from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {

  const [auth, setAuth] = useState(false)

  const toggleAuth = () => {
    setAuth(!auth)
  }

  useEffect( () => {
    console.log(`You are ${ auth ? 'now' : 'not'} authorized`);

  }, [auth])

  return (
    <AuthContext.Provider value={{auth: auth, toggleAuth: toggleAuth}}>
      {props.children}
    </AuthContext.Provider>
  )

}