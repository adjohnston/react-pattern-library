module.exports = {
  Button: {
    propTypes: {
      className: 'string',
      onClick: 'func',
      children: 'string',
    },

    presets: {
      Default: {
        className: '',
        onClick: 'alert("normal")',
        children: 'A basic button',
      },
    },
  }
}  
