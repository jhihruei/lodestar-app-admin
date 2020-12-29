import React from 'react'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader/root'
import App from './Application'
import { unregister } from './serviceWorker'
import './styles/default/index.scss'

const Application = process.env.NODE_ENV === 'development' ? hot(App) : App
const rootElement = document.getElementById('root')
render(<Application />, rootElement)

unregister()
