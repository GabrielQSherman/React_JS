import React from 'react'

import { Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types'
import Home from './Home'
import Login from './Login'
import Register from './Register'

function AppRouter(props) {
  return (
      <Switch>
        <Route exact path='/'>
          <Home dm={props.dm}/>
        </Route>
        <Route exact path='/login'>
          <Login dm={props.dm}/>
        </Route>
        <Route exact path='/register'>
          <Register dm={props.dm}/>
        </Route>
      </Switch>
  )
}

AppRouter.propTypes = {
  dm: PropTypes.bool.isRequired

}

export default AppRouter

