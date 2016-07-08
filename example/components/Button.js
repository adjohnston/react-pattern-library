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
        onClick={this.handleOnClick}
        className={this.props.className}>
        {this.props.children} + {this.state.counter}
      </button>
    )
  },

  handleOnClick() {
    this.setState({counter: this.state.counter + 1})
  }
})

export default Button
