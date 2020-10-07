 const {v1 : uuid} = require( 'uuid' )

const calcHotelData = (floors,rooms) => { //floors: how many floors in the hotel, rooms: how many rooms per floor in the hotel
  const 
  deposit = 45,
  floorCost = 50,
  roomCost = 10,

  data = [];

  for (let i = 0; i < floors; i++) {
    data.push([])
    for (let j = 0; j < rooms; j++) {
      const
      id = uuid(),
      room = j+1,
      floor = i+1, 
      roomData = {
        id: id,
        room: `${(floor)}${room < 10 ? '0': '' }${room}`,
        renter: null,
        price: (floorCost*floor) + (roomCost*room) - roomCost + deposit,
      }
      
      data[i].push(roomData)
      
    }
  }
  return data
}
module.exports = calcHotelData;