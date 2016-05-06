'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

export default class EntryModal extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
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
						<input type="radio" name="icon" id="select1" defaultValue="1" checked="" />
						<label htmlFor="select1">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select2" defaultValue="2" checked="" />
						<label htmlFor="select2">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select3" defaultValue="3" checked="" />
						<label htmlFor="select3">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select4" defaultValue="4" checked="" />
						<label htmlFor="select4">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select5" defaultValue="5" checked="" />
						<label htmlFor="select5">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select6" defaultValue="6" checked="" />
						<label htmlFor="select6">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select7" defaultValue="7" checked="" />
						<label htmlFor="select7">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
						<input type="radio" name="icon" id="select8" defaultValue="8" checked="" />
						<label htmlFor="select8">
							<img className="stat-icon" src="images/icons/icon-train-delay.png" alt="train-delay" />
						</label>
					</div>
					<div className="date">
						DATE
						<input type="date" name="date" autoComplete="on" required />
					</div>
					<div className="time">
						TIME
						<input type="time" name="start" autoComplete="on" defaultValue="09:00" required />
						<span className="seperator">-</span>
						<input type="time" name="end" autoComplete="on" required />
					</div>
					REASON<textarea name="reason" placeholder="please input reason"></textarea>
					<input type="submit" defaultValue="SEND"/>
				</form>
			  </div>
			  <a href="#" className="close"><span>close</span></a>
			</section>
		);
	}
}
EntryModal.defaultProps = {}