var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = { name: 'Anonymous' }, action) => {
	// state = state || { name: 'Anonymous' };
	
	// console.log('New action', action);
	switch(action.type) {
		case 'CHANGE_NAME':
			return {
				...state,
				name: action.name
			};
		default:
			return state;
	}
};
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
});

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
	type: 'CHANGE_NAME',
	name: 'Andrew'
};
store.dispatch(action);
console.log('Name should be Andrew', store.getState());

unsubscribe();

store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Emily'
});
console.log('Name should be Emily', store.getState());

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