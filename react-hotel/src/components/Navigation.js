import React, {useState} from 'react'

import Rent from './Rent'
import Return from './Return'

export default function Navigation() {

  const [page, setPage] = useState('home')

  const renderPage = (pageName) => {
    switch (pageName) {
      case 'home':
        return(
          <h1>Home</h1>
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
  return (
    <div>
      <div>
        <button>Home</button>
        <button>Rent</button>
        <button>Return</button>
      </div>
      {renderPage(page)}
    </div>
  )
}
