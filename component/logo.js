'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

export default class Logo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="logo">
				<img src="images/logo.png" alt="Attendance mamnagement system" />
			</div>
		);
	}
}
Logo.defaultProps = {}