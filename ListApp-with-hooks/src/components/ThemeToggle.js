import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import Button from './Button'


export default function ThemeToggle() {
  
  const { isDark, toggleTheme} = useContext(ThemeContext);
  
  return (
    <Button 
      text={`Change To ${isDark ? 'Light' : 'Dark'}`}
      onClick={toggleTheme}
    />
  )
}
