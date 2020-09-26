import React from 'react'

export default function List(props) {
  return (
    <div>
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
