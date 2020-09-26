import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Button from './Button'

export default function Navbar() {

  const 
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light;

  return (
    <div
      style={{
        background: theme.ui,
        color: theme.txt
      }}
    >
      <Button 
        text="Home"
        onClick={()=>{alert('Your Home!')}}
      />
      <h3>
        {`Theme is ${ isDark ? 'Dark' : 'Light'}`}
      </h3>
    </div>
  )
}
