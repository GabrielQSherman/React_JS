import React from 'react'

import { useRoomContext } from '../contexts/roomContext'
import flattenArray from '../utils/flattenArray'

import {availableRooms} from '../utils/hotelFilters'

import styles from '../utils/styles'

export default function Rent() {

  const {rooms, setRooms} = useRoomContext() 

  const availRooms = availableRooms(rooms).map( (floor, floorInx) => {
    return floor.map( (room) => {
      return {...room, floor: floorInx+1}
    })
  })

  const allRooms = flattenArray(availRooms); 

  const rentMovie = (e) => {

    const checkoutName = prompt('Enter Your Name To Check-In This Room')

    if (checkoutName === null || checkoutName.trim() === '') {
      return alert('You must enter a name to check-in.\n\nCheck-In canceled...')
    }
    
    // console.log(checkoutName);
    const 
    id = e.target.parentElement.id,
    newRooms = rooms.map( floor => {
      return floor.map( room => {
        if ( room.id === id ) {
          return {...room, renter: checkoutName}
        } else {
          return room
        }
      })
    })
    setRooms(newRooms)
  }
  
  return (
    <div>
      <h1>Checkout Page</h1>
      <div
        style={{...styles.roomContain}}
      >
        {
          Array.isArray(availRooms) && availRooms.length !== 0
          ? allRooms.map( (room, i) => {
            
            return (
              <div
                key={i}
                style={{...styles.roomDiv}}
                id={room.id}
              >
                <h2>{`Floor ${room.floor}`}</h2> 
                <h3>{`Room Number ${room.room}`}</h3> 
                <h4>{`Price: $${room.price}`}</h4> 
                <button
                  style={{...styles.button}} 
                  onClick={rentMovie}
                >
                  Check In To This Room
                </button>
              </div>
            )
            
          })
          : 'Sorry, there are no rooms available.'
        }
      </div>
    </div>
  )
}
