import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {

  const defaultStyle = {
    color: props.dm ? 'white' : 'black',
    backgroundColor: !props.dm ? 'white' : 'black',
    padding: 10,
    borderRadius: 5,
    margin: 1
  }

  return (
    <button
      style={{...defaultStyle, ...props.style}}
      onClick = {props.onClick}
    >{props.text}</button>
  )
}


Button.propTypes = {
  style: PropTypes.object,
  dm: PropTypes.bool

}

export default Button

