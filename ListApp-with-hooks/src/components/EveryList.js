import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';
import NewListForm from './NewListForm';
import List from './List'

import { newListInputs } from '../data/formInputs'

export default function EveryList() {
  
  const
  {isDark} = useContext(ThemeContext),
  {lists} = useListContext();
  
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
        lists.map( (list,idx) => {
          
          return (
            <List
              key={idx}
              title={list.title}
              list={list.data}
              dataName={list.dataName}
              listType={list.isOrdered ? 'ordered' : 'unordered'}
              listId={list.listId}
            />
          )
        })
        : 'You have no lists, why not make one?'
      }  
    <NewListForm 
      inputs={newListInputs}
    />    
    </div>
  )
}
