import React from 'react'
import { render } from 'react-dom'
import Patterns from './components/Patterns'
import specs from './specs'
import notes from './notes'
import components from './components'

render(<Patterns
  specs={specs}
  notes={notes}
  components={components} />, document.getElementById('app'))
