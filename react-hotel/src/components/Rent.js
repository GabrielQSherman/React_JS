import React from 'react'

import { useWalletContext } from '../contexts/walletContext'
import { useRoomContext } from '../contexts/roomContext'
import { useThemeContext } from '../contexts/themeContext'

import flattenArray from '../utils/flattenArray'
import {availableRooms} from '../utils/hotelFilters'
import styles from '../utils/styles'

export default function Rent() {

  const {wallet, setWallet} = useWalletContext()
  const {rooms, setRooms} = useRoomContext() 
  const {theme} = useThemeContext()

  const availRooms = availableRooms(rooms).map( (floor, floorInx) => {
    return floor.map( (room) => {
      return {...room, floor: floorInx+1}
    })
  })

  const allRooms = flattenArray(availRooms);
  
  const dm = theme.darkmode || false;
  const themeStyles = {
    btn: { backgroundColor: dm ? '#333' : '#777'},
    rdiv: { backgroundColor: dm ? '#222' : 'antiquewhite' }
  }

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
        if ( room.id !== id ) return room

        if ( wallet - room.price < 0 ) {
          alert('You dont have enough to check-in to this room\nAdd more funds to your wallet and you can try again.')
          return room
        } else {
          setWallet(wallet - room.price)
          return {...room, renter: checkoutName}
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
                style={{...styles.roomDiv, ...themeStyles.rdiv }}
                id={room.id}
              >
                <h2>{`Floor ${room.floor}`}</h2> 
                <h3>{`Room Number ${room.room}`}</h3> 
                <h4>{`Price: $${room.price}`}</h4> 
                <button
                  style={{...styles.button, ...themeStyles.btn }} 
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
