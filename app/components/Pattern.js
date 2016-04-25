import React, { createClass } from 'react'
import PropTypes from './PropTypes'
import Notes from './Notes'
import { first, createFunc } from '../utils/helpers'

const Pattern = createClass({
  getInitialState() {
    const { propTypes, presets } = this.props
    return createFunc(propTypes, first(presets)) || {}
  },

  handleUpdateState(e) {
    const state = {}
    state[e.target.dataset.key] = e.target.value

    this.setState(state)
  },

  render() {
    const { patternName, propTypes, presets, notes, Component } = this.props

    const PropTypesComponent = propTypes && (
      <PropTypes
        propTypes={propTypes}
        preset={createFunc(propTypes, first(presets))}
        onUpdateState={this.handleUpdateState} />
    )

    const PresetsComponent = presets

    const NotesComponent = notes && (
      <Notes
        notes={notes} />
    )

    return (
      <div>
        <h1>
          {patternName}
        </h1>

        <Component
          {...this.state} />

        {PropTypesComponent}
        {NotesComponent}
      </div>
    )
  }
})

export default Pattern
