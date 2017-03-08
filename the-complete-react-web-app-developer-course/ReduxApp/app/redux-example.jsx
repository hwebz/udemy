var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: []
};

var nextHobbyId = 1, nextMovieId = 1;

var oldReducer = (state = stateDefault, action) => {
// var reducer = (state = { name: 'Anonymous' }, action) => {
	// state = state || { name: 'Anonymous' };
	
	// console.log('New action', action);
	switch(action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		case 'ADD_HOBBY':
			return {
				...state,
				hobbies: [
					...state.hobbies,
					{
						id: nextHobbyId++,
						hobby: action.hobby
					}
				]
			};
		case 'REMOVE_HOBBY':
			return {
				...state,
				// hobbies: state.hobbies.filter(function(hobby) {
				// 	return hobby.id !== action.id;
				// })
				hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
			}
		case 'ADD_MOVIE':
			return {
				...state,
				movies: [
					...state.movies,
					{
						id: nextMovieId++,
						title: action.title,
						genre: action.genre
					}
				]
			};
		case 'REMOVE_MOVIE':
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id !== action.id)
			}
		default:
			return state;
	}
};

var nameReducer = (state = 'Anonymous', action) => {
	switch(action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var hobbiesReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id: nextHobbyId++,
					hobby: action.hobby
				}
			];
		case 'REMOVE_HOBBY':
			return state.filter((hobby) => hobby.id !== action.id);
		default:
			return state;
	}
};

var moviesReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id: nextMovieId++,
					title: action.title,
					genre: action.genre
				}
			]
		case 'REMOVE_MOVIE':
			return state.filter((movie) => movie.id !== action.id);
		default:
			return state;
	}
};

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
	/*window.devToolsExtension ? window.devToolsExtension() : f => {
		return f;
	}*/
	window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('Name is', state.name);
	document.getElementById('app').innerHTML = state.name;

	console.log('New state', store.getState());
});

var currentState = store.getState();
// console.log('currentState', currentState);

var action = {
	type: 'CHANGE_NAME',
	name: 'Andrew'
};
store.dispatch(action);
// console.log('Name should be Andrew', store.getState());

// unsubscribe();

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Running'
});

store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Walking'
});

store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
});
// console.log('Name should be Emily', store.getState());

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Mad Max',
	genre: 'Action'
});

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Star Wars',
	genre: 'Action'
});

store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 1
});

/*// Pure function
function add(a, b) {
	return a + b;
}

var a = 3;
function add(b) {
	return a + b;
}

var result;
function add(a, b) {
	result = a + b;
	return result;
}

function add(a, b) {
	return a + b + new Date().getSeconds();
}

function changeProp(obj) {
	// change the obj param's value
	// obj.name = 'Jen';
	// return obj;

	// return new obj and don't change param's value
	return {
		...obj,
		name: 'Jen'
	};
}

var startingValue = {
	name: 'Andrew',
	age: 23
}

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);
*/