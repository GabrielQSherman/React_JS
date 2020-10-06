/*
This function will return an 2D array of the hotel room data that will be stored in state. 
It takes the params of how many floors and how many rooms per floor
The formula to calculate how much a room cost is as follows
( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)

*/

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
      room = j+1,
      floor = i+1, 
      roomData = {
        room: `${(i+1)*10}${j+1}`,
        renter: null,
        price: (floorCost*floor) + (roomCost*room) - roomCost + deposit,
      }
      
      data[i].push(roomData)
      
    }
  }
  return data
}

console.log(calcHotelData(4,4));

module.exports = calcHotelData;