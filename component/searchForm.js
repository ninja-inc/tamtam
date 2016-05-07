'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

export default class SearchForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="gridmaster">
				<form id="search-area" method="get" action="index.html">
					<input type="text" name="condition" id="search-box" placeholder="Please Input Team, Name, Date" />
				</form>
				<span className="filter-conditon">2015/12/21</span>
				<span className="filter-conditon">Development Group</span>
			</div>
		);
	}
}
SearchForm.defaultProps = {}