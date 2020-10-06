import React, {useContext} from 'react'
import {v1 as uuid} from 'uuid'
import { ListContext, useListContext } from '../hooks/listContext';

export default function ControlPanel() {

    const {list, setList}  = useContext(ListContext);
    //const {list, setList} = useListContext(); METHOD TWO BABY!!!
    // console.log(list, setList);

    const addItem = () => {
        let newItem = {text: prompt("Enter new item:"), id: uuid()}
        let newList = [...list]
        newList.push(newItem);
        setList(newList)
    }

    const clearList = () => {

        if (prompt("Are you sure you want to clear? Y/N") === "Y") {
            let newList = []
            setList(newList);
        } else {
            alert("Didn't delete any tasks :/")
        }
    }

    return (
        <div>
            <h1>Your List</h1>
            <h3>Total Items: {list.length}</h3>
            <button onClick={addItem}>Add Item To List</button>
            <button onClick={clearList}>Clear List</button>
        </div>
    )
}
//TODO
//[*] When Button is pressed a prompt should appear to add a new item to the list
//[*] NavBar should display how many items there are in the list
//[*] Implement a button to clear the list