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
		this.renderMemberList = this.renderMemberList.bind(this);
	}
	render() {
		return (
			<div>
				<div className="wrapper">
					<div className="logo">
							<img src="images/logo.png" alt="Attendance mamnagement system" />
					</div>
					<div id="search-area">
				    	<input type="text" name="condition" id="search-box" placeholder="Please Input Team, Name, Date" />
					    <span className="filter-conditon">2015/12/21</span>
					    <span className="filter-conditon">Platform Group</span>
					</div>
				</div>
				<div className="clear"></div>
				<div className="grid">
					<p className="title">Paid leave off</p>
					<hr className="fancy-line"></hr>
					{this.renderMemberList(this.state.absents.items, 'paid')}
					<div className="btn">
						<a href="#entry-modal">+ ADD INFORMATION</a>
					</div>
				</div>
				<div className="grid">
					<p className="title">Late</p>
					<hr className="fancy-line"></hr>
					{this.renderMemberList(this.state.absents.items, 'late')}
					<div className="balloon">Half-Day off</div>
					{this.renderMemberList(this.state.absents.items, 'half')}
					<div className="btn">
						<a href="#entry-modal">+ ADD INFORMATION</a>
					</div>
				</div>
				<div className="grid">
					<p className="title">Business Event</p>
					<hr className="fancy-line"></hr>
					{this.renderMemberList(this.state.absents.items, 'business', true)}
					<div className="btn">
						<a href="#entry-modal">+ ADD INFORMATION</a>
					</div>
				</div>

				<section id="entry-modal" className="modal">
					<div className="modal-inner">
					<div className="circle-wrapper">
				  		<div className="circle"></div>
					</div>
					<h2>Attendance Information</h2>
					<form className="entry-form" method="get" action="#">
						<input type="text" name="name" placeholder="please input target name" />
						<p>please choose status</p>
						<div className="stat-icon-list">
							<input type="radio" name="icon" id="select1" value="1" checked="" />
							<label for="select1">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select2" value="2" checked="" />
							<label for="select2">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select3" value="3" checked="" />
							<label for="select3">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select4" value="4" checked="" />
							<label for="select4">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select5" value="5" checked="" />
							<label for="select5">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select6" value="6" checked="" />
							<label for="select6">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select7" value="7" checked="" />
							<label for="select7">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
							<input type="radio" name="icon" id="select8" value="8" checked="" />
							<label for="select8">
								<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
							</label>
						</div>
						<div className="date">
							DATE
							<input type="date" name="date" autocomplete="on" required />
						</div>
						<div className="time">
							TIME
							<input type="time" name="start" autocomplete="on" value="09:00"required />
							<span className="seperator">-</span>
							<input type="time" name="end" autocomplete="on" required />
						</div>
						REASON<textarea name="reason" placeholder="please input reason"></textarea>
						<input type="submit" value="SEND" />
					</form>
				  </div>
				  <a href="#" className="close"><span>close</span></a>
				</section>
			</div>
		);
	}
	renderMemberList(items, statId, isCommentRequired) {
		return items.map(item => {
			if(item.stat.id == statId) {
				return (
					<div>
					    {isCommentRequired
			             ? <div>{this.renderComment(item)}</div>
			             : ""}
						<section className="item" key={item._id}>
							<img className="thumbnail" src={item.member.icon} alt="thumbnail" />
							<div className="name">{item.member.name}</div>
							<p className="department">{item.member.group.href}</p>
						</section>
					</div>
				)
			}
		});
	}
	renderComment(item) {
		return (
			<div className="rounded">
				<span className="reason">{item.reason}</span>
				<span className="time">{item.start}-{item.end}</span>
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
AttendanceList.defaultProps = {}