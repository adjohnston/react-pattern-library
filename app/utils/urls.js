import React, { createClass } from 'react'
import { hyphenate } from '../utils/helpers'
import notes from '../notes'
import specs from '../specs'
import components from '../components'
import Pattern from '../components/Pattern'

const childRoutes = specs.map(({group, page, component, propTypes, presets}) => {
  const path = hyphenate(page.toLowerCase())

  const note = notes.reduce((acc, note) => {
    acc += note[component.toLowerCase()]
    return acc
  }, '')

  const ChildComponent = () => {
    return <Pattern
      patternName={component}
      propTypes={propTypes}
      notes={note}
      presets={presets}
      Component={components[component]} />
  }

  return {
    path, group, page,
    component: ChildComponent
  }
})

export default childRoutes
