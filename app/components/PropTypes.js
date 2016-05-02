import React, { createClass } from 'react'

const PropTypes = createClass({
  getInitialState() {
    return this.props.preset || {}
  },

  componentWillReceiveProps(props) {
    this.setState(props.preset)
  },

  handleUpdateState(e) {
    const state = {}
    state[e.target.dataset.key] = e.target.value

    this.setState(state)
    this.props.onUpdateState(e)
  },

  render() {
    const { propTypes } = this.props

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
                disabled={typeof propTypes[key] === 'function'}
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
