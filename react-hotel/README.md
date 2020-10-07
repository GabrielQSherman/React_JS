
Room prices equation; Price = 
( $50 x floorNum ) + ( $10 x roomNum(ones place) - $10) + fixedDeposit($45)



Task List
    [*] initialize React project
    [*] create navigation bar
    [*] create components for Rent and Return components.
    [*] have the renting page or returning page display when a navbar button is pressed
    [*] create context for hotel rooms
    [*] create short algorithm to create room data programmatically and set that data as the initial value of the roomsContext
    [*] provide roomsContext to the application in App.js
    [*] create a button on Rent component, once pressed it should take a name and set the state/LS
    [*] create the a display on the Return component that will show all the unavailable rooms
    [*] implement features on Return items, when you click on one it should prompt the user to enter their name. If they enter the correct name the rooms renter property should go back to default.



Extra Tasks after completion of main app
    [*] include the roomsContext in the navbar component and display how many rooms are currently available with simple text
    [] implement a monetary system. User gets $300 (or whatever amount) to start with. And as they rent rooms they have the rooms cost taken out (plus a fixed deposit). When they return their room they should get their deposit back. To keep track of how much money a user has that data should be in its own context and stored in the context’s state and LS.
