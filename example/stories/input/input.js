const constants = require('../../constants')

module.exports = {
  group: constants.groups.atoms,
  pageName: 'Input Fields',
  component: 'Input',
  notesRef: 'input',

  propTypes: {
    placeholder: 'string',
  },

  presets: {
    Default: {
      placeholder: 'e.g. John Smith',
    },
  },
}
