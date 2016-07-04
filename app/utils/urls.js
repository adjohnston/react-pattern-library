import React, { createClass } from 'react'
import { hyphenate } from '../utils/helpers'
import notes from '../notes'
import specs from '../specs'
import components from '../components'
import Pattern from '../components/Pattern'

const childRoutes = specs.map(({group, page, component, propTypes, presets}) => {
  const path = hyphenate(page.toLowerCase())

  const note = notes.reduce((acc, note) => {
    const componentName = component.toLowerCase()

    if (note[componentName] && componentName)
      acc += note[componentName]

    return acc
  }, '')

  const ChildComponent = () => {
    return <Pattern
      patternName={pageName}
      propTypes={propTypes}
      notes={note}
      presets={presets}
      Component={components[component]} />
  }

  return {
    path, group, pageName,
    component: ChildComponent
  }
})

export default childRoutes
