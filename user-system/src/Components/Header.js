import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'
import Button from './Button'

function Header(props) {

  const loginLink = window.location.origin + '/login';
  const regLink = window.location.origin + '/register';

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'space-between'
  }

  return (
    <div
      style={{...defaultStyle, ...props.style}}
    >

      <Text 
        dm={props.dm} 
        tag='h1'
        text='Welcome To DevHub'
        style={{flex: 4}}
      >
      </Text>

      <Button
        dm={props.dm} 
        onClick={()=>{window.location = window.location.origin}}
        text='Home'
        style={{flex: 1}}

      />    
      <Button
        dm={props.dm} 
        onClick={()=>{window.location = loginLink}}
        text='Login'
        style={{flex: 1}}

      />
      
      <Button
        dm={props.dm} 
        onClick={()=>{window.location = regLink}}
        text='Register'
        style={{flex: 1}}

      />
      
    </div>
  )
}

Header.propTypes = {
  dm: PropTypes.bool.isRequired
}

export default Header

