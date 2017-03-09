var redux = require('redux');
var axios = require('axios');

console.log('Starting redux example');

/*var stateDefault = {
	name: 'Anonymous',
	hobbies: [],
	movies: []
};*/

var nextHobbyId = 1, nextMovieId = 1;

/*var oldReducer = (state = stateDefault, action) => {
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
*/

// Name reducer and action generators
// --------------
var nameReducer = (state = 'Anonymous', action) => {
	switch(action.type) {
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name: name
	}
};

var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby: hobby
	};
}

var removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id: id
	}
}
// Hobbies reducer and action generators
// --------------
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

var addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title: title,
		genre: genre
	};
}

var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id: id
	}
}
// Movies reducer and action generators
// --------------
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

// Map reducer and action generators
// --------------
var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
	switch(action.type) {
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url: undefined
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url: action.url
			};
		default:
			return state;
	}
};

var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
};

var fetchLocation = () => {
	store.dispatch(startLocationFetch());
	axios.get('http://ipinfo.io').then(function(res) {
		var loc = res.data.loc;
		var baseUrl = 'http://maps.google.com?q';

		store.dispatch(completeLocationFetch(baseUrl + loc));
	});
}

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer,
	map: mapReducer
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

	if (state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loading...';
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="'+state.map.url+'" target="_blank">View Your Location</a>';
	}
});

var currentState = store.getState();
// console.log('currentState', currentState);

fetchLocation();

/*var action = {
	type: 'CHANGE_NAME',
	name: 'Andrew'
};
store.dispatch(action);*/
store.dispatch(changeName('Andrew'));
// console.log('Name should be Andrew', store.getState());

// unsubscribe();

/*store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Running'
});*/
store.dispatch(addHobby('Running'))

/*store.dispatch({
	type: 'ADD_HOBBY',
	hobby: 'Walking'
});*/
store.dispatch(addHobby('Walking'))

/*store.dispatch({
	type: 'REMOVE_HOBBY',
	id: 2
})*/
store.dispatch(removeHobby(2))

/*store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
});*/
store.dispatch(changeName('Emily'));
// console.log('Name should be Emily', store.getState());

/*store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Mad Max',
	genre: 'Action'
});*/
store.dispatch(addMovie('Mad Max', 'Action'));

/*store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Star Wars',
	genre: 'Action'
});
*/
store.dispatch(addMovie('Star Wars', 'Action'));

/*store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 1
});*/
store.dispatch(removeMovie(1))

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