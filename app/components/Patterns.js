import React from 'react'
import Pattern from './Pattern'

const Patterns = props => {
  const { fixtures, components } = props

  return (
    <div>
      <header>
        <h1>Components</h1>
      </header>
      
      {Object.keys(fixtures).map((fixture, i) => {
        return (
          <div key={i}>
            {fixtures[fixture].map((modifiers, i) => {
              const Component = components[fixture]
              const { header, props, notes } = modifiers

              return (
                <Pattern
                  key={i}
                  header={header}
                  notes={notes}
                  propsList={props}
                  Component={Component}>
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
