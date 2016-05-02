import React from 'react'
import { render } from 'react-dom'
import Patterns from './components/Patterns'
import specs from './specs'
import components from './components'

render(<Patterns
  specs={specs}
  components={components} />, document.getElementById('app'))
