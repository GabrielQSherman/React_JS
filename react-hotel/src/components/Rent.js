import React from 'react'

import { useRoomContext } from '../contexts/roomContext'
import flattenArray from '../utils/flattenArray'

import {availableRooms} from '../utils/hotelFilters'

import styles from '../utils/styles'

export default function Rent() {

  const {rooms} = useRoomContext() 

  const availRooms = availableRooms(rooms).map( (floor, floorInx) => {
    return floor.map( (room) => {
      return {...room, floor: floorInx+1}
    })
  })

  const allRooms = flattenArray(availRooms); 
  
  return (
    <div>
      <h1>Checkout Page</h1>
      <div
        style={{...styles.roomContain}}
      >
        {
          Array.isArray(availRooms) && availRooms.length !== 0
          ? allRooms.map( room => {
            
            return (
              <div
                style={{...styles.roomDiv}}
              >
                <h2>{`Floor ${room.floor}`}</h2> 
                <h3>{`Room Number ${room.room}`}</h3> 
                <h4>{`Price: $${room.price}`}</h4> 
              </div>
            )
            
          })
          : 'Sorry, there are no rooms available.'
        }
      </div>
    </div>
  )
}
