import React, { createClass } from 'react'
import { Link } from 'react-router'

const Nav = ({childRoutes}) => {
  const groups = childRoutes.reduce((acc, {group, path, pageName}) => {
    if (!acc[group])
      acc[group] = []

    acc[group].push({path, pageName})

    return acc
  }, {})

  return (
    <nav>
      <ul>
        {Object.keys(groups).map((group, i) => {
          return (
            <li
              key={i}>
              <div>
                {group}
              </div>
              <ul>
                {groups[group].map(({path, pageName}, i) => {
                  return (
                    <li
                      key={i}>
                      <Link
                        to={path}>
                        {pageName}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>

      <hr />
    </nav>
  )
}

export default Nav
