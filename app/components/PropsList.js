import React, { createClass } from 'react'

const PropsList = createClass({
  render() {
    const { propsList, onUpdateState } = this.props

    return (
      <div>
        <h2>Props</h2>

        {Object.keys(propsList).map((key, i) => {
          return (
            <code
              key={i}>
              <span>
                {key}:
              </span>

              <input
                type="text"
                onChange={onUpdateState}
                data-key={key}
                value={propsList[key]}>
              </input>

              <br />
            </code>
          )
        })}
      </div>
    )
  }
})

export default PropsList
