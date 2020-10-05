import React, {useContext, useState, useEffect} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import NewItemForm from './NewItemForm'

export default function List(props) {

  const
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light,
  [listItems, setItems] = useState([...props.list]);

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
                setItems(listItems.filter( item => item.id !== evnt.target.id))
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
