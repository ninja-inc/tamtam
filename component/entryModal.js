'use strict';
import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'
import 'whatwg-fetch'

export default class EntryModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			stats: {
				morningOff: false,
				afternoonOff: false,
				paidLeave: false,
				late: false,
				businessTrip: false
			},
			inputName: "",
			inputDate: moment().format('YYYY-MM-DD'),
			inputTimeStart: "09:00",
			inputTimeEnd: "09:15",
			inputReason: "bad condition",
		}
		this.submitForm = this.submitForm.bind(this);
		this.changeStatRadio = this.changeStatRadio.bind(this);
		this.changeInputName = this.changeInputName.bind(this);
		this.changeInputDate = this.changeInputDate.bind(this);
		this.changeInputTimeStart = this.changeInputTimeStart.bind(this);
		this.changeInputTimeEnd = this.changeInputTimeEnd.bind(this);
		this.changeInputReason = this.changeInputReason.bind(this);
	}
	render() {
		let state = this.state;
		let stats = state.stats;

		return (
			<section id="entry-modal" className="modal">
				<div className="modal-inner">
					<h2>Attendance Information</h2>
					<form className="entry-form" method="get" action="#">
						<p>please choose status</p>
						<div className="stat-icon-list">
							<input type="radio" name="statIcon" id="morningOff" value="morningOff" onChange={this.changeStatRadio} checked={stats['morningOff']} />
							<label htmlFor="morningOff">
								<img className="stat-icon" src="images/icons/icon-morning-off.png" alt="train-delay" />
							</label>
							<input type="radio" name="statIcon" id="afternoonOff" value="afternoonOff" onChange={this.changeStatRadio} checked={stats['afternoonOff']} />
							<label htmlFor="afternoonOff">
								<img className="stat-icon" src="images/icons/icon-afternoon-off.png" alt="train-delay" />
							</label>
							<input type="radio" name="statIcon" id="paidLeave" value="paidLeave" onChange={this.changeStatRadio} checked={stats['paidLeave']} />
							<label htmlFor="paidLeave">
								<img className="stat-icon" src="images/icons/icon-paid-leave.png" alt="train-delay" />
							</label>
							<input type="radio" name="statIcon" id="late" value="late" onChange={this.changeStatRadio} checked={stats['late']} />
							<label htmlFor="late">
								<img className="stat-icon" src="images/icons/icon-late.png" alt="train-delay" />
							</label>
							<input type="radio" name="statIcon" id="businessTrip" value="businessTrip" onChange={this.changeStatRadio} checked={stats['businessTrip']} />
							<label htmlFor="businessTrip">
								<img className="stat-icon" src="images/icons/icon-business-trip.png" alt="train-delay" />
							</label>
						</div>
						<table className="table-form">
							<tbody>
							<tr className="input-name">
								<th>NAME</th>
								<td><input type="text" name="name" placeholder="target name" value={state.inputName} onChange={this.changeInputName} /></td>
							</tr>
							<tr className="date">
								<th>DATE</th>
								<td><input id="input-date" type="date" name="date" value={state.inputDate} onChange={this.changeInputDate} autoComplete="on" required /></td>
							</tr>
							<tr className="time">
								<th>TIME</th>
								<td><input type="time" name="start" autoComplete="on" value={state.inputTimeStart} onChange={this.changeInputTimeStart} required />
								<span className="seperator">-</span>
								<input type="time" name="end" autoComplete="on" value={state.inputTimeEnd} onChange={this.changeInputTimeEnd} required />
								</td>
							</tr>
							<tr className="reason">
								<th>REASON</th>
								<td><input type="text" name="reason" placeholder="reason" value={state.inputReason} onChange={this.changeInputReason} /></td>
							</tr>
							</tbody>
						</table>
						<div className="submitbutton">
							<input type="button" defaultValue="SEND" onClick={this.submitForm}/>
						</div>
					</form>
				</div>
				<a href="#" className="close">
					<div className="btn"><span>close</span></div>
				</a>
			</section>
		);
	}
	changeStatRadio(event) {
		let newStats = this.state.stats;
		console.log("newStats:" + newStats);

		for (let key in newStats) {
			console.log("key:" + key);
			console.log("newStats[key]:" + newStats[key]);
			newStats[key] = false;
		}
		console.log("event.target.value:" + event.target.value);
		console.log("newStats[event.target.value]:" + newStats[event.target.value]);
		newStats[event.target.value] = true;

		this.setState({stats: newStats});
	}
	changeInputName(event) {
		this.setState({inputName: event.target.value});
	}
	changeInputDate(event) {
		this.setState({inputDate: event.target.value});
	}
	changeInputTimeStart(event) {
		this.setState({inputTimeStart: event.target.value});	
	}
	changeInputTimeEnd(event) {
		this.setState({inputTimeEnd: event.target.value});	
	}
	changeInputReason(event) {
		this.setState({inputReason: event.target.value});	
	}
	submitForm(value) {
		console.log(JSON.stringify(this.state));
		let state = this.state;
		let reqBody = {
 	 		member: state.inputName,
 	 		date: state.inputDate,
 	 		stat: 'paid',
 	 		start: state.inputTimeStart,
 	 		end: state.inputTimeEnd,
 	 		reason: state.inputReason
 	 	};
 	 	console.log(JSON.stringify(reqBody));
		fetch("http://chaus.herokuapp.com/apis/amam/absents",{
 	 		mode: 'cors',
 	 		method: 'POST',
 	 		header: {
 	 			'Accept': 'application/json',
 	 			'Content-Type': 'application/json'
 	 		},
 	 		body: JSON.stringify(reqBody)
		}).then(res => {
			return res.json();
		}).then(resJson => {
			console.log(JSON.stringify(resJson));
		})
	}
}
EntryModal.defaultProps = {}