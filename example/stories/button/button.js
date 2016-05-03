module.exports = {
  Button: {
    propTypes: {
      className: 'string',
      onClick: 'func',
      children: 'string',
    },

    presets: {
      Default: {
        className: 'btn',
        onClick: 'alert("normal")',
        children: 'A basic button',
      },

      Warning: {
        className: 'btn btn--warning',
        onClick: 'alert("warning")',
        children: 'A warning button'
      },

      Large: {
        className: 'btn btn--large',
        onClick: 'console.log("large")',
        children: 'A large button'
      }
    },
  }
}
