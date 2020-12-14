import React from 'react';
import TodoDeatail from '../todo-detail/todo-detail';
import './todo-list-item.css';


export default class TodoListItem extends React.Component {

	state = {
		thisDetail: false
	}

	showDetail = () => {
		this.setState({ thisDetail: !this.state.thisDetail })
	}

	render() {
		const { label, detail, onDelete, onToggleImportant, onToggleallDone, important, done } = this.props;
		const todoDetail = this.state.thisDetail ? <TodoDeatail>{detail}</TodoDeatail> : null;
		let classNames = 'app-list-item d-flex justify-content-between';
		let spanClassName = 'app-list-item-label';

		if (important) {
			classNames += ' important';
		}

		if (done) {
			classNames += ' done-icon';
			spanClassName += ' done';
		}

		return (
			<>
				<div className={classNames}>
					<span className={spanClassName}
						onClick={onToggleallDone}>
						{label}
					</span>
					<div className="d-flex justify-content-center align-items-center">
						<button
							className="btn-details btn-sm"
							type="button"
							onClick={this.showDetail}>
							<i className="fa fa-inbox"></i>
						</button>
						<button
							className="btn-exclamation btn-sm"
							type="button"
							onClick={onToggleImportant} >
							<i className="fa fa-exclamation"></i>
						</button>
						<button
							className="btn-trash btn-sm"
							type="button"
							onClick={onDelete}>
							<i className="fa fa-trash-o"></i>
						</button>
						<i className="fa fa-check"></i>
					</div>
				</ div>
				{todoDetail}
			</>
		)
	}
}
