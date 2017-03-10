import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAy89HkCC1NxaJz_HjT921kNYM9FOblKCk",
    authDomain: "mead-todo-app-9ab49.firebaseapp.com",
    databaseURL: "https://mead-todo-app-9ab49.firebaseio.com",
    storageBucket: "mead-todo-app-9ab49.appspot.com",
    messagingSenderId: "1023950189485"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	appName: 'Todo App',
	isRunning: true,
	user: {
		name: 'Andrew',
		age: 25
	},
	// todos: {
	// 	'123abcd': {
	// 		text: 'Film some vids'
	// 	}
	// }
}).then(() => {
	console.log('Set worked!');
}, (e) => {
	console.log('Set failed!');
});
// ADDING DATA
// firebaseRef.set({
// 	appName: 'Todo Application'
// });

// firebaseRef.child('user').set({
// 	name: 'Mike'
// });

// firebaseRef.child('app').set({
// 	name: 'Todo App'
// });

// UPDATING DATA
/*
firebaseRef.update({
	isRunning: false,
	'app/name': 'Todo Application'
});*/

/*firebaseRef.child('app').update({
	name: 'Todo Application'
}).then(() => {
	console.log('Update worked!');
}, (e) => {
	console.log('Update failed!');
});
firebaseRef.child('user').update({
	name: 'Mike'
});*/

// REMOVING DATA
// firebaseRef.remove();
// firebaseRef.child('app/name').remove();
/*firebaseRef.child('app').update({
	version: '2.0',
	name: null
});*/

// firebaseRef.update({
// 	isRunning: null,
// 	appName: null
// });
// firebaseRef.child('user/age').remove();

// FETCHING DATA
/*firebaseRef.once('value').then((snapshot) => {
	console.log('Got entire database', snapshot.val());
}, (e) => {
	console.log('Unable to fetch value', e);
});

firebaseRef.child('app').once('value').then((snapshot) => {
	console.log('Got app node', snapshot.key, snapshot.val());
}, (e) => {
	console.log('Unable to fetch value', e);
});
*/
/*
var logData = (snapshot) => {
	console.log('Got value', snapshot.val());
};

firebaseRef.on('value', logData);
// firebaseRef.off(logData); // Remove just one listener
firebaseRef.off(); // Remove all listener
firebaseRef.update({isRunning: false});*/

/*firebaseRef.child('user').on('value', (snapshot) => {
	console.log('User ref changed', snapshot.val());
});
firebaseRef.child('user').update({
	name: 'Mike'
});

firebaseRef.child('app').update({name: 'Something Else!'});*/

// ARRAYS
// var notesRef = firebaseRef.child('notes');
/*var newNodeRef = notesRef.push();
newNodeRef.set({
	text: 'Walk the dog'
});*/
/*notesRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});
notesRef.on('child_changed', (snapshot) => {
	console.log('child_changed', snapshot.key, snapshot.val());
});
notesRef.on('child_removed', (snapshot) => {
	console.log('child_removed', snapshot.key, snapshot.val());
});
var newNoteRef = notesRef.push({
	text: 'Walk a dog!'
});
console.log('Todo id', newNoteRef.key);*/

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});
todosRef.push({
	text: 'Todo 1'
});
todosRef.push({
	text: 'Todo 2'
});