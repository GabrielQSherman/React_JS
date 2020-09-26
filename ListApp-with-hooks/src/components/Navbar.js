import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext'
import Button from './Button'
import ThemeToggle from './ThemeToggle';

export default function Navbar() {

  const 
  {isDark, light, dark} = useContext(ThemeContext),
  {auth: isAuthorized, toggleAuth } = useContext(AuthContext),
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

      <Button 
        text={isAuthorized ? 'Unauthorize' : 'Authorize'}
        onClick={toggleAuth}
      />
      
      <ThemeToggle />

    </div>
  )
}
