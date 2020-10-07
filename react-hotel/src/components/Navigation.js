import React, {useState} from 'react'

import Rent from './Rent'
import Return from './Return'
import Home from './Home'
import styles from '../utils/styles'

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
        <button
        style={{...styles.button, borderRadius: 7, margin: 10}} 
        key={i}
        onClick = {() => {setPage(info.pn)}}
        >{info.text}</button>
      )
    })
  }

  return (
    <div
      style={{...styles.mainDiv}}
    >
      <div
        style={{...styles.mainTitleDiv}}
      >
        <h1
          style={{...styles.mainTitle}}
        >
          The CareerDevs Hotel
        </h1>
        <img 
          src='./cdlogo.png' 
          alt=''
          style={{...styles.titleLogo}} 
        />
      </div>
      <div>
        {renderButtons(page)}
      </div>
      {renderPage(page)}
    </div>
  )
}
