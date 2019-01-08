
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
import './entry.scss'

const state = window.__STATE__

ReactDOM.hydrate(
  <App state={state} />,
  document.getElementById('react-entry')
)
