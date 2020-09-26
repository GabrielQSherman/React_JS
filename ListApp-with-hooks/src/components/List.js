import React from 'react'

export default function List(props) {
  return (
    <div>
      <h1>
        {props.title}
      </h1>
      <ul>
        {props.list.map(e => {
          return (
            <li>
             { e.text}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
