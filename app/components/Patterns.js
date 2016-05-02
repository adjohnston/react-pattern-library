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
        const key = firstKey(spec)
        const Component = components[key]
        const { propTypes, presets } = spec[key]

        return (
          <div key={i}>
            <Pattern
              key={i}
              patternName={key}
              propTypes={propTypes}
              notes={notes[i]}
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
