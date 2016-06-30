import React from 'react'
import Pattern from './Pattern'
import { firstKey } from '../utils/helpers'

const Patterns = props => {
  const { specs, notes, components } = props

  return (
    <div>
      <header>
        <h1>Components</h1>
      </header>

      {specs.map((spec, i) => {
        const { component, propTypes, presets } = spec

        return (
          <div key={i}>
            <Pattern
              key={i}
              patternName={component}
              propTypes={propTypes}
              notes={notes[i]}
              presets={presets}
              Component={components[component]}>
            </Pattern>
          </div>
        )
      })}
    </div>
  )
}

export default Patterns
