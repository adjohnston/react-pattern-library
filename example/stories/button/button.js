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
        onClick: 'this.setState({counter: this.state.counter + 1})',
      },

      Warning: {
        className: 'btn btn--warning',
        onClick: 'console.log(this)',
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
