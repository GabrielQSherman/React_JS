import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

function Login(props) {
  return (
    <div>
      <Text 
        dm={props.dm} 
        tag='h3'
        text='Login'
      >
      </Text>
    </div>
  )
}

Login.propTypes = {
  dm: PropTypes.bool
}

export default Login

