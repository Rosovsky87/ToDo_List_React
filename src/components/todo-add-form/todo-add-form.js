import React, { Component } from 'react';
import './todo-add-form.css';


export default class TodoAddForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			detailText: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	onValueDetailChange = (e) => {
		this.setState({
			detailText: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		this.props.addItem(this.state.text, this.state.detailText);
		this.setState({
			text: '',
			detailText: ''
		})
	}

	render() {
		return (
			<form
				className="bottom-panel"
				onSubmit={this.onSubmit}>
				<div className="d-flex">
					<input
						type="text"
						placeholder="Еще одна задача на сегодня"
						className="form-control new-post-label"
						onChange={this.onValueChange}
						value={this.state.text}
					/>
				</div>
				<div className="d-flex">
					<textarea
						type="text"
						placeholder="Напишите подробнее о новой задаче"
						className="form-control new-post-label bottom-detail-panel"
						onChange={this.onValueDetailChange}
						value={this.state.detailText}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-outline-secondary">
					Добавить задачу
				</button>
			</form>
		)
	}
}
