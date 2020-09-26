import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Button from './Button'
import ThemeToggle from './ThemeToggle';

export default function Navbar() {

  const 
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light;

  return (
    <div
      style={{
        background: theme.ui,
        color: theme.txt,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      
      <Button 
        text="Home"
        onClick={()=>{alert('Your Home!')}}
      />
      <ThemeToggle />

    </div>
  )
}
