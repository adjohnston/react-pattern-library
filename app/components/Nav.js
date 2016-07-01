import React, { createClass } from 'react'
import { Link } from 'react-router'

const Nav = ({childRoutes}) => {
  const groups = childRoutes.reduce((acc, {group, path, page}) => {
    if (!acc[group])
      acc[group] = []

    acc[group].push({path, page})

    return acc
  }, {})

  return (
    <ul>
      {Object.keys(groups).map((group, i) => {
        return (
          <li
            key={i}>
            <div>
              {group}
            </div>
            <ul>
              {groups[group].map(({path, page}, i) => {
                return (
                  <li
                    key={i}>
                    <Link
                      to={path}>
                      {page}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

export default Nav
