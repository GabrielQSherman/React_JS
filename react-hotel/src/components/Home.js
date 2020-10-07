import React from 'react'

import { useRoomContext } from '../contexts/roomContext'

import flatten from '../utils/flattenArray'

import {rentedRooms, availableRooms} from '../utils/hotelFilters'

export default function Home() {

  const {rooms} = useRoomContext() 

  return (
    <div>
      <h1>Welcome to the CareerDevs Hotel</h1>
      <h4>
        {`We have ${flatten(rooms).length} rooms total`}
      </h4>
      <h4>
        {`${flatten(rentedRooms(rooms)).length} are rooms being rented`}
      </h4>
      <h4>
        {`${flatten(availableRooms(rooms)).length} are rooms available`}
      </h4>
    </div>
  )
}
