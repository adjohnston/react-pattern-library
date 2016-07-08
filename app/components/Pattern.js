import React, { createClass } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from './PropTypes'
import Presets from './Presets'
import { first, createFunc, hasMoreThanOne } from '../utils/helpers'

const Pattern = createClass({
  renderComponent: (() => {
    let component
    let state

    return (Component, newState) => {
      if (component && state === newState)
        return component

      component = Component && <Component {...newState} />
      state = newState

      return component
    }
  })(),

  getInitialState() {
    const { propTypes, presets } = this.props

    return (propTypes && presets) ? createFunc(propTypes, first(presets)) : {}
  },

  handleUpdateState(e) {
    const state = {}
    const key = e.target.dataset.key

    state[key] = e.target.value

    this.setState(state)
  },

  handleUpdatePreset(state) {
    const component = this.renderComponent(null, state)
    this.setState(createFunc(this.props.propTypes, state, component))
  },

  render() {
    const { patternName, propTypes, notes, presets, Component } = this.props

    const PropTypesComponent = propTypes && (
      <PropTypes
        propTypes={this.state}
        preset={this.state}
        onUpdateState={this.handleUpdateState} />
    ) || null

    const PresetsComponent = presets && hasMoreThanOne(presets) && (
      <Presets
        presets={presets}
        handleUpdatePreset={this.handleUpdatePreset} />
    ) || null

    const NotesComponent = notes && (
      <div>
        <h2>Notes</h2>

        <ReactMarkdown
          source={notes} />
      </div>
    ) || null

    return (
      <div>
        <h1>
          {patternName}
        </h1>

        {this.renderComponent(Component, this.state)}

        {PropTypesComponent}
        {PresetsComponent}
        {NotesComponent}
      </div>
    )
  }
})

export default Pattern
