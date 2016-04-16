import React from 'react'
import Pattern from './Pattern'

const Patterns = props => {
  const { fixtures, components } = props

  return (
    <div>
      {Object.keys(fixtures).map((fixture, i) => {
        return (
          <div key={i}>
            {fixtures[fixture].map((modifiers, i) => {
              const Component = components[fixture]
              const { header, props } = modifiers

              return (
                <Pattern
                  key={i}
                  header={header}>
                  <Component {...props} />
                </Pattern>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Patterns
