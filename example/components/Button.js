import React, { createClass } from 'react'

const Button = createClass({
  getInitialState() {
    return {
      counter: 0
    }
  },

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={this.props.className}>
        {this.state.counter}
      </button>
    )
  }
})

export default Button
