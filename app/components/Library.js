import React from 'react'
import Nav from '../components/Nav'
import childRoutes from '../utils/urls'

const Library = ({children}) => {
  return (
    <main
      className="rpl-container"
      role="main">
      <Nav
        className="rpl-container__span rpl-container__span--auto"
        childRoutes={childRoutes} />
      <div
        className="rpl-container__span">
        {children}
      </div>
    </main>
  )
}

export default Library
