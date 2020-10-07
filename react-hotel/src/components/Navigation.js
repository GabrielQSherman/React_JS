import React, {useState} from 'react'

import Rent from './Rent'
import Return from './Return'
import Home from './Home'

export default function Navigation() {

  const [page, setPage] = useState('home')

  const renderPage = (pageName) => {
    switch (pageName) {
      case 'home':
        return(
          <Home />
        )
      case 'rent':
        return(
          <Rent />
        )
      case 'return':
        return(
          <Return />
        )
      default:
        return(
          <h1>404 Page</h1>
        )
    }
  }

  const renderButtons = (pageName) => {
    
    const buttons = [{text: 'Back To Home', pn: 'home'}, {text: 'Return A Room', pn: 'return'}, {text: 'Checkout A Room', pn: 'rent'}]
    
    return buttons.map( (info, i) => {
      if (pageName === info.pn) return null
  
      return (
        <button key={i}
        onClick = {() => {setPage(info.pn)}}
        >{info.text}</button>
      )
    })
  }

  return (
    <div>
      <div>
        {renderButtons(page)}
      </div>
      {renderPage(page)}
    </div>
  )
}
