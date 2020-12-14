import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searched: ""
		}
	}

	onUpdateSearch = (e) => {
		this.setState({ searched: e.target.value });
		this.props.onUpdateSearchApp(e.target.value);
	}

	render() {
		return (
			<input
				className="form-control search-input"
				type="text"
				placeholder="Поиск по вашим делам"
				onChange={this.onUpdateSearch}
			/>
		)
	}
}
