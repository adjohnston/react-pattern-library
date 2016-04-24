import React, { createClass } from 'react'
import { capitalise } from '../utils/helpers'

const Tabbable = createClass({
  getInitialState() {
    return {
      currentNote: 0
    }
  },

  handleSwitchTab(currentNote) {
    this.setState({currentNote})
  },

  render() {
    const { notes } = this.props

    return (
      <div>
        <h2>Notes</h2>

        <ul>
          {Object.keys(notes).map((noteHeader, i) => {
            return (
              <li
                key={i}
                onClick={this.handleSwitchTab.bind(this, i)}>
                {`${capitalise(noteHeader)} Notes`}
              </li>
            )
          })}
        </ul>

        <div>
          {notes[Object.keys(notes)[this.state.currentNote]]}
        </div>
      </div>
    )
  }
})

export default Tabbable
