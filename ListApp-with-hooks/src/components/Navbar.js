import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Button from './Button'

export default function Navbar() {

  const theme = useContext(ThemeContext)

  console.log(theme);
  return (
    <div>
      <Button 
        text="Home"
        onClick={()=>{alert('Your Home!')}}
      />
      <h1>
        {`Theme is ${theme.isDark ? 'Dark' : 'Light'}`}
      </h1>
    </div>
  )
}
