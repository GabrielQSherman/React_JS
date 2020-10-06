
//TODO
/* 
  [] display all the list elements
  [] use the context (listContext)
  [] on an element's click, delete that element from list

*/

import React,{useContext} from 'react'
import {ListContext} from "../hooks/listContext"

export default function List() {
    const {list,setList} = useContext(ListContext);
    const deleteItem = (e) =>{
        
        // console.log(e.target);
    const newArray = [];
        for (let i = 0; i < list.length; i++) {
            
            if(e.target.id !== list[i].id){
                newArray.push(list[i])
                console.log(e.target)
            }
        }
        return setList(newArray)    
    }

  return (
    <div>
        <ul>
            {list.map((item)=>{ 
                return(
                    <li 
                    id={item.id}
                    key={item.id}
                    onClick={deleteItem}
                    >
                        {item.text}
                    </li>
                )
                
            })}
        </ul>

    </div>
  )
}


