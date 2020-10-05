import React, {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Button(props) {

  const
  {isDark, light, dark} = useContext(ThemeContext),
  theme = isDark ? dark : light,
  
  buttonStyle = {
    backgroundColor: theme.bg,
    color: theme.txt,
    padding: 10,
    borderRadius: 5,
    border: 'none',
    fontSize: 'large',
    cursor: 'pointer',
    margin: 10, 
  }

  return (
    <button
    className='dynamicBtn'
    style={{...buttonStyle, ...props.style}}
    onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}
