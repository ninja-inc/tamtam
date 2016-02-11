'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import _ from 'underscore'

import Logo from './logo'
import SearchForm from './searchForm'
import AttendanceList from './attendanceList'
import EntryModal from './entryModal'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			absents: {items:[]}
		}
		this.setMemberInfo = this.setMemberInfo.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	render() {
		let absents = this.state.absents
		return (
			<div>
				<div className="wrapper">
					<Logo />
					<SearchForm />
				</div>

				<div className="clear"></div>

				{this.props.listElements.map(listElement =>
					<AttendanceList listElement={listElement} absents={absents} />
				)}
				<EntryModal />
			</div>
		);
	}
	componentDidMount() {
		this.setMemberInfo();
	}
	setMemberInfo() {
		$.ajax({
			type: 'GET',
			url: 'http://amam-api.herokuapp.com/absents',
			xhrFields: {
    			withCredentials: true
   			},
			success: absents => {
				absents.items.map(item => {
					// TODO do it as async
					item.member = this.getInfo(item.member.href);
					item.stat = this.getInfo(item.stat.href);
				});
				this.setState({absents:absents});
			}
		});
	}
	getInfo(endpoint) {
		return $.ajax({
			type: 'GET',
			url: 'http://amam-api.herokuapp.com' + endpoint,
			xhrFields: {
    			withCredentials: true
   			},
   			async: false,
			success: res => {
				return res;
			}
		}).responseJSON;
	}
}
App.defaultProps = {
	listElements: [
		{
			id: "paid",
			title: "Paid leave off",
			isCommentRequired: false,
			additionalElements: null
		},
		{
			id: "late",
			title: "Late",
			isCommentRequired: false,
			additionalElements: [
				{
					id: "half",
					title: "Half-Day off",
					isCommentRequired: false
				}
			]
		},
		{
			id: "business",
			title: "Business Event",
			isCommentRequired: true,
			additionalElements: null
		}
	]
}