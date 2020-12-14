import React from 'react';
import { Component } from 'react';
import './todo-detail.css';


export default class TodoDeatail extends Component {

	render() {
		return (
			<div className="block" >
				<textarea
					disabled
					value={this.props.children}
					className="detail" />
			</div>)
	}
}

