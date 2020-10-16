import React, {useState} from 'react'

import Rent from './Rent'
import Return from './Return'
import Home from './Home'
import styles from '../utils/styles'

import { useWalletContext } from '../contexts/walletContext'
import { useThemeContext } from '../contexts/themeContext'

export default function Navigation() {

  const [page, setPage] = useState('home')
  const {wallet, setWallet} = useWalletContext()
  const {theme, setTheme} = useThemeContext()
  const dm = theme.darkmode || false;
  const themeStyles = {
    btn: { backgroundColor: dm ? 'midnightblue' : 'pink'},
  }

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
    
    const buttons = [{text: 'Back To Home', pn: 'home'}, {text: 'Return A Room', pn: 'return'}, {text: 'Checkout A Room', pn: 'rent'}, {text: 'Add Funds'},  {text: 'Change Theme', func: 'theme'}]
    
    return buttons.map( (info, i) => {
      if (pageName === info.pn) return null
  
      return (
        <button
        style={{...styles.button, ...themeStyles.btn, borderRadius: 7, margin: 10}} 
        key={i}
        onClick = {
          info.pn !== undefined
          ? () => {setPage(info.pn)}
          : info.func === 'theme' 
          ? () => {setTheme({...theme, darkmode: !theme.darkmode})}
          : () => {setWallet(wallet+10)}
        }
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
      <div
        style={{...styles.buttonDiv}}
      >
        {renderButtons(page)}
        <h4
          style={{...styles.fundsText}}
        >
          { wallet ? `Wallet: $${wallet}` : '$0'}
        </h4>
      </div>
      {renderPage(page)}
    </div>
  )
}
