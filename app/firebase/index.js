import firebase from 'firebase';

try {

	var config = {
		apiKey: "AIzaSyBKbQ_TmPm0V3GlfrnCBsTfvMqg0gJt5Mg",
		authDomain: "react-todo-app-b2fae.firebaseapp.com",
		databaseURL: "https://react-todo-app-b2fae.firebaseio.com",
		storageBucket: "react-todo-app-b2fae.appspot.com",
	};


	firebase.initializeApp(config);
} catch(e) {

}


export var firebaseRef = firebase.database().ref();
export default firebase;