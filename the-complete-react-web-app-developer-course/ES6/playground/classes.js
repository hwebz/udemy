class Person {
	constructor (name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		return `Hi! I'm ${this.name}.`;
	}
	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
	toString() {
		return JSON.stringify(this);
	}
}

class Child extends Person {
	constructor(name, age, like) {
		super(name, age);
		this.like = like;
	}
	getGreeting() {
		return `Hiiiii! My name is ${this.name} and I like ${this.like}`;
	}
	getFavoriteSubject() {
		return 'I like ${this.like}';
	}
}

// Baby getGreeting Wahhhh
class Baby extends Person {
	getGreeting() {
		return 'Wahhhhh!';
	}
}

//getDescription Andrew is 25 year(s) old.
var me = new Person('Andrew', 25);

console.log({age: 25}.toString());
console.log(me.toString());
console.log(me.getDescription());

var anonymous = new Child('Mike', 4, 'Cars');
console.log(anonymous.getGreeting());