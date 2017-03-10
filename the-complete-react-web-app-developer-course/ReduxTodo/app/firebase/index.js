import firebase from 'firebase';

try {
	var config = {
	    apiKey: "AIzaSyAy89HkCC1NxaJz_HjT921kNYM9FOblKCk",
	    authDomain: "mead-todo-app-9ab49.firebaseapp.com",
	    databaseURL: "https://mead-todo-app-9ab49.firebaseio.com",
	    storageBucket: "mead-todo-app-9ab49.appspot.com",
	    messagingSenderId: "1023950189485"
	  };
	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;