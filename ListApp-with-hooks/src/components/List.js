import React, {useContext, useState} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { useListContext } from '../contexts/ListContext';
import NewItemForm from './NewItemForm'

export default function List(props) {

  const
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light,
  // [listItems, setItems] = useState([...props.list]);
  {lists, updateLists} = useListContext()

  const listItems = lists.filter( l => l.listId === props.listId )[0].data;
  const TagType = props.listType === 'ordered' ? 'ol' : 'ul'

  return (
    <div
      style={{
        background: theme.ui,
        color: theme.txt
      }}
    >
      <h1>
        {props.title}
      </h1>
      <TagType>
        {listItems.map((e,i) => {
          return (
            <li
              style={{cursor: 'pointer'}}
              key={i}
              id={e.id || null}
              onClick={(evnt => {
                updateLists(lists.map( 
                  list => {
                    if (list.listId === props.listId) {
                      return {...list, data: list.data.filter(item => item.id !== evnt.target.id)}
                    } else {
                      return list
                    }
                  }  
                )
                )
              })}
            >
             { e.text}
            </li>
          )
        })}
      </TagType>

      <NewItemForm 
        listId={props.listId}
        inputs={props.inputs}
        dataName={props.dataName}
      />
    </div>
  )
}
