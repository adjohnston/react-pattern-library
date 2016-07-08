import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import childRoutes from './utils/urls'
import Library from './components/Library'

const routes = {
  path: '/',
  component: Library,
  childRoutes
}

render((
  <Router history={hashHistory} routes={routes} />
), document.getElementById('app'))
