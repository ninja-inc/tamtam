'use strict';
import React from 'react'
import ReactDOM from 'react-dom'

export default class AttendanceList extends React.Component {
	constructor(props) {
		super(props);
		this.renderMemberList = this.renderMemberList.bind(this);
		this.renderAdditionalElement = this.renderAdditionalElement.bind(this);
	}
	render() {
		return (
			<div className="grid">
				<p className="title">{this.props.listElement.title}</p>
				<hr className="fancy-line"></hr>
				{this.renderMemberList(this.props.absents.items, this.props.listElement.id, this.props.listElement.isCommentRequired)}
				{this.renderAdditionalElement(this.props.listElement.additionalElements)}
				<div className="btn">
					<a href="#">+ ADD INFORMATION</a>
				</div>
			</div>
		);
	}
	renderMemberList(items, statId, isCommentRequired) {
		return items.map((item, index) => {
			if(item.stat != null && item.stat.id == statId) {
				return (
					<div key={item.id + index}>
					    {isCommentRequired
			             ? <div>{this.renderComment(item)}</div>
			             : ""}
						<section className="item">
							<img className="thumbnail" src={item.member.icon} alt="thumbnail" />
							<div className="name">{item.member.name}</div>
						</section>
					</div>
				)
			}
		});
	}
	renderAdditionalElement(additionalElements) {
		if (additionalElements != null) {
			return additionalElements.map((additionalElement, index) => (
				<div key={'additionalElement' + index}>
					<div className="balloon">{additionalElement.title}</div>
					{this.renderMemberList(this.props.absents.items, additionalElement.id, additionalElement.isCommentRequired)}
				</div>
			));
		}
	}
	renderComment(item) {
		return (
			<div className="rounded">
				<span className="reason">{item.reason}</span>
				<span className="time">{item.start}-{item.end}</span>
			</div>
		);
	}
}
AttendanceList.defaultProps = {}