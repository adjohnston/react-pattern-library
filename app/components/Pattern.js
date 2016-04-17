import React from 'react'

const Pattern = props => {
  const { header, children: Component } = props

  return (
    <div>
      <h1>{header}</h1>

      <div>
        {Component}
      </div>
    </div>
  )
}

export default Pattern
