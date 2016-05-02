import React, { createClass } from 'react'
import PropTypes from './PropTypes'
import Presets from './Presets'
import { first, createFunc, hasMoreThanOne } from '../utils/helpers'

const Pattern = createClass({
  getInitialState() {
    const { propTypes, presets } = this.props

    return createFunc(propTypes, first(presets)) || {}
  },

  handleUpdateState(e) {
    const state = {}
    const key = e.target.dataset.key

    state[key] = e.target.value

    this.setState(state)
  },

  handleUpdatePreset(state) {
    this.setState(createFunc(this.props.propTypes, state))
  },

  render() {
    const { patternName, propTypes, presets, Component } = this.props

    const PropTypesComponent = propTypes && (
      <PropTypes
        propTypes={this.state}
        preset={this.state}
        onUpdateState={this.handleUpdateState} />
    )

    const PresetsComponent = presets && hasMoreThanOne(presets) && (
      <Presets
        presets={presets}
        handleUpdatePreset={this.handleUpdatePreset} />
    )

    // const NotesComponent = notes && (
    //   <Notes
    //     notes={notes} />
    // )

    return (
      <div>
        <h1>
          {patternName}
        </h1>

        <Component
          {...this.state} />

        {PropTypesComponent}
        {PresetsComponent}
      </div>
    )
  }
})

export default Pattern
