import React from 'react'
import PropTypes from 'prop-types'

function Text(props) {

  const TagType = props.tag;
  
  const defaultStyle = {
    color: props.dm ? 'white': 'black',
    fontWeight: 444,
  }

  return (
    <TagType
      style = {{...defaultStyle, ...props.style}}
    >
      {props.text}
    </TagType>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  dm: PropTypes.bool

}


export default Text

