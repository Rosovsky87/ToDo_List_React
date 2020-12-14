import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoStatusFilter from '../todo-status-filter/todo-status-filter';
import TodoList from '../todo-list/todo-list';
import TodoAddForm from '../todo-add-form/todo-add-form';
import { db, newId } from '../data/data';
import './app.css';


export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: db,
			searched: "",
			filter: "all",
		};
	}

	deliteItem = (id) => {
		this.setState(({ data }) => {
			let newData = data.filter((item) => item.id !== id)
			return {
				data: newData
			}
		});
	}

	addItem = (message, detailText) => {
		const newItem = {
			label: message,
			detail: detailText,
			important: false,
			id: newId(33)
		}
		if (newItem.label) {
			this.setState(({ data }) => {
				const newArr = [...data, newItem];
				return {
					data: newArr
				}
			});
		}
	}

	onToggleImportant = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(el => el.id === id);
			const old = data[index];
			const importantPost = { ...old, important: !old.important };
			const newData = [...data.slice(0, index), importantPost, ...data.slice(index + 1)]
			return {
				data: newData
			}
		})
	}

	onToggleallDone = (id) => {
		this.setState(({ data }) => {
			const index = data.findIndex(el => el.id === id);
			const old = data[index];
			const allDonePost = { ...old, done: !old.done };
			const newData = [...data.slice(0, index), allDonePost, ...data.slice(index + 1)];
			return {
				data: newData
			}
		})
	}

	searchPost = (el, searched) => {
		if (searched.length === 0) {
			return el
		}
		return el.filter((item) => item.label.indexOf(searched) > -1)
	}

	filterPost(el, filter) {
		if (filter === 'done') {
			return el.filter((item) => item.done)
		} else {
			return el
		}
	}

	onUpdateSearchApp = (searched) => {
		this.setState({ searched: searched })
	}

	onFilterSelect = (filter) => {
		this.setState({ filter: filter })
	}

	render() {
		const { data, searched, filter } = this.state;
		const allDone = data.filter(el => el.done).length;
		const allToDo = data.length;
		const visiblePosts = this.filterPost(this.searchPost(data, searched), filter);

		return (
			<div className="app" >
				<AppHeader
					allDone={allDone}
					allToDo={allToDo} />
				<div className="search-panel d-flex">
					<SearchPanel
						onUpdateSearchApp={this.onUpdateSearchApp} />
					<TodoStatusFilter
						filter={filter}
						onFilterSelect={this.onFilterSelect} />
				</div>
				<TodoList
					posts={visiblePosts}
					onDelete={this.deliteItem}
					onToggleDetails={this.onToggleDetails}
					onToggleImportant={this.onToggleImportant}
					onToggleallDone={this.onToggleallDone} />
				<TodoAddForm
					addItem={this.addItem} />
			</div >
		)
	}
}





