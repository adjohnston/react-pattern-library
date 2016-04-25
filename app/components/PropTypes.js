import React, { createClass } from 'react'

const PropTypes = createClass({
  getInitialState() {
    return this.props.preset || {}
  },

  handleUpdateState(e) {
    const state = {}
    state[e.target.dataset.key] = e.target.value

    this.setState(state)
    this.props.onUpdateState(e)
  },

  render() {
    return (
      <div>
        <h2>Props</h2>

        {Object.keys(this.state).map((key, i) => {
          return (
            <code
              key={i}>
              <span>
                {key}:
              </span>

              <input
                type="text"
                onChange={this.handleUpdateState}
                data-key={key}
                value={this.state[key]}>
              </input>

              <br />
            </code>
          )
        })}
      </div>
    )
  }
})

export default PropTypes
