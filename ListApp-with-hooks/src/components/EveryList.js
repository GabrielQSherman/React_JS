import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';

export default function EveryList() {
  
  const
  {isDark} = useContext(ThemeContext),
  {lists, updateLists} = useListContext();

  console.log(lists, updateLists);
  
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: isDark ? 'midnightblue' : 'coral'
      }}
    >
      {
        Array.isArray(lists) && lists.length > 0 ?
        lists.map( list => {
          console.log(list);
        })
        : 'You have no lists, why not make one?'
      }      
    </div>
  )
}
