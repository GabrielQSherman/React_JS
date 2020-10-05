import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';
import NewListForm from './NewListForm';
import List from './List'

import { newListInputs } from '../data/formInputs'

export default function EveryList() {
  
  const
  {isDark, light, dark} = useContext(ThemeContext),
  {lists} = useListContext(),
  theme = isDark ? dark : light;

  return (
    <div>
      <div
        style={{
          paddingTop: 70,
          paddingBottom: 30,
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          backgroundColor: theme.sbg,
          justifyContent: 'center',
          borderRadius: '0 0 100px 100px',
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
          :  <h1 style={{color: isDark ? 'white' : 'black'}} >You have no lists, why not make one?</h1>
        }  
      </div>
      <NewListForm 
        inputs={newListInputs}
      />      
  </div>
  )
}
