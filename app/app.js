import React from 'react'
import { render } from 'react-dom'
import Patterns from './components/Patterns'
import fixtures from './fixtures'
import components from './components'

render(<Patterns
  fixtures={fixtures}
  components={components} />, document.getElementById('app'))
