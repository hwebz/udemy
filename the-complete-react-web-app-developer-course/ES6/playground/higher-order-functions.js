/*function one(name, location) {
	console.log(name, location);
}

function two() {
	console.log('Args', arguments);
	one.apply(undefined, arguments);
}

two('Andrew', 'Philadenphia');
two.apply(undefined, ['Jen', 'Sam']);*/

var add = (a, b) => a + b;
var square = (a) => a * a;

var callAndLog = (func) => {
	return function() {
		var res = func.apply(undefined, arguments);
		console.log('Result is ' + res);
		return res;
	}
};
console.log(add(99,1));

var addAndLog = callAndLog(add);
addAndLog(44, -3);
console.log(addAndLog(44, -3));

// Create squareAndLog
var squareAndLog = callAndLog(square);
// Call squareAndLog with 3
squareAndLog(3);