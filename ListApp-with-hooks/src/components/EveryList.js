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
    <div>
      <div
        style={{
          paddingTop: 70,
          paddingBottom: 30,
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: isDark ? '#1d2a41' : '#ffb89e',
          justifyContent: 'center',
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
      </div>
      <NewListForm 
        inputs={newListInputs}
      />      
  </div>
  )
}
