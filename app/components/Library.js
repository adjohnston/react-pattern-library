import React from 'react'
import Nav from '../components/Nav'
import childRoutes from '../utils/urls'

const Library = ({children}) => {
  return (
    <main
      role="main">
      <Nav
        childRoutes={childRoutes} />
      {children}
    </main>
  )
}

export default Library
