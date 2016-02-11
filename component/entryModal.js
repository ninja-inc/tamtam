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
		);
	}
}
EntryModal.defaultProps = {}