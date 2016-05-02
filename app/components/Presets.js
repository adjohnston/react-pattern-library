import React, { createClass } from 'react'

const Presets = createClass({
  getInitialState() {
    return {
      currentPreset: 0
    }
  },

  handleOnClick(key, preset) {
    this.setState({currentPreset: key})
    this.props.handleUpdatePreset(preset)
  },

  render() {
    const { presets, handleUpdatePreset } = this.props

    return (
      <div>
        <h2>Presets</h2>

        {Object.keys(presets).map((preset, i) => {
          return (
            <button
              disabled={this.state.currentPreset === i}
              key={i}
              onClick={this.handleOnClick.bind(null, i, presets[preset])}>
              {preset}
            </button>
          )
        })}
      </div>
    )
  }
})

export default Presets
