'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

export default class SearchForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="search-area">
		    	<input type="text" name="condition" id="search-box" placeholder="Please Input Team, Name, Date" />
			    <span className="filter-conditon">2015/12/21</span>
			    <span className="filter-conditon">Platform Group</span>
			</div>
		);
	}
}
SearchForm.defaultProps = {}