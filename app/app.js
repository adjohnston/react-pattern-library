import React from 'react'
import { render } from 'react-dom'
import Patterns from './components/Patterns'
import stories from './stories'
import components from './components'

render(<Patterns
  stories={stories}
  components={components} />, document.getElementById('app'))
