import React from 'react';
export default function Button(props) {

  const buttonStyle = {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    border: 'none',
    fontSize: 'large',
    cursor: 'pointer',
  }

  return (
    <button
    className='dynamicBtn'
    style={{...buttonStyle, ...props.style}}
    onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
