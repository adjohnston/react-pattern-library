import React, { createClass } from 'react'
import PropsList from './PropsList'
import Notes from './Notes'
import { hyphenate } from '../utils/helpers'


const Pattern = createClass({
  getInitialState() {
    return this.props.propsList || {}
  },

  handleUpdateState(e) {
    const state = {}
    state[e.target.dataset.key] = e.target.value

    this.setState(state)
  },

  render() {
    const { header, notes, propsList, Component } = this.props

    const PropsListComponent = propsList && (
      <PropsList
        propsList={propsList}
        onUpdateState={this.handleUpdateState} />
    )

    const NotesComponent = notes && (
      <Notes
        notes={notes} />
    )

    return (
      <div>
        <h1>
          <a
            href={`#${hyphenate(header).toLowerCase()}`}>
            {header}
          </a>
        </h1>

        <div>
          <Component {...this.state} />
        </div>

        {PropsListComponent}
        {NotesComponent}
      </div>
    )
  }
})

export default Pattern
