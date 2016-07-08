import React, { createClass } from 'react'
import ReactMarkdown from 'react-markdown'
import PropTypes from './PropTypes'
import Presets from './Presets'
import { first, createState, hasMoreThanOne } from '../utils/helpers'

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

    return (propTypes && presets) ? createState(propTypes, first(presets), this) : {}
  },

  handleUpdateState(e) {
    const state = {}
    const key = e.target.dataset.key

    state[key] = e.target.value

    this.setState(state)
  },

  handleUpdatePreset(state) {
    const component = this.renderComponent(null, state)
    this.setState(createState(this.props.propTypes, state, component))
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

    const PropTypesPresetsWrapperComponent = (PropTypesComponent ||
      PresetsComponent) && (
        <div
          className="rpl-container__span">
          {PropTypesComponent}
          {PresetsComponent}
        </div>
    ) || null

    const NotesComponent = notes && (
      <div
        className="rpl-container__span">
        <h2>Notes</h2>

        <ReactMarkdown
          source={notes} />
      </div>
    ) || null

    return (
      <div>
        <h1
          className="rpl-gutter">
          {patternName}
        </h1>

        <div
          className="rpl-gutter">
          {this.renderComponent(Component, this.state)}

          <hr />
        </div>

        <section
          className="rpl-container">
          {PropTypesPresetsWrapperComponent}
          {NotesComponent}
        </section>
      </div>
    )
  }
})

export default Pattern
