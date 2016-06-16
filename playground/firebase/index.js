import firebase from 'firebase';

var config = {
	apiKey: "AIzaSyBKbQ_TmPm0V3GlfrnCBsTfvMqg0gJt5Mg",
	authDomain: "react-todo-app-b2fae.firebaseapp.com",
	databaseURL: "https://react-todo-app-b2fae.firebaseio.com",
	storageBucket: "react-todo-app-b2fae.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
	app: {
		name: 'React Todo App',
		version: '0.9.0'
	},
	isRunning: true,
	user: {
		name: 'Shiyao',
		age: 24
	},
});

// firebaseRef.update({
// 	isRunning: false,
// 	'app/version': '1.0.0'
// });

// firebaseRef.child('app').update({
// 	name: 'React TODO Application'
// }).then(function() {
// 	console.log('Update worked');
// }, function(e) {
// 	console.log(e);
// });

firebaseRef.update({
	'app/name': 'React Todo Application',
	'user/name': 'Shawn'
});