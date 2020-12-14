import React, { Component } from 'react';
import './todo-status-filter.css';


export default class TodoStatusFilter extends Component {

	constructor(props) {
		super(props);
		this.buttons = [
			{ name: "all", label: "Все" },
			{ name: "done", label: "Сделанные" }
		]
	}
	render() {

		const buttons = this.buttons.map((el) => {
			const { filter, onFilterSelect } = this.props;
			const active = filter === el.name;
			const clazz = active ? 'btn-info' : 'btn-outline-secondary'

			return (
				<button
					type="button"
					key={el.name}
					className={`btn ${clazz}`}
					onClick={() => onFilterSelect(el.name)}
				>{el.label}</button>
			)
		})

		return (
			<div className="btn-group">
				{buttons}
			</div>
		)
	}
}





