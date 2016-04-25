---
Button:
  props:
    className:
      - 'string'
      - 'isRequired'
    onClick:
      - 'func'
      - 'isRequired'
    children:
      - 'string'
      - 'isRequired'
  presets:
    - default:
        className: 'btn'
        children: 'A basic button'
        onClick: 'alert("hello")'
    - warning:
        className: 'btn btn--warning'
        children: 'A warning button'
  notes:
    developer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    designer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'   
---

# Button
