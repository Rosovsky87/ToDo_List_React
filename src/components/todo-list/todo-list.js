import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';


const TodoList = ({ posts, onDelete, onToggleImportant, onToggleDetails, onToggleallDone }) => {

	const elements = posts.map((item) => {
		const { label, important, id, done, detail } = item;

		return (
			<li key={id}
				className='list-group-item'>
				<TodoListItem
					detail={detail}
					label={label}
					done={done}
					id={id}
					important={important}
					onDelete={() => onDelete(id)}
					onToggleDetails={() => onToggleDetails(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleallDone={() => onToggleallDone(id)} />
			</li>
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default TodoList;