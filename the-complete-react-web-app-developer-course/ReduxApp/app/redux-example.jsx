var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = { name: 'Anonymous' }, action) => {
	// state = state || { name: 'Anonymous' };

	return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

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