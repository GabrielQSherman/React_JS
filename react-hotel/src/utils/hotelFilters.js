
export const rentedRooms = (rooms) => {
  return rooms.map( floor => {
    return floor.filter( room => room.renter !== null)
  })
}


export const availableRooms = (rooms) => {
  return rooms.map( floor => {
    return floor.filter( room => room.renter === null)
  })
}