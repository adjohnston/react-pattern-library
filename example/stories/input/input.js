const constants = require('../../constants')

module.exports = {
  group: constants.groups.atoms,
  pageName: 'Input Fields',
  component: 'Input',

  propTypes: {
    placeholder: 'string',
  },

  presets: {
    Default: {
      placeholder: 'e.g. John Smith',
    },
  },
}
