import React, {useContext, useState, createContext} from 'react'

//import this one for method 1
export const ListContext = React.createContext() // OR createContext
//import this one for method 2
export function useListContext () {
  return useContext(ListContext)
}

//provider component 
export default ({children}) => { 

    const [list,setList] = useState([]);
    
    return (
        <ListContext.Provider value={{list: list, setList: setList}}>
            {children}
        </ListContext.Provider>
    )
}
