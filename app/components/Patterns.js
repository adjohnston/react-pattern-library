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
        const Component = components[story]
        const { propTypes, presets, notes } = stories[story]

        return (
          <div key={i}>
            <Pattern
              key={i}
              patternName={story}
              propTypes={propTypes}
              presets={presets}
              notes={notes}
              Component={Component}>
            </Pattern>
          </div>
        )
      })}
    </div>
  )
}

export default Patterns
