import React from 'react'
import PropTypes from 'prop-types'
import Text from './Text'

function Home(props) {
  return (
    <div>
      <Text 
        dm={props.dm} 
        tag='h3'
        text='Home'
      >
      </Text> 
    </div>
  )
}

Home.propTypes = {
  dm: PropTypes.bool
}

export default Home

