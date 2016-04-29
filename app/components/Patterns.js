import React from 'react'
import Pattern from './Pattern'
import { firstKey } from '../utils/helpers'

const Patterns = props => {
  const { stories, components } = props

  return (
    <div>
      <header>
        <h1>Components</h1>
      </header>

      {stories.map((story, i) => {
        const key = firstKey(story)
        const Component = components[key]
        const { propTypes, presets } = story[key]

        return (
          <div key={i}>
            <Pattern
              key={i}
              patternName={key}
              propTypes={propTypes}
              presets={presets}
              Component={Component}>
            </Pattern>
          </div>
        )
      })}
    </div>
  )
}

export default Patterns
