import React, {useContext, useState, useEffect} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import ListForm from './ListForm'

export default function List(props) {

  const
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light,
  [listItems, setItems] = useState([...props.list]);

  useEffect( () => {

    console.log(`New Item Added To ${props.title} List: \n${listItems[listItems.length-1].text}`);

  }, [listItems, props.title])

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
      <ul>
        {listItems.map((e,i) => {
          return (
            <li
              key={i}
            >
             { e.text}
            </li>
          )
        })}
      </ul>

      <ListForm 
      
        inputs={props.inputs}
        dataName={props.dataName}
        setFunc={setItems}
        inputComplier={props.inputComplier}
      />
    </div>
  )
}
