import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function List(props) {

  const
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light;


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
        {props.list.map((e,i) => {
          return (
            <li
              key={i}
            >
             { e.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
