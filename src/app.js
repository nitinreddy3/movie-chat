import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
	render() {
		return (
			<div>This is the React App!</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))
