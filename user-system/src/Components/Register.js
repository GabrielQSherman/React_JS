import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

function Register(props) {
  return (
    <div>
      <Text 
        dm={props.dm} 
        tag='h3'
        text='Register'
      >
      </Text>
    </div>
  )
}

Register.propTypes = {
  dm: PropTypes.bool
}

export default Register

