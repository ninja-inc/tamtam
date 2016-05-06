'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import 'whatwg-fetch'
import _ from 'underscore'

import Logo from './logo'
import SearchForm from './searchForm'
import AttendanceList from './attendanceList'
import EntryModal from './entryModal'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			absents: {
				items: [
					{
						member: null,
						stat: null
					}
				]
			}
		}
		this.setMemberInfo = this.setMemberInfo.bind(this);
		this.setDetails = this.setDetails.bind(this);
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

				{this.props.listElements.map((listElement, index) =>
					<AttendanceList listElement={listElement} absents={absents} key={'attendanceList' + index}/>
				)}
				<EntryModal />
			</div>
		);
	}
	componentDidMount() {
		this.setMemberInfo();
	}
	setMemberInfo() {
		fetch("http://chaus.herokuapp.com/apis/amam/absents",{
 	 		mode: 'cors'
		}).then(res => {
			return res.json();
		}).then(resJson => {
			console.log(JSON.stringify(resJson));

			this.setState({absents: resJson});
    		resJson.items.map((item, index) => {
				this.setDetails(item.member.href, 'member', index);
				this.setDetails(item.stat.href, 'stat', index);
			});

		})
	}
	setDetails(endpoint, stateType, index) {
		fetch("http://chaus.herokuapp.com" + endpoint, {
 	 		mode: 'cors',
 	 		cache: 'force-cache'
		}).then(res => {
			return res.json();
		}).then(resJson => {
			console.log(JSON.stringify(resJson));			
			let newAbsents = this.state.absents;

			switch (stateType) {
				case 'member':
					newAbsents.items[index].member = resJson;
					break;
				case 'stat':
					newAbsents.items[index].stat = resJson;
					break;
			}

			this.setState({absents: newAbsents});
		})
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
					id: "morning",
					title: "Morning-Day off",
					isCommentRequired: false
				},
				{
					id: "afternoon",
					title: "Afternoon-Day off",
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