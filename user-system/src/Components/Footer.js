import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <div
      style={{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:'60px',
        fontWeight: 100,
        color: props.dm ? 'grey' : 'black',
      }}
    >
      Certainly not a copy of GitHub
    </div>
  )
}

Footer.propTypes = {
  dm: PropTypes.bool

}

export default Footer

