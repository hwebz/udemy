var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
	// action.something = 2; // cannot extend params
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	}
};

// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	}
}

export var todosReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			return [
				...state,
				action.todo
			];
			// add case for TOGGLE_TODO completed equal to opposite value & updateCompletedAt
		case 'UPDATE_TODO':
			return state.map((todo) => {
				if (todo.id === action.id) {
					return {
						...todo,
						...action.updates
					}
				} else {
					return todo;
				}
			});
		case 'SET_TODOS':
			return [
				...state,
				...action.todos
			];
		default:
			return state;
	}
};