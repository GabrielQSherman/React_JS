import React from 'react'
import Button from './Button'

export default function Navbar() {
  return (
    <div>
      <Button 
        text="Home"
        onClick={()=>{alert('Your Home!')}}
      />
    </div>
  )
}
