import React, {useState, useContext, createContext, useEffect} from 'react'

import createHotelData from '../utils/createHotelData'

const RoomContext = createContext()

export const useRoomContext = () => {
  return useContext(RoomContext)
}

export const RoomContextProvider = ({children}) => {

  const [rooms, setRooms] = useState(() => {
    
    const lsRooms = localStorage.getItem('rooms');
    
    if ( lsRooms !== undefined && lsRooms !== null) return JSON.parse(lsRooms)
  
    return createHotelData(4,4)

  })

  useEffect( () => {
    localStorage.setItem('rooms', JSON.stringify(rooms))
  }, [rooms])

  return (
    <RoomContext.Provider value={{rooms: rooms, setRooms: setRooms}}>
      {children}
    </RoomContext.Provider>
  )
}