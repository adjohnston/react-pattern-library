import React from 'react'
import Pattern from './Pattern'

const Patterns = props => {
  const { stories, components } = props

  return (
    <div>
      <header>
        <h1>Components</h1>
      </header>

      {Object.keys(stories).map((story, i) => {
        return (
          <div key={i}>
            {stories[story].map((modifiers, i) => {
              const Component = components[story]
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
