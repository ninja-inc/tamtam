'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import _ from 'underscore'

export default class AttendanceList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			absents: {items:[]},
			members: {items:[]}
		}
		this.setMemberInfo = this.setMemberInfo.bind(this);
		this.componentDidMount = this.componentDidMount.bind(this);
	}
	render() {
		return (
			<div>
				<div className="wrapper">
					<p> Attendance mamnagement system. </p>	
				</div>
				<div className="grid">
					<p className="title">Paid leave off</p>
					<hr className="fancy-line"></hr>
					{this.renderMember(this.state.absents.items, 'paid')}
					<div className="btn">
						<a href="#">+ ADD INFORMATION</a>
					</div>
				</div>
				<div className="grid">
					<p className="title">Late</p>
					<hr className="fancy-line"></hr>
					{this.renderMember(this.state.absents.items, 'late')}
					<div className="btn">
						<a href="#">+ ADD INFORMATION</a>
					</div>
				</div>
			</div>
		);
	}
	renderMember(items, statId) {
		return items.map(item => {
			if(item.stat.id == statId) {
				return (
					<section className="item" key={item._id}>
						<img className="thumbnail" src={item.member.icon} alt="thumbnail" />
						<div className="name">{item.member.name}</div>
						<p className="department">{item.member.group.href}</p>
					</section>
				)
			}
		})
	}
	componentDidMount() {
		this.setMemberInfo();
	}
	setMemberInfo() {
		$.ajax({
			type: 'GET',
			url: 'http://tamtam-api.herokuapp.com/absents',
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
			url: 'http://tamtam-api.herokuapp.com' + endpoint,
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
AttendanceList.defaultProps = {}