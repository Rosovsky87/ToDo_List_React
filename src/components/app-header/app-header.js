import React from 'react';
import './app-header.css';

const AppHeader = ({ allDone, allToDo }) => {
	return (
		<div className="app-header d-flex">
			<h1>дела на сегодня:</h1>
			<h2>{allToDo} дел на сегодня, из них сделано: {allDone}</h2>
		</div>
	)
}

export default AppHeader;