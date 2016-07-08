const constants = require('../../constants')

module.exports = {
  group: constants.groups.atoms,
  pageName: 'Buttons',
  component: 'Button',
  notesRef: 'button',

  propTypes: {
    className: 'string',
    children: 'string',
  },

  presets: {
    Default: {
      className: 'btn',
      children: 'A basic button & counter',
    },

    Warning: {
      className: 'btn btn--warning',
      children: 'A warning button'
    },

    Large: {
      className: 'btn btn--large',
      children: 'A large button'
    }
  },
}
