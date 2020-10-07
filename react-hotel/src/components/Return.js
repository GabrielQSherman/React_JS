import React from 'react'

import { useRoomContext } from '../contexts/roomContext'
import flattenArray from '../utils/flattenArray'

import {rentedRooms} from '../utils/hotelFilters'

import styles from '../utils/styles'

export default function Rent() {

  const {rooms, setRooms} = useRoomContext() 

  const rntRooms = rentedRooms(rooms).map( (floor, floorInx) => {
    return floor.map( (room) => {
      return {...room, floor: floorInx+1}
    })
  })

  const allRooms = flattenArray(rntRooms); 

  const returnMovie = (e) => {

    const checkoutName = prompt('Enter The Name You Used To Checkout This Room')

    if (checkoutName === null || checkoutName.trim() === '') {
      return alert('You must enter a name to checkout.\n\nCheckout canceled...')
    }
    
    // console.log(checkoutName);
    const 
    id = e.target.parentElement.id,
    newRooms = rooms.map( floor => {
      return floor.map( room => {
        if ( room.id === id ) {
          if (checkoutName === room.renter) {
            alert('Room Checkedout Successfully')
            return {...room, renter: null}
          } else {
            alert('That was not the name used to check-in this room')
            return room
          }
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
          Array.isArray(allRooms) && allRooms.length !== 0
          ? allRooms.map( (room, i) => {
            
            return (
              <div
                key={i}
                style={{...styles.roomDiv}}
                id={room.id}
              >
                <h2>{`Floor ${room.floor}`}</h2> 
                <h3>{`Room Number ${room.room}`}</h3> 
                <button
                  style={{...styles.button}} 
                  onClick={returnMovie}
                >                  
                  Return This Room
                </button>
              </div>
            )
            
          })
          : 'There are no rooms being rented.'
        }
      </div>
    </div>
  )
}
