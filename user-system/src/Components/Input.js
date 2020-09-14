import React from 'react'
import PropTypes from 'prop-types'

function Input(props) {

  const defaultStyle = {
    color: props.dm ? 'white' : 'black',
    backgroundColor: props.dm ? '#111' : 'white',
    borderRadius: 5,
    border: 'none',
    padding: 10,
  }


  return (
    <input

      style={{...defaultStyle, ...props.style}}
      type={props.type}
      placeholder={props.ph}
      onChange={props.onChange}
    
    />
  )
}

Input.propTypes = {
  dm: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
  ph: PropTypes.string,
  onChange: PropTypes.func,
}

export default Input

