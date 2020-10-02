import React, { useState, useEffect, useContext, createContext} from 'react';

const { get, set} = require('../utils/localStorage');

export const ListContext = createContext()

export const useListContext = () => {
  return useContext(ListContext)
}

export const ListContextProvider = ({ children }) => {
  const [lists, updateLists] = useState( () => {
  return get('lists', [])    
  })

  useEffect(() => {
    set('lists', JSON.stringify(lists))
  }, [lists])

  return (
    <ListContext.Provider value={{lists: lists, updateLists: updateLists}}>
      {children}
    </ListContext.Provider>
  )
}