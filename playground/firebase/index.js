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
	}
});

var todosRef = firebaseRef.child('todos');
todosRef.on('child_added', (snapshot) => {
	console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
	text: 'Todo 1'
});

// var notesRef = firebaseRef.child('notes');

// var newNoteRef = notesRef.push({
// 	text: 'Walk the dog'
// });
// console.log(newNoteRef.key);

// notesRef.on('child_added', function(snapshot) {
// 	console.log(snapshot.key, snapshot.val());
// });


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

// firebaseRef.update({
// 	'app/name': 'React Todo Application',
// 	'user/name': 'Shawn'
// });

// //firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
// 	version: '2.0',
// 	name: null
// });

// firebaseRef.child('app').once('value').then(function(snapshot) {
// 	console.log(snapshot.key, snapshot.val());
// }, function(e) {
// 	console.log(e);
// });

// var logData = function(snapshot) {
// 	console.log(snapshot.val());
// } 
// firebaseRef.on('value', logData);

// firebaseRef.off();

// firebaseRef.update({
// 	isRunning: false
// });

// var logData = function(snapshot) {
// 	console.log(snapshot.val());
// }

// firebaseRef.child('user').on('value', logData);

// firebaseRef.child('user').update({
// 	name: 'Mike'
// });

// firebaseRef.child('app').update({
// 	name: 'Something else'
// });
