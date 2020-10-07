import React from 'react'

import { useRoomContext } from '../contexts/roomContext'
import flattenArray from '../utils/flattenArray'

import {rentedRooms} from '../utils/hotelFilters'

import styles from '../utils/styles'

export default function Rent() {

  const {rooms} = useRoomContext() 

  const rntRooms = rentedRooms(rooms).map( (floor, floorInx) => {
    return floor.map( (room) => {
      return {...room, floor: floorInx+1}
    })
  })

  const allRooms = flattenArray(rntRooms); 
  
  return (
    <div>
      <h1>Checkout Page</h1>
      <div
        style={{...styles.roomContain}}
      >
        {
          Array.isArray(allRooms) && allRooms.length !== 0
          ? allRooms.map( room => {
            
            return (
              <div
                style={{...styles.roomDiv}}
              >
                <h2>{`Floor ${room.floor}`}</h2> 
                <h3>{`Room Number ${room.room}`}</h3> 
              </div>
            )
            
          })
          : 'There are no rooms being rented.'
        }
      </div>
    </div>
  )
}
