// function add(a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var todoAdd = [9, 5];
// console.log(add(...todoAdd));


// var groupA = ['Jen', 'Cony'];
// var groupB = ['Vikram'];
// var final = [...groupA, 3, ...groupB];
// console.log(final);


var person = ['Andrew', 25];
var person2 = ['Jen', 29];
// Hi Andrew, you are 25

function greet(name, age) {
	console.log('Hi ' + name + ", you are " + age);
}
greet(...person);
greet(...person2);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew

final.forEach(function(name) {
	console.log('Hi ' + name);
});