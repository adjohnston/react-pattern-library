import React, { createClass } from 'react'
import { hyphenate } from '../utils/helpers'
import notes from '../notes'
import specs from '../specs'
import components from '../components'
import Pattern from '../components/Pattern'

const childRoutes = specs.map(({group, pageName, notesRef, component, propTypes, presets}) => {
  const path = hyphenate(pageName.toLowerCase())

  const note = notes.reduce((acc, note) => {
    if (note[notesRef])
      acc += note[notesRef]

    return acc
  }, '')

  const ChildComponent = () => {
    return <Pattern
      patternName={pageName}
      propTypes={propTypes}
      notes={note}
      presets={presets}
      Component={components[component] || null} />
  }

  return {
    path, group, pageName,
    component: ChildComponent
  }
})

export default childRoutes
