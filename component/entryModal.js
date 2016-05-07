'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

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
			}
		}
		this.submitForm = this.submitForm.bind(this);
		this.changeStatRadio = this.changeStatRadio.bind(this);
	}
	render() {
		let stats = this.state.stats;
		console.log(stats);
		console.log(stats['morningOff']);

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
								<td><input type="text" name="name" placeholder="target name" /></td>
							</tr>
							<tr className="date">
								<th>DATE</th>
								<td><input id="input-date" type="date" name="date" autoComplete="on" required /></td>
							</tr>
							<tr className="time">
								<th>TIME</th>
								<td><input type="time" name="start" autoComplete="on" defaultValue="09:00" required />
								<span className="seperator">-</span>
								<input type="time" name="end" autoComplete="on" defaultValue="09:15" required />
								</td>
							</tr>
							<tr className="reason">
								<th>REASON</th>
								<td><input type="text" name="reason" placeholder="reason" /></td>
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
		console.log(newStats)

		for (let key in newStats) {
			newStats[key] = false;
		}
		console.log(event.target)
		newStats[event.target.value] = true;
		this.setState({stats: newStats});
	}
	submitForm(value) {
		console.log(value)
		console.log(value.target.form);
		console.log(value.target.form.getElementsByName("statIcon"));
	}
}
EntryModal.defaultProps = {}