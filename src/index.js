
import React from 'react'
import { render } from 'react-dom'

import Header from './components/Header'



var $ = jQuery = require('./static/semantic/dist/jquery.js') 
// const $ = jQuery
window.jQuery = $
import './static/semantic/dist/semantic.min.css'
import './static/semantic/dist/semantic.min.js'

render(
	<Header />,
	document.getElementById('root')
)